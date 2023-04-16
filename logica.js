const d = document,
  img = d.querySelectorAll(".container__carousel-img"),
  text = d.querySelectorAll(".container__carousel-text"),
  lorem = d.querySelectorAll(".container__carousel-lorem"),
  left = d.querySelector(".container__carousel-left-arrow"),
  right = d.querySelector(".container__carousel-right-arrow");

const informacion = [
  {
    img: "./img/calculadora.svg",
    texto: "Calculadora",
    lorem:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae inventore exercitationem nobis quas qui est repellat hic cum ipsa? ",
  },
  {
    img: "./img/contador.svg",
    texto: "Contador",
    lorem:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae inventore exercitationem nobis quas qui est repellat hic cum ipsa?",
  },
  {
    img: "./img/modal.svg",
    texto: "Modal",
    lorem:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae inventore exercitationem nobis quas qui est repellat hic cum ipsa?",
  },
  {
    img: "",
    texto: "aca va el texto4",
    lorem:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae inventore exercitationem nobis quas qui est repellat hic cum ipsa?",
  },
  {
    img: "",
    texto: "aca va el texto5",
    lorem:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae inventore exercitationem nobis quas qui est repellat hic cum ipsa? ",
  },
  {
    img: "",
    texto: "aca va el texto6",
    lorem:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae inventore exercitationem nobis quas qui est repellat hic cum ipsa? ",
  },
  {
    img: "",
    texto: "aca va el texto7",
    lorem:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae inventore exercitationem nobis quas qui est repellat hic cum ipsa? ",
  },
  {
    img: "",
    texto: "aca va el texto8",
    lorem:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae inventore exercitationem nobis quas qui est repellat hic cum ipsa? ",
  },
  {
    img: "",
    texto: "aca va el texto9",
    lorem:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae inventore exercitationem nobis quas qui est repellat hic cum ipsa? ",
  },
];

let cont1 = 0; //-1
let cont2 = 1; //0
let cont3 = 2; //1

d.addEventListener("click", (e) => {
  if (e.target === right) {
    /*  if (cont1 <= 0) {
      cont1 = 9;
    }
    if (cont2 <= 0) {
      cont2 = 9; //8
    }
    if (cont3 <= 0) {
      cont3 = 9;
    } */
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
    console.log(`cont1: ${cont1}`);
    img[0].src = informacion[cont1].img;
    text[0].textContent = informacion[cont1].texto;
    lorem[0].textContent = informacion[cont1].lorem;
    /* console.log(cont1); */
    cont2 -= 1;
    console.log(`cont2: ${cont2}`);

    img[1].src = informacion[cont2].img;
    text[1].textContent = informacion[cont2].texto;
    lorem[1].textContent = informacion[cont2].lorem;
    /* console.log(cont2); */
    cont3 -= 1;
    console.log(`cont3: ${cont3}`);

    img[2].src = informacion[cont3].img;
    text[2].textContent = informacion[cont3].texto;
    lorem[2].textContent = informacion[cont3].lorem;
    /* console.log(cont3); */
  }

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
    console.log(`cont1: ${cont1}`);
    img[0].src = informacion[cont1].img;
    text[0].textContent = informacion[cont1].texto;
    lorem[0].textContent = informacion[cont1].lorem;
    cont2 += 1;
    console.log(`cont2: ${cont2}`);
    img[1].src = informacion[cont2].img;
    text[1].textContent = informacion[cont2].texto;
    lorem[1].textContent = informacion[cont2].lorem;
    cont3 += 1;
    console.log(`cont3: ${cont3}`);

    img[2].src = informacion[cont3].img;
    text[2].textContent = informacion[cont3].texto;
    lorem[2].textContent = informacion[cont3].lorem;

    /*   if (cont3 >= informacion.length - 1) {
      cont3 = -1;
    }
    if (cont2 >= informacion.length - 1) {
      cont2 = -1;
    }
    if (cont1 >= informacion.length - 1) {
      cont1 = -1;
    } */
  }
});
