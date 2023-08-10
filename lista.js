const d = document,
      alertText = d.querySelector(".list-cont__alert-text"),
      form = d.querySelector(".list-cont__input"),
      inputText = d.querySelector(".list-cont__input-text"),
      btnAdd = d.querySelector(".list-cont__btn-add"),
      listItems = d.querySelector(".list-cont__cont-items"),
      btnDelete = d.querySelector(".list-cont__btn-delete");

//glogal variables
let item;
let edit = false,
    idAssignment = "";


export function listaViveres (){

    d.addEventListener("DOMContentLoaded",()=>{

        //run function addItem when form is submitted
        if(form){
            form.addEventListener("submit", addItem);
        }
        //run function clearItems when clicked on btnDelete
        if(btnDelete){
            btnDelete.addEventListener("click",clearItems);
        }
        //Show items on screen refresh
        updateItems();
    
    
    /* Functions */
        //Insert or modifier an item
        function addItem(e){
            e.preventDefault();
    
            //Insert a new item
            if(inputText.value && !edit){
                const idRandom = new Date().getTime().toString();
    
                //function printUpdateItems
                printUpdateItems(idRandom , inputText.value);
                //function addToLocalStorage
                addToLocalStorage(idRandom,inputText.value);
                //function setBackToDefault
                setBackToDefault();
    
            }
            else if(inputText.value && edit){
                item.innerHTML = inputText.value;
                //function showAlertText
                showAlertText("¡Se editó un item!","list-cont__success-text");
                //function editItemLocalStorage
                editItemLocalStorage(idAssignment, inputText.value);
                //function setBackToDefault
                setBackToDefault();
            }
            else{
                showAlertText("No se agregó ningún item")
            }
            
        }
    
        //Show alert-text
        function showAlertText(text,addClass){
            alertText.style.visibility = "visible";
            alertText.innerHTML = text;
            alertText.classList.add(addClass);
    
            //Hide the alert-text
            setTimeout(()=>{
                alertText.style.visibility = "hidden";
                alertText.classList.remove(addClass);
            },1500);
        }
    
       //save item in local storage
       function addToLocalStorage(id, value){
        const addItemsLocal = {id:id, value:value};
        let listLocalStorage = getLocalStorage();    
        listLocalStorage.push(addItemsLocal);
        localStorage.setItem("list",JSON.stringify(listLocalStorage));
    
       } 
    
       // remove item from local storage
       function removeLocalStorage(id){
        let listLocalStorage = getLocalStorage();
        
        listLocalStorage = listLocalStorage.filter(function(item){
            if(item.id !== id){
                return item;
            }        
        });
    
        localStorage.setItem("list", JSON.stringify(listLocalStorage));
       }
    
       //edit item from local storage
       function editItemLocalStorage(id, value){
        let listLocalStorage = getLocalStorage();
        listLocalStorage = listLocalStorage.map(function(item){
            if(item.id === id){
                item.value = value;
            }
            return item;
        });
        
        localStorage.setItem("list",JSON.stringify(listLocalStorage));
    
       }
    
       //Get the item from the local storage
       function getLocalStorage(){
        return localStorage.getItem("list")? 
        JSON.parse(localStorage.getItem("list"))
        :[];
       }
    
       //set Back To Default
       function setBackToDefault(){
            inputText.value = "";
            edit = false;
            idAssignment = "";
            btnAdd.textContent = "Agregar";
       }
    
       //Delete all inserted items
       function clearItems(){
        let allItem = d.querySelectorAll(".list-cont__cont-item");
    
                allItem.forEach(function(item){
                    listItems.removeChild(item);
                });
    
                btnDelete.style.visibility = "hidden";
                showAlertText("La lista de víveres ha sido borrada");
                localStorage.removeItem("list");
                setBackToDefault();        
        
       }
    
       //Edit item value
       function editeOptionItem(e){
        const element = e.currentTarget.parentElement;
        item = e.currentTarget.previousElementSibling;
        inputText.value= item.innerHTML;
        edit = true;
        idAssignment = element.dataset.id;
        btnAdd.textContent = "Editar";
       }
    
       //Delete item value
       function deleteOptionItem(e){
        let selectedItemDel = e.currentTarget.parentElement;
        let selectedItemId = selectedItemDel.dataset.id;
        listItems.removeChild(selectedItemDel);
        if(listItems.children.length <= 1){
            btnDelete.style.visibility = "hidden";
        }
        showAlertText("Se eliminó un item");
        //function removeLocalStorage
        removeLocalStorage(selectedItemId);    
        setBackToDefault();
       }
    
       //function updateItems
       function updateItems(){
        let listLocalStorage = getLocalStorage();
        if(listLocalStorage.length >= 1){
            listLocalStorage.forEach(function(item){
                printUpdateItems(item.id , item.value);
            });
    
        }
       }
    
       //Updates the item that has been modified and inserts it to the list
       function printUpdateItems(id,value){

        if(listItems){
            
            listItems.insertAdjacentHTML("afterbegin",`<div class="list-cont__cont-item">
            <p class="list-cont__text">${value}</p>
            <img src="./img/checkBox.svg" alt="check-Box" class="list-cont__img list-cont__img-edit">
            <img src="./img/delete.svg" alt="Delete" class="list-cont__img list-cont__img-delete" data-id>
            </div>`);
                let classItem = d.querySelector(".list-cont__cont-item");
                classItem.dataset.id = id;
                //Select edit option
                let editeOption = d.querySelector(".list-cont__img-edit");
                //Select delete option
                let deleteOption = d.querySelector(".list-cont__img-delete");
                //function editeOptionItem
                editeOption.addEventListener("click",editeOptionItem);
                //function deleteOptionItem
                deleteOption.addEventListener("click",deleteOptionItem);
                //Show alert-text
                setTimeout(showAlertText("¡Se añadió un ítem exitosamente!","list-cont__success-text"),500);
                //Show bnt-delete
                btnDelete.style.visibility = "visible";
        }  
       }
    })

}