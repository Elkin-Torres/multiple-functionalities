const d = document,
 info = d.querySelectorAll(".comp-container__info"),
 btns = d.querySelectorAll(".comp-container__btn");

//Function exported to logica.js
//Clicking on a btn will show the information it has, while hiding the information of the other btns
export function compania (){
    //In each info execute the following function
    info.forEach( function(inf){
        //By clicking on an info
        inf.addEventListener("click",()=>{
            //In each btns execute the following function
            btns.forEach(function(btn){
                //When clicking on a btn
                btn.addEventListener("click",(e)=>{
                    //If the btn is not inside of inf
                    if(e !== inf ){
                        //Hide the information
                        inf.classList.remove("comp-container__click");
                    }
                })
            })
        //Show the information of the inf   
        inf.classList.add("comp-container__click");
        })
    })
}