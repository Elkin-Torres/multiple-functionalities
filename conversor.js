const d = document,
    conversorCont = d.querySelector(".conversor-cont"),
    inputInfo = d.querySelector("#conversor-cont__info"),
    inputResult = d.querySelector(".conversor-cont__resul"),
    alert = d.querySelector(".conversor-cont__alert"),
    currencies = d.querySelectorAll(".conversor-cont__select"),
    btnConverter = d.querySelector(".conversor-cont__converter"),
    btnDelete = d.querySelector(".conversor-cont__delete"),
    value1 = d.querySelector(".conversor-cont__value1"),
    value2 = d.querySelector(".conversor-cont__value2"),
    initDate = d.querySelector("#conversor-cont__initDate"),
    finDate = d.querySelector("#conversor-cont__finDate"),
    historicalCont = d.querySelector(".conversor-cont__historical-cont"),
    btnHistorical = d.querySelector(".conversor-cont__btnHistorical"),
    infoResult = d.querySelector(".conversor-cont__info-result"),
    printDate = d.querySelector(".conversor-cont__print-date"),
    printData = d.querySelector(".conversor-cont__print-data"),
    initialCurrency = d.querySelector(".conversor-cont__initial-currency"),
    requiredCurrency = d.querySelector(".conversor-cont__required-currency"),
     host = 'api.frankfurter.app';

