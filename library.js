    const d = document,
libraryCont = d.querySelector(".library-cont"),
input = d.querySelector(".library-cont__input"),
search = d.querySelector(".library-cont__search"),
contInformation = d.querySelector(".library-cont__information-cont"),
contBtns = d.querySelector(".library-cont__btns-cont"),
btnReturn = d.querySelector(".library-cont__arrowBack"),
btnAdvanced = d.querySelector(".library-cont__arrowForward"),
firstNum = d.querySelector(".library-cont_firstNum"),
secondNum = d.querySelector(".library-cont__secondNum"),
thirdNum = d.querySelector(".library-cont__thirdNum"),
notNum = d.querySelector(".library-cont__notNum"),
lastNum = d.querySelector(".library-cont__lastNum"),
numPg = d.querySelectorAll(".library-cont__numPg");
//API access key
const idKey = "xoHfwzmcFL51QLGePR6yXHrd_SqtqCJvyedNRurllro";
//API URL
const url = "https://api.unsplash.com/";
//Identifies the total number of pages returned by the API in the request
let totalPages;
//Current page displayed 
let actualPage = 1;
//Page next to the current one
let prePage = 2;
//Third page to current
let afterPrePage = 3;
//Identifies if the validation of moving forward in page/s is done
let advanced;
//Identifies if the validation of going back in page/s is done
let returned;


export function library(){
    //To load the information only when you are on the page
    if(libraryCont){

        d.addEventListener("keydown",(e)=>{
            //If enter is pressed the code is executed
            if(e.key === "Enter"){
                //It is reported that the option to advance page/s must be validated
                advanced = 1;
                returned = 0;
                //function resetValues
                resetValues();
                //function searchPhotos
                searchPhotos();
            }
        })
    
        //Execute the code if clicked on...
        d.addEventListener("click",(e)=>{
            //click on "search"
            if(e.target === search){
                //It is reported that the option to advance page/s must be validated
                advanced = 1;
                returned = 0;
                //function resetValues
                resetValues();
                //function searchPhotos
                searchPhotos();
            }
            //click on "btnAdvanced"
            if(e.target === btnAdvanced){
                //If the current page is less than the total number of pages
                if(actualPage < totalPages){
                    //Advance to the next page
                    actualPage++;
                    //It is reported that the option to advance page/s must be validated
                    advanced = 1;
                    returned = 0;
                     //function changePages
                    changePages();
                    //function searchPhotos
                    searchPhotos();
                }
    
            }
            //click on "btnReturn"
            if(e.target === btnReturn){
                //If the current page is greater than 1
                if(actualPage > 1){
                    //go back one page
                    actualPage--;
                    //It is reported that the option to go back page/s must be validated
                    advanced = 0;
                    returned = 1;
                    //function changePages
                    changePages();
                    //function searchPhotos
                    searchPhotos();
                }
    
            }
            //click on "secondNum"
            if(e.target === secondNum){
                //The value of the current page is updated
                actualPage = prePage;
                //It is reported that the option to advance page/s must be validated
                advanced = 1;
                returned = 0;
                //function changePages
                changePages();
                //function searchPhotos
                searchPhotos();
            }
            //click on "thirdNum"
            if(e.target === thirdNum){
                //The value of the current page is updated
                actualPage = afterPrePage;
                //It is reported that the option to advance page/s must be validated
                advanced = 1;
                returned = 0;
                //function changePages
                changePages();
                //function searchPhotos
                searchPhotos();
            }
            //click en "lastNum"
            if(e.target === lastNum){
                //The value of the current page is updated
                actualPage = totalPages;
                //It is reported that the option to advance page/s must be validated
                advanced = 1;
                returned = 0;
                //function changePages
                changePages();
                //function searchPhotos
                searchPhotos();
            }
        })
    }
}
//Execute the request that has been made to the API
 function searchPhotos(){
    //Finds the value that was passed and the page number that was requested
    fetch(`${url}/search/photos?query=${input.value}&page=${actualPage}&client_id=${idKey}&per_page=9`)
    .then(info=>{
        //If successful, return the value
        if(info.ok){
            return info.json();
         }// If it fails, report the failure 
         else {
            alert(info.status); 
         }
    }
  )
    .then((imgs)=> {
        //Return to the top of the page on each request
        window.scroll(0,0); 
        //function filterResults
        filterResults(imgs);  
        //function validation
        validation();    
    }
    )
}

