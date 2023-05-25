const d = document,
 info = d.querySelectorAll(".comp-container__info"),
 btns = d.querySelectorAll(".comp-container__btn");


export function compania (){

    info.forEach( function(inf){
        inf.addEventListener("click",()=>{
            btns.forEach(function(btn){
                btn.addEventListener("click",(e)=>{
                    if(inf !== e){
                        inf.classList.remove("comp-container__click");
                    }
                })
            })

        inf.classList.add("comp-container__click");
       
        })
    })
}