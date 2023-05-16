const d = document,
numero = d.querySelector(".cont-container__numero"),
btns = d.querySelectorAll(".cont-container__btn");

let global= 0;

export function contadora(){

    btns.forEach(function (btn) {
        btn.addEventListener("click", (e) =>{
            const separado = e.currentTarget.classList;
           if(separado.contains("cont-container__disminuir")){
            global --;
           } else if(separado.contains("cont-container__aumentar")){
            global ++;
           } else{
            global = 0;
           }
           numero.textContent = global;

           if(global > 0){
            numero.style.color = "var(--color-second)";
           } else if (global < 0){
            numero.style.color = "var(--color-main)";
           }else{
            numero.style.color = "black";
           }
        })
    })
}