export async function conversorDivisas(){

    //To load the code when the page is in the "conversor.html" tab
    if(conversorCont){ 

        //Function setAttribute
        initDate.setAttribute("max",getActualTime());
        finDate.setAttribute("max",getActualTime());

            //Writing to the value identifies whether or not it matches the pattern
            inputInfo.addEventListener("keyup", (e)=>{
                let pattern = e.target.pattern || e.target.dataset.pattern;
                let regExp = new RegExp(pattern);
        
                if(e.target){
                    //If it meets the pattern
                    if(regExp.exec(inputInfo.value)){
                        alert.style.visibility = "hidden";
                        btnConverter.disabled = false;
                    }//if it doesn´t meet the pattern
                    else{
                        alert.innerHTML = "El valor ingresado no es válido";
                        alert.style.visibility = "visible";
                        btnConverter.disabled = true;
                        historicalCont.style.visibility = "hidden"; 
                    }

                }

            })


    try {//The API call is made
        const data = await fetch(`https://${host}/`);

        //If the answer is successful
        if(data.status === 200){
            //Get the list of currencies
            const dataCurrencies = await fetch(`https://${host}/currencies`)
            const dataGetCurrencies = await dataCurrencies.json();
            const dataObjectCurrencies = Object.entries(dataGetCurrencies);

            //Function currenciesInfo
            curreciesInfo(dataObjectCurrencies);

            //Execute a function depending on where you click
            d.addEventListener("click",(e)=>{
                //If a currency list option is not selected, hide the "section historical cont"
                if(e.target === value1){
                    !value1.value? historicalCont.style.visibility = "hidden": "";
                }
                //If a currency list option is not selected, hide the "section historical cont"
                if(e.target === value2){
                    !value2.value? historicalCont.style.visibility = "hidden": "";
                }
                //Execute a series of functions if the btnConverter is clicked
                if(e.target === btnConverter){
                    //function dataPrintCurrencies
                    dataPrintCurrencies();
                    //function showHistoricalSection
                    showHistoricalSection();
                    //hide infoResult
                    infoResult.style.display = "none";
                    //Clear the value of initDate
                    initDate.value = "";
                    //Clear the value of finDate
                    finDate.value = "";
                }
                //Execute a series of functions if btnDelete is clicked
                if(e.target === btnDelete){
                    //Clear the value of inputInfo
                    inputInfo.value = "";
                    //Clear the value of inputResult
                    inputResult.value = "";
                    //Clear the value of value1
                    value1.value = "";
                    //Clear the value of value2
                    value2.value = "";
                    //Clear the value of initDate
                    initDate.value = "";
                    //Clear the value of finDate
                    finDate.value = "";
                    //Hide historicalCont
                    historicalCont.style.visibility = "hidden";
                    //Hide infoResult
                    infoResult.style.display = "none";
                }
                //If you click on btnHistorical
                if(e.target === btnHistorical){
                    //function dataPrintHistorical
                    dataPrintHistorical();
                }
            })
            
        }//Identify if the API is not making the request correctly
        else if( data.status === 404){
            console.log("Error 404");
        }//Identify if the parameter is not being passed in the correct way
        else if( data.status === 401){
            console.log("Error 401");
        }
        
    } //    Identify if Failed to Connect to API
    catch (error) {
        console.log(`Algo salió mal:${error}`);
    }
}
/* Functions */
//Print currency lists
function curreciesInfo(data){
    //Identify the number of lists to print
    for( let i = 0; i < currencies.length ; i++){
        //print the whole list
        for(let j = 0; j < data.length; j++){
            //insert list in currencies[i]
            currencies[i].insertAdjacentHTML("beforeend",`<option value=${data[j][0]}>${data[j][0]}:${data[j][1]}</option>`);
        }
    }

}   

//Get the result of the currency to convert
async function dataPrintCurrencies(){
//If all the fields are with information
if(value1.value && value2.value && inputInfo.value){
    //If the currencies to be converted are different
    if(value1.value !== value2.value){
        //Make the request with the entered values
        const dataObtainCurrencie = await fetch(`https://${host}/latest?amount=${inputInfo.value}&from=${value1.value}&to=${value2.value}`);
        const dataObtainCurrencieTransfor = await dataObtainCurrencie.json();
        //Save converted currency
        const result = Object.values(dataObtainCurrencieTransfor.rates);
        //Insert converted currency to inputResult
        inputResult.value = result[0];
        //Hide infoResult
        infoResult.style.display = "none";

    } //If the currencies to be converted are the same
    else if(value1.value === value2.value){
    //function alerData
    alertData("Las divisas seleccionadas son iguales");
    //Clear the value of inputInfo
    inputInfo.value="";
    //Clear the value of inputResult
    inputResult.value = "";

    }

}//If there is unfilled information
 else {    
    //function alertData
    alertData("Falta registrar información");
}

}

//show error messages
function alertData(msg){
    //show the message
    setTimeout(()=>{
        alert.style.visibility = "visible";
        alert.innerHTML = msg;
        //hide the message
        setTimeout(()=>{
            alert.style.visibility = "hidden";
        },2000)

    })

}

//show or hide showHistoricalSection
function showHistoricalSection(){
    //If all the information is completed: show
    if(value1.value !== "" && value2.value !=="" && inputInfo.value !==""){
        historicalCont.style.visibility = "visible"; 
    }//If there is no information to fill out: hide
    else if(!value1.value || !value2.value || !inputInfo.value) {
        historicalCont.style.visibility = "hidden"; 
    }

}

//Show the selected historical of the currency
async function dataPrintHistorical(){
    //If the start date is less than the end date and both date fields are completed
    if(initDate.value <= finDate.value && initDate.value && finDate.value){      
        
        try{
            //the request is made to the API with the selected values
            const historical = await fetch(`https://${host}/${initDate.value}..${finDate.value}?amount=${inputInfo.value}&from=${value1.value}&to=${value2.value}`);
            //If the request is successful
            if(historical.status === 200){
                
                const getHistorical = await historical.json();
                //dates are saved
                const gethistorialKeys = Object.keys(getHistorical.rates);
                //currencies are saved
                const getHistoricalValues = Object.values(getHistorical.rates);
        
                //function getCurrencyValuesOrKeys
                getCurrencyValuesOrKeys(getHistoricalValues,Object.values);
        
                //function getCurrencyValuesOrKeys
                getCurrencyValuesOrKeys(getHistoricalValues,Object.keys);
        
                //The initial currency is entered in initialCurrency
                initialCurrency.innerHTML = getHistorical.base;    
                //function datePrint
                datePrint(gethistorialKeys);
                //infoResult is displayed
                infoResult.style.display = "block";
    
            }//If the request is not being made correctly
            else if ( historical.status === 404){
                //function alertData
                alertData("Los fines de semana no hay registro de información");
                //infoResult is hidden
                infoResult.style.display = "none";

            }

        }//Identify if Failed to Connect to API
        catch (error){

            console.log(`Algo salió mal:${error}`);
            
        }
        

    }//If no dates were selected
    else if( !initDate.value && !finDate.value){
        alertData("No se han seleccionado fechas");
    } //If the start date is greater than the end date
    else{
        //function alertData
        alertData("La fecha final debe ser más reciente o igual a la inicial"); 
        //Delete previous records
        if(printData.children.length >= 1){
            //hide infoResult
            infoResult.style.display = "none";
            //hide printData
            printData.innerHTML = "";
            //hide printDate
            printDate.innerHTML = "";
        }
    }    
}

//Get updated date
function getActualTime(){
    //save the year
    let actualYear = new Date().getFullYear();
    //save the mes
    let actualMonth = (new Date().getMonth()) + 1;
    //save the día
    let actualDate = new Date().getDate();
    //If the number of the month or the day is less than "10", a "0" is inserted at the beginning so that when it is passed as a parameter in the request, it can be recognized
    actualMonth < 10?actualMonth = `0${actualMonth}`:"";    
    actualDate < 10?actualDate = `0${actualDate}`:"";
    //The updated date is saved
    let getTime = `${actualYear}-${actualMonth}-${actualDate}`;

    return getTime;

}

//Separate the keys and values, depending on what you want, into an array and print the information
function getCurrencyValuesOrKeys(data,valueOrKey){
    //An array of arrays with the keys or the values ​​is obtained, depending on what is stipulated in the second parameter of the function
    const currencyValues = data.reduce(function(values, item){
        values.push(valueOrKey(item));
        return values;
    },[]);
    //function dataPrint
    dataPrint(currencyValues, valueOrKey);

}

//Print the historical of currency values
function dataPrint(currency, value){

    if(value === Object.values){
        //Save currency historical
        let resultCurrency = currency.map(function(item){
           return `<h4>${item}</h4>`;
        });
        //Print in printData the currency historical 
        printData.innerHTML = resultCurrency.join("");
        //Enter the title before the historical
        let results = d.createElement("h3");
            results.textContent = "Resultado";
            printData.insertAdjacentElement("afterbegin",results);

    } else if(value === Object.keys){
        //Enter "requiredCurrency" the name of the required currency
        requiredCurrency.innerHTML = currency[0].toString();
    }
}

//Print historical of currency dates
function datePrint(date){
    //Save the historical of dates
    let resultDate = date.map(function(item){
        return `<h4>${item}</h4>`;
     });
     //Insert to "printDate" the historical of the dates
    printDate.innerHTML = resultDate.join("");
    //Insert the title before the historical of the dates 
    let dateTitle = d.createElement("h3");
        dateTitle.textContent = "Fecha";
        printDate.insertAdjacentElement("afterbegin",dateTitle);

}

}  