//Identify whether or not there are results in the request
function filterResults(data){
    //if there are results
    if(data.total >= 1){
        //total number of pages
        totalPages = data.total_pages;
        //assign the total value of pages
        lastNum.innerHTML = totalPages;
        //assign the value of the current page
        firstNum.innerHTML = actualPage;
        //if total pages are less than 5, hide "notNum"
        totalPages < 5? notNum.style.display = "none" : "";
        //function printSearchPhotos
        printSearchPhotos(data);
        //show "contBtns"
        contBtns.style.visibility = "visible"; 
    }//If there are not results
     else if ( data.total === 0){
        //remove any previous results
        if(libraryCont.children.length > 3){
            contInformation.nextElementSibling.remove();
        }
        //Hide the "numPg"
        contBtns.style.visibility = "hidden"; 
        numPg.forEach((item)=>{
            item.style.visibility = "hidden";
        })
        //Report no items found
        const p = d.createElement("p");
            p.classList.add("library-cont__notFound");
            p.textContent = "- No se encontraron imágenes asociadas -";
        contInformation.insertAdjacentElement("afterend",p);

    }

}
//Show the request results
function printSearchPhotos(data){
    //remove any previous results
    if(libraryCont.children.length > 3){
        contInformation.nextElementSibling.remove();
    }
    //Group the results in a "section"
    let section = d.createElement("section");
        section.classList.add("library-cont__imgs");
    for(let i=0; i < data.results.length; i++){
        let item = d.createElement("div");
            item.classList.add("library-cont__img");
            item.style.backgroundImage = `url(${data.results[i].urls.raw})`;
            section.insertAdjacentElement("afterbegin",item);
    }    
    //insert the results
    contInformation.insertAdjacentElement("afterend",section);
    numPg.forEach((item)=>{
        item.innerHTML = `Pg ${actualPage}/${totalPages}`;
        item.style.visibility = "visible";
    });

}

//Updates the pages depending on the number that has been clicked
function changePages(){
    //update values
    prePage = actualPage + 1;
    afterPrePage = actualPage +2;
    firstNum.innerHTML = actualPage;
    secondNum.innerHTML = prePage;
    thirdNum.innerHTML = afterPrePage;
    //hide "notNum"
    if(afterPrePage >= totalPages - 1){
        notNum.style.display = "none";
    }//show "notNum"
     else if(afterPrePage < totalPages - 1){
        notNum.style.display = "block";
    }
}

//Resets the values ​​when performing a new search
function resetValues(){
    actualPage = 1;
    prePage = 2;
    afterPrePage = 3;
    firstNum.innerHTML = actualPage;
    secondNum.innerHTML = prePage;
    thirdNum.innerHTML = afterPrePage;
    firstNum.style.display = "block";
    secondNum.style.display = "block";
    thirdNum.style.display = "block";
    notNum.style.display = "block";
}

//Valid and if necessary hide the numbers of the dynamic pagination
function validation(){
    //If requested to advance in the pages
    if(advanced === 1){
        
        if(actualPage === totalPages - 2){
            thirdNum.style.display = "none";
        } else if(actualPage === totalPages - 1){
            secondNum.style.display = "none";
            thirdNum.style.display = "none";
        } else if( actualPage === totalPages){
            firstNum.style.display = "none";
            secondNum.style.display = "none";
            thirdNum.style.display = "none";
        }
    }    //If requested to go back in the pages
     else if ( returned === 1){
        
        if(actualPage === totalPages - 1){
             firstNum.style.display = "block";
          } else if ( actualPage === totalPages - 2){
              secondNum.style.display = "block";
          } else if (actualPage === totalPages - 3){
              thirdNum.style.display = "block";
          }
    }

}
