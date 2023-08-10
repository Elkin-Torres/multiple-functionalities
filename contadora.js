const d = document,
numero = d.querySelector(".cont-container__numero"),
btns = d.querySelectorAll(".cont-container__btn");

//Global variable for counter control
let global= 0;

export function contadora(){
    //Run function on all btn
    btns.forEach(function (btn) {
        //Click on btn
        btn.addEventListener("click", (e) =>{
            //Stores the btn container information
            const separado = e.currentTarget.classList;
            //If the container has the class, decrease the number
           if(separado.contains("cont-container__disminuir")){
            global --;
           }//If the container contains the class, increase the number
           else if(separado.contains("cont-container__aumentar")){
            global ++;
           }//If the container does not contain any of the 2 previous classes, format the number
            else{
            global = 0;
           }
           //Insert value to "number"
           numero.textContent = global;
           //If the number is greater than 0
           if(global > 0){
            //apply color
            numero.style.color = "var(--color-second)";
           }//If the number is less than 0
            else if (global < 0){
            //apply color
            numero.style.color = "var(--color-main)";
           }//if the number is 0
           else{
            //apply color
            numero.style.color = "black";
           }
        })
    })
}