const d = document,
href= d.querySelectorAll(".container__carousel-option"),
  img = d.querySelectorAll(".container__carousel-img"),
  text = d.querySelectorAll(".container__carousel-text"),
  lorem = d.querySelectorAll(".container__carousel-lorem"),
  left = d.querySelector(".container__carousel-left-arrow"),
  right = d.querySelector(".container__carousel-right-arrow"),
  cambiarImagen = d.querySelector(".btnMenu__logo"),
  panel = d.querySelector(".panel");

const informacion = [
  {
    href: "calculadora.html",
    img: "./img/calculadora.svg",
    texto: "Calculadora",
    lorem:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae inventore exercitationem nobis quas qui est repellat hic cum ipsa? ",
  },
  {
    href:"contadora.html",
    img: "./img/contador.svg",
    texto: "Contador",
    lorem:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae inventore exercitationem nobis quas qui est repellat hic cum ipsa?",
  },
  {
    href:"resenias.html",
    img: "./img/resenia.svg",
    texto: "Reseñas",
    lorem:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae inventore exercitationem nobis quas qui est repellat hic cum ipsa?",
  },
  {
    href:"",
    img: "",
    texto: "aca va el texto4",
    lorem:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae inventore exercitationem nobis quas qui est repellat hic cum ipsa?",
  },
  {
    href:"",
    img: "",
    texto: "aca va el texto5",
    lorem:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae inventore exercitationem nobis quas qui est repellat hic cum ipsa? ",
  },
  {
    href:"",
    img: "",
    texto: "aca va el texto6",
    lorem:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae inventore exercitationem nobis quas qui est repellat hic cum ipsa? ",
  },
  {
    href:"",
    img: "",
    texto: "aca va el texto7",
    lorem:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae inventore exercitationem nobis quas qui est repellat hic cum ipsa? ",
  },
  {
    href:"",
    img: "",
    texto: "aca va el texto8",
    lorem:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae inventore exercitationem nobis quas qui est repellat hic cum ipsa? ",
  },
  {
    href:"",
    img: "",
    texto: "aca va el texto9",
    lorem:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae inventore exercitationem nobis quas qui est repellat hic cum ipsa? ",
  },
];

export default function carousel(){
    let cont1 = 0; //-1
    let cont2 = 1; //0
    let cont3 = 2; //1
    
    
    d.addEventListener("click", (e) => {
      if (e.target === right) {
    
        //Para poner en la ultima posicion del array "informacion" a la variable contadora
        if (cont1 === 0) {
          cont1 = 9;
        }
        if (cont2 === 0) {
          cont2 = 9;
        }
        if (cont3 === 0) {
          cont3 = 9;
        }
    
        cont1 -= 1;
    
        //Se inserta la información en los contenedores
        href[0].href = informacion[cont1].href;
        img[0].src = informacion[cont1].img;
        text[0].textContent = informacion[cont1].texto;
        lorem[0].textContent = informacion[cont1].lorem;
        cont2 -= 1;
        
        href[1].href = informacion[cont2].href;
        img[1].src = informacion[cont2].img;
        text[1].textContent = informacion[cont2].texto;
        lorem[1].textContent = informacion[cont2].lorem;
        cont3 -= 1;        
    
        href[2].href = informacion[cont3].href;
        img[2].src = informacion[cont3].img;
        text[2].textContent = informacion[cont3].texto;
        lorem[2].textContent = informacion[cont3].lorem;
       
      }
    
      //Para volver al inicio del carrousel de imagenes, si se está al final de éste y se oprime "left"
      if (e.target === left) {
        if (cont1 === 8) {
          cont1 = -1;
          cont2 = 0;
          cont3 = 1;
        }
    
        if (cont2 === 8) {
          cont2 = -1;
          cont3 = 0;
        }
    
        if (cont3 === 8) {
          cont3 = -1;
        }
    
        cont1 += 1;
    
        //Se inserta la información en los contenedores
        href[0].href = informacion[cont1].href;
        img[0].src = informacion[cont1].img;
        text[0].textContent = informacion[cont1].texto;
        lorem[0].textContent = informacion[cont1].lorem;
        cont2 += 1;

        href[1].href = informacion[cont2].href;
        img[1].src = informacion[cont2].img;
        text[1].textContent = informacion[cont2].texto;
        lorem[1].textContent = informacion[cont2].lorem;
        cont3 += 1;
    
        href[2].href = informacion[cont3].href;
        img[2].src = informacion[cont3].img;
        text[2].textContent = informacion[cont3].texto;
        lorem[2].textContent = informacion[cont3].lorem;
      }
    });
    
}

export function btnImg(){

let contImg = true;
  cambiarImagen.addEventListener("click",(e)=>{
    if(contImg){
      cambiarImagen.src = "./img/close-menu.svg";
      panel.classList.toggle("panel-active");
      contImg = false;
    } else {
      cambiarImagen.src = "./img/menu.svg";
      panel.classList.toggle("panel-active");
      contImg = true;
    }
  })
}