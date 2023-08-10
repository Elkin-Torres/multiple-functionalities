const d = document,
  contCalculadora = d.querySelector(".cont__calculadora"),
  almacenar = d.querySelector(".cont__calculadora-almacenar"),
  ingresar = d.querySelector(".cont__calculadora-numero"),
  cambioSigno = d.querySelector(".cont__calculadora-menos"),
  btnCe = d.querySelector(".cont__calculadora-ce"),
  btnC = d.querySelector(".cont__calculadora-c"),
  btnDivisor = d.querySelector(".cont__calculadora-divisor"),
  btnCuadrado = d.querySelector(".cont__calculadora-cuadrado"),
  btnRaiz = d.querySelector(".cont__calculadora-raiz"),
  btnDividir = d.querySelector(".cont__calculadora-dividir"),
  btnSiete = d.querySelector(".cont__calculadora-siete"),
  btnOcho = d.querySelector(".cont__calculadora-ocho"),
  btnNueve =d.querySelector(".cont__calculadora-nueve"),
  btnPor = d.querySelector(".cont__calculadora-por"),
  btnCuatro = d.querySelector(".cont__calculadora-cuatro"),
  btnCinco = d.querySelector(".cont__calculadora-cinco"),
  btnSeis = d.querySelector(".cont__calculadora-seis"),
  btnMenos = d.querySelector(".cont__calculadora-menos-operacion"),
  btnUno = d.querySelector(".cont__calculadora-uno"),
  btnDos = d.querySelector(".cont__calculadora-dos"),
  btnTres = d.querySelector(".cont__calculadora-tres"),
  btnMas = d.querySelector(".cont__calculadora-mas"),
  btnSigno = d.querySelector(".cont__calculadora-signo"),
  btnCero = d.querySelector(".cont__calculadora-cero"),
  btnPunto = d.querySelector(".cont__calculadora-punto"),
  btnIgual = d.querySelector(".cont__calculadora-igual"),
  btnDisabled = d.querySelectorAll(".cont__calculadora-estilo");

//To control the number that is being entered
const contadora1 = [];
//To save the first number entered
const contadora2 = [];
//To control that only one decimal point is entered
let punto = 0;
//To control the sign change of the number being entered
let masMenos = 0;
//To control the number "0" when you want to enter as the first and only digit
let cero = 0;
//To control division by "0"
let dividirCero = 0;
//To control the negative root
let raizNegativa = 0;
/* For the control of operations */
const contenedorOperacion = [];

let botonIgual = 0;


//To enter the sign of the selected operation
function operacionInicial(signo){
  let span = d.createElement("span");
  span.classList.add("signoAlmacenar");
  span.textContent= signo;
  almacenar.insertAdjacentElement("beforeend", span);
}

//To change the sign of the selected operation (what was done in "operacionInicial")
function cambiarOperacion(signo){
  const tieneHijo = almacenar.querySelector(":first-child") !== null;

  if(tieneHijo){
    almacenar.removeChild(almacenar.firstElementChild);
    let span = d.createElement("span");
    span.classList.add("signoAlmacenar");
    span.textContent= signo;
    almacenar.insertAdjacentElement("beforeend", span); 
  }else{
    let span = d.createElement("span");
    span.classList.add("signoAlmacenar");
    span.textContent= signo;
    almacenar.insertAdjacentElement("beforeend", span); 
  }

}

//To execute divide operations with dividend "1" (when "1/x" is selected), if there is no number in "contadora 2"
function divisor(){

  let numero = Number(contadora1.join(""));

  if(numero === 0){
    almacenar.textContent = "No se puede dividir entre 0";
    contadora1.length = 0;
    contadora2.length = 0;
    ingresar.textContent= "-";
    dividirCero = 1;
  } else {    
      let resultado = 1 / numero;
      let resultadoFinal = Math.round(resultado * 100)/100;
      almacenar.textContent = resultadoFinal;
      ingresar.textContent = "-";
      contadora2.push(resultadoFinal);
      contadora1.length = 0;
  }
}

//To execute the operations of dividing with dividend "1" (when "1/x" is selected), if there is a number in "contadora 2" and an operation has also been selected to perform with the number entered in "contadora1
function divisorParaOperar(){
  let numero = Number(contadora1.join(""));
  let resultado = 1 / numero;
  let resultadoFinal = Math.round(resultado * 100)/100;
  contadora1.length = 0;
  contadora1.push(resultadoFinal);
}

//To execute the squaring operations if there is no number in "counter2"
  function elevarCuadrado(){
    let resultado = Math.pow(Number(contadora1.join("")), 2);
     let resultadoFinal = Math.round(resultado * 100)/100;
    almacenar.textContent = resultadoFinal;
    ingresar.textContent = "-";
    contadora2.push(resultadoFinal);
    contadora1.length = 0;
  }
  
//To execute the squaring operations if there is a number in "contadora2" and an operation has also been selected to perform with the result of squaring the value entered in "contador1"
  function elevarCuadradoParaOperar(){
    let numero = Number(contadora1.join(""));

    let resultado = Math.pow(numero,2);
    let resultadoFinal = Math.round(resultado * 100) / 100;
    contadora1.length = 0;
    contadora1.push(resultadoFinal);
  }


//To execute the square root operations if there is no number in "counter2"
function raizCuadrada(){
  let numero = Number(contadora1.join(""));

  if(masMenos === 1){
    almacenar.textContent = "numeros negativos no tienen raiz";
    contadora1.length = 0;
    contadora2.length = 0;
    ingresar.textContent= "-";
    raizNegativa = 1;
  } else{
    let resultado = Math.sqrt(numero);
     let resultadoFinal = Math.round(resultado * 100)/100;
    almacenar.textContent = resultadoFinal;
    ingresar.textContent = "-";
    contadora2.push(resultadoFinal);
    contadora1.length = 0;
  }
}

//To execute the square root operations if there is a number in "contadora2" and also an operation has been selected to perform with the result of the square root that was entered in "contador1"
function raizCuadradaParaOperar(){
  let numero = Number(contadora1.join(""));

  let resultado = Math.sqrt(numero);
  let resultadoFinal = Math.round(resultado * 100) / 100;
  contadora1.length = 0;
  contadora1.push(resultadoFinal);
}


//To execute any operation of: addition, subtraction, multiplication or division
function operacion (){
  let numero1 = Number(contadora2.join(""));
  let numero2 = Number(contadora1.join(""));
  let operacionAEjecutar = contenedorOperacion.join("");

  if(operacionAEjecutar === "sumar" ){
    let resultadoInicial = numero1 + numero2;
    let resultadoFinal = Math.round(resultadoInicial*100)/100;
    almacenar.textContent = resultadoFinal;
    ingresar.textContent = "-";
    contadora2.length = 0;
    contadora2.push(resultadoFinal);
    contadora1.length = 0;
  } else if(operacionAEjecutar === "restar"){
    let resultadoInicial = numero1 - numero2;
    let resultadoFinal = (resultadoInicial >= 0 || -1)* Math.round(Math.abs(resultadoInicial)*100)/100;
    almacenar.textContent = resultadoFinal;
    ingresar.textContent = "-";
    contadora2.length = 0;
    contadora2.push(resultadoFinal);
    contadora1.length = 0;
  } else if(operacionAEjecutar === "multiplicar"){

    if(cero === 1){
      contadora1.push(0);
      let resultadoInicial = numero1 * numero2;
      almacenar.textContent = resultadoInicial;
      ingresar.textContent = "-";
      contadora2.length = 0;
      contadora2.push(resultadoInicial);
      contadora1.length = 0;
      cero = 0;

    }else {

    let resultadoInicial = numero1 * numero2;
    let resultadoFinal = (resultadoInicial >= 0 || -1) * Math.round(Math.abs(resultadoInicial)*100)/100;
    almacenar.textContent = resultadoFinal;
    ingresar.textContent = "-";
    contadora2.length = 0;
    contadora2.push(resultadoFinal);
    contadora1.length = 0;
  }
  } else if(operacionAEjecutar === "dividir"){

    if ( cero === 1){
      almacenar.textContent = "No se puede dividir por 0"
      ingresar.textContent ="-";
      contadora2.length = 0;
      contadora1.length = 0;
      cero === 0;
      dividirCero = 1;
    }else {

    let resultadoInicial = numero1 / numero2;
    let resultadoFinal = (resultadoInicial >= 0 || -1) * Math.round(Math.abs(resultadoInicial)*100)/100;
    almacenar.textContent = resultadoFinal;
    ingresar.textContent = "-";
    contadora2.length = 0;
    contadora2.push(resultadoFinal);
    contadora1.length = 0;
  }
  }


}

//Function exported to logica.js
export function calculando() {

  if(contCalculadora){
    d.addEventListener("DOMContentLoaded",()=>{
      
        function calculadora(registro){
          
      
      
        //For entering the numbers from 1 to 9
        if ( contadora1.length <= 26 &&
         ( registro === "1" ||
          registro === "2" ||
          registro === "3" ||
          registro === "4" ||
          registro === "5" ||
          registro === "6" ||
          registro === "7" ||
          registro === "8" ||
          registro === "9" )
        ) {
          //If no number has been entered yet
          if(contadora1.length === 0){
            ingresar.textContent = registro;
            contadora1.push(registro);
          }//if you have already started entering numbers
          else{
            ingresar.textContent += registro;
            contadora1.push(registro);
          }
        }
        
        //For the entry of the number "0"
        if(contadora1.length <= 23){
          if(registro === "0" && contadora1.length !== 0){
            ingresar.textContent += registro;
            contadora1.push(registro);
          } else if(registro === "0" && contadora1.length === 0){
            cero = 1;
            ingresar.textContent = 0;
          }
        }
        
        
        //To enter the decimal point to the number
        if(registro === "."){
        if(punto === 0 && contadora1.length === 0){
        ingresar.textContent = 0;
        ingresar.textContent += registro;
        contadora1.push(0, registro);
        cero = 0;
        punto = 1;
        } else if(punto === 0 && contadora1.length !== 0){
        ingresar.textContent += registro;
        contadora1.push(registro);
        punto = 1;
        }
        }
        //To change the number being entered to negative
        if(registro === "m"){
        if(masMenos === 0 && contadora1.length !== 0){
          contadora1.unshift("-");
          cambioSigno.classList.remove("hidden");
          masMenos = 1;
        }else if(masMenos === 1){
          contadora1.shift();
          cambioSigno.classList.add("hidden");
          masMenos = 0;
        }
        }   
        
        //To show at the end of "store" which operation is being chosen to execute
          //When "plus" is selected
          if(registro === "+"){
            if(contadora1.length === 0 && contadora2.length === 0 && cero === 0){
              contadora2.push(0);
              almacenar.textContent = 0; 
              contenedorOperacion.push("sumar");    
              operacionInicial("+");
            } else if(contadora2.length === 0){
              if( cero === 1){
              contadora2.push(Number(contadora1.join("")));
              almacenar.textContent = 0; 
              contadora1.length = 0;
              ingresar.textContent = "-";
              masMenos = 0;
              punto = 0;
              contenedorOperacion.push("sumar");    
              operacionInicial("+");
              cambioSigno.classList.add("hidden");
              cero === 0;
              }else{
              contadora2.push(Number(contadora1.join("")));
              almacenar.textContent = contadora1.join(""); 
              contadora1.length = 0;
              ingresar.textContent = "-";
              masMenos = 0;
              punto = 0;
              contenedorOperacion.push("sumar");
          
              operacionInicial("+");
              cambioSigno.classList.add("hidden");
            }
            }else if(contadora2.length !== 0 && contenedorOperacion.length === 0  && (contadora1.length !== 0 || cero === 1)){
              contadora2.length = 0;
              contadora2.push(Number(contadora1.join("")));
              almacenar.textContent = Number(contadora1.join(""));
              contadora1.length = 0;
              ingresar.textContent = "-";
              operacionInicial("+");
              contenedorOperacion.push("sumar");
              cero = 0;
              masMenos = 0;
              punto = 0;
              cambioSigno.classList.add("hidden");
            }else if(contadora2.length !== 0 && (contadora1.length !==0 || cero === 1)){
              operacion();
              contenedorOperacion.length = 0;//
              contenedorOperacion.push("sumar");
              masMenos = 0;
              punto = 0;
              cambioSigno.classList.add("hidden");
              operacionInicial("+");//
            }else if(contadora2.length !== 0 && contadora1.length === 0){
              contenedorOperacion.length = 0;//
              contenedorOperacion.push("sumar");
              cambiarOperacion("+");
            }
        
          }
        
          //When "subtract" is selected
          if(registro === "-"){
            if(contadora1.length === 0 && contadora2.length === 0 && cero === 0){
              contadora2.push(0);
              almacenar.textContent = 0; 
              contenedorOperacion.push("restar");    
              operacionInicial("-");
            } else if(contadora2.length === 0){
              if( cero === 1){
                contadora2.push(Number(contadora1.join("")));
                almacenar.textContent = 0; 
                contadora1.length = 0;
                ingresar.textContent = "-";
                masMenos = 0;
                punto = 0;
                contenedorOperacion.push("restar");    
                operacionInicial("-");
                cambioSigno.classList.add("hidden");
                cero === 0;
                } else {
              contadora2.push(Number(contadora1.join("")));
              almacenar.textContent = contadora1.join(""); 
              contadora1.length = 0;
              ingresar.textContent = "-";
              masMenos = 0;
              punto = 0;
              contenedorOperacion.push("restar");    
              operacionInicial("-");
              cambioSigno.classList.add("hidden");
            }
            }else if(contadora2.length !== 0 && (contadora1.length !==0 || cero === 1)){
              operacion();//
              contenedorOperacion.length = 0;//
              contenedorOperacion.push("restar");
              masMenos = 0;
              punto = 0;
              cambioSigno.classList.add("hidden");
              operacionInicial("-");//
        
            }else if(contadora2.length !== 0 && contadora1.length === 0){
              contenedorOperacion.length = 0;//
              contenedorOperacion.push("restar");
              cambiarOperacion("-");
            }
            
          }
           //When "multiply" is selected
           if(registro === "*"){
            if(contadora1.length === 0 && contadora2.length === 0 && cero === 0){
              contadora2.push(0);
              almacenar.textContent = 0; 
              contenedorOperacion.push("multiplicar");    
              operacionInicial("*");
            } else if(contadora2.length === 0){
              if( cero === 1){
                contadora2.push(Number(contadora1.join("")));
                almacenar.textContent = 0; 
                contadora1.length = 0;
                ingresar.textContent = "-";
                masMenos = 0;
                punto = 0;
                contenedorOperacion.push("multiplicar");    
                operacionInicial("*");
                cambioSigno.classList.add("hidden");
                cero === 0;
              }else{
              contadora2.push(Number(contadora1.join("")));
              almacenar.textContent = contadora1.join(""); 
              contadora1.length = 0;
              ingresar.textContent = "-";
              masMenos = 0;
              punto = 0;
              contenedorOperacion.push("multiplicar");    
              operacionInicial("*");
              cambioSigno.classList.add("hidden");
            }
        
            }else if(contadora2.length !== 0 && (contadora1.length !==0 || cero === 1)){
              operacion();
              contenedorOperacion.length = 0;//
              contenedorOperacion.push("multiplicar");
              masMenos = 0;
              punto = 0;
              cambioSigno.classList.add("hidden");
              operacionInicial("*");//
        
            }else if(contadora2.length !== 0 && contadora1.length === 0){
              contenedorOperacion.length = 0;
              contenedorOperacion.push("multiplicar");
              cambiarOperacion("*");
            }
            
          }
          //When "split" is selected
          if(registro === "/"){
            if(contadora1.length === 0 && contadora2.length === 0 && cero === 0){
              contadora2.push(0);
              almacenar.textContent = 0; 
              contenedorOperacion.push("dividir");    
              operacionInicial("/");
            } else if(contadora2.length === 0){
              if( cero === 1){
                contadora2.push(Number(contadora1.join("")));
                almacenar.textContent = 0; 
                contadora1.length = 0;
                ingresar.textContent = "-";
                masMenos = 0;
                punto = 0;
                contenedorOperacion.push("dividir");    
                operacionInicial("/");
                cambioSigno.classList.add("hidden");
                cero === 0;
              }else{
              contadora2.push(Number(contadora1.join("")));
              almacenar.textContent = contadora1.join(""); 
              contadora1.length = 0;
              ingresar.textContent = "-";
              masMenos = 0;
              punto = 0;
              contenedorOperacion.push("dividir");    
              operacionInicial("/");
              cambioSigno.classList.add("hidden");
            }
        
            }else if(contadora2.length !== 0 && (contadora1.length !==0 || cero === 1)){
              operacion();
              contenedorOperacion.length = 0;//
              contenedorOperacion.push("dividir");
              masMenos = 0;
              punto = 0;
              cambioSigno.classList.add("hidden");
              operacionInicial("/");//
        
            }else if(contadora2.length !== 0 && contadora1.length === 0){
              contenedorOperacion.length = 0;
              contenedorOperacion.push("dividir");
              cambiarOperacion("/");
            }
            
          }
        
          //When "square root" is selected
          if(registro === "r"){
        
            if(contadora1.length === 0 && cero === 1 && contenedorOperacion.length === 0){
                raizCuadrada();
                cero = 0;           
            } else if(contadora1.length !== 0 && contenedorOperacion.length === 0){
              raizCuadrada();      
              masMenos = 0;
              punto = 0;
              cambioSigno.classList.add("hidden");
            } else if(contadora1.length === 0 && cero === 1 && contenedorOperacion.length !== 0){
              raizCuadradaParaOperar();
              operacion();
              masMenos = 0;
              cero = 0;
            } else if(contadora1.length !== 0 && contenedorOperacion.length !== 0 ){
             
              if(masMenos === 1){
                almacenar.textContent = "numeros negativos no tienen raiz";
                contadora1.length = 0;
                contadora2.length = 0;
                ingresar.textContent= "-";
                cambioSigno.classList.add("hidden");
                raizNegativa = 1;
              } else{
                raizCuadradaParaOperar();
                operacion();
                cero = 0;
                punto = 0;
              }
            }
          }
          //When "Squaring" is selected
          if(registro === "c"){
            if(contadora1.length === 0 && cero === 1 && contenedorOperacion.length === 0){
             elevarCuadrado();
              cero = 0;           
          } else if(contadora1.length !== 0 && contenedorOperacion.length === 0){
            elevarCuadrado();      
            masMenos = 0;
            punto = 0; 
            cambioSigno.classList.add("hidden");
          }else if(contadora1.length !== 0 && contenedorOperacion.length !== 0 ){
              elevarCuadradoParaOperar();
              operacion();
              masMenos = 0;
              punto = 0;
              cambioSigno.classList.add("hidden");
          }
          }
          //When "1/x" is selected
          if(registro === "d"){
        
            if(contadora1.length === 0 && cero === 1 && (contenedorOperacion.length === 0 || contenedorOperacion.length !== 0 )){
              divisor();
              cero = 0;           
            } else if(contadora1.length !== 0 && contenedorOperacion.length === 0){
              divisor();      
              masMenos = 0;
              punto = 0;
              cambioSigno.classList.add("hidden");
            } else if(contadora1.length !== 0 && contenedorOperacion.length !== 0 ){
             
                divisorParaOperar();
                operacion();
                masMenos = 0;
                punto = 0;
                cambioSigno.classList.add("hidden");
            }
          }
          //When "=" is selected
          if (registro === "=" ){
            if(contadora2.length === 0 && (contadora1.length !== 0 || cero === 1)){
              let numeroIngresar = Number(contadora1.join(""));
              contadora2.push(numeroIngresar);
              almacenar.textContent = numeroIngresar;
              ingresar.textContent = "-";
              contadora1.length = 0;
              masMenos = 0;
              punto = 0;
              cero = 0;
              cambioSigno.classList.add("hidden");
            }else if(contadora2.length !== 0 && (contadora1.length !== 0 || cero === 1)){
              operacion();
              masMenos = 0;
              punto = 0;
              cero = 0;
              cambioSigno.classList.add("hidden");        
            }else if(contadora2.length !==0 && contadora1.length === 0 && cero === 0){
              let tieneHijo = almacenar.querySelector(":first-child")!== null;
              tieneHijo? almacenar.removeChild(almacenar.firstElementChild):"";
            }
          }
          //When "C" is selected
          if(registro === "et" ){
            contadora1.length= 0;
            contadora2.length = 0;
            almacenar.textContent ="-";
            ingresar.textContent = "-";
            contenedorOperacion.length = 0;
            masMenos = 0;
            punto = 0;
            cero = 0;
            cambioSigno.classList.add("hidden");
            dividirCero = 0;
            raizNegativa = 0;
            for(let i = 2; i < btnDisabled.length; i++){
              btnDisabled[i].disabled = false;      
            };
          }
          //When "CE" is selected
          if(registro === "ep"){
            contadora1.length = 0;
            ingresar.textContent ="-";
            masMenos = 0;
            punto = 0;
            cero = 0;
            cambioSigno.classList.add("hidden");
          }
      }
  
    
    
    d.addEventListener("keydown", (e) => {
    
    //To disable the buttons, the entry of numbers and operations, by console when trying to divide by "0"
    if(dividirCero === 1 || raizNegativa === 1){
      e.preventDefault();
      return false;
    }
    
    //For entering the numbers from 1 to 9
    if(e.key === "1" ||
      e.key === "2" ||
      e.key === "3" ||
      e.key === "4" ||
      e.key === "5" ||
      e.key === "6" ||
      e.key === "7" ||
      e.key === "8" ||
      e.key === "9" ||
      e.key === "0"){
        calculadora(e.key);
    }
    
    //To enter the decimal point to the number
    if(e.key === "."){
      calculadora(e.key);
    }
    
    //To show at the end of "store" which operation is being chosen to execute
    //When "plus" is selected
    if(e.key === "+"){
      calculadora(e.key);
    }
    //Cuando se selecciona "restar"
    if(e.key === "-"){
      calculadora("-");
    }
    //When "subtract" is selected
    if(e.key === "*"){
      calculadora("*");
    }
    //When "split" is selected
    if(e.key === "/"){
      calculadora("/");
    }
    //When "equal" is selected
    if(e.key === "="){
      calculadora("=");
    }
    
    
    });
  
    d.addEventListener("click",(e)=>{
    
     //To disable the buttons, the entry of numbers and operations, on the screen when trying to divide by "0"
    if(dividirCero === 1 || raizNegativa === 1){
      for(let i = 2; i < btnDisabled.length; i++){
        btnDisabled[i].disabled = true;      
      };
    }; 
    
    if(e.target === btnC){
      calculadora("et");
    };
    
    if(dividirCero === 0 && raizNegativa === 0){
    
      switch (e.target){
        //For the input of the numbers from 1 to 9
          case btnNueve:
            calculadora("9");
            break;
          case btnOcho:
            calculadora("8");
            break;
          case btnSiete:
            calculadora("7");
            break;
          case btnSeis:
            calculadora("6");
            break;
            case btnCinco:
            calculadora("5");
            break;
          case btnCuatro:
            calculadora("4");
            break;
          case btnTres:
            calculadora("3");
            break;
          case btnDos:
            calculadora("2");
            break;
            case btnUno:
            calculadora("1");
            break;
          case btnCero:
            calculadora("0");
            break;    
        //To insert the decimal point to the number
          case btnPunto:
            calculadora(".");
            break;
        //To change the number being entered to negative
          case btnSigno:
            calculadora("m");
            break;
        /*To show at the end of "store" which operation is being chosen to execute*/
        //When "plus" is selected
          case btnMas:
            calculadora("+");
            break;
        //When "subtract" is selected
          case btnMenos:
            calculadora("-");
            break;
        //When "multiply" is selected
          case btnPor:
            calculadora("*");
            break;
        //When "split" is selected
          case btnDividir:
            calculadora("/");
            break;
        //When "square root" is selected
          case btnRaiz:
            calculadora("r");
            break;
        //When "Squaring" is selected
          case btnCuadrado:
            calculadora("c");
            break; 
        //When "1/x" is selected
          case btnDivisor:
            calculadora("d");
            break;
        //When "=" is selected
          case btnIgual:
            calculadora("=");
            break;
        //When "CE" is selected
          case btnCe:
            calculadora("ep");
            break;
        }
    };
    
    
      
    });
  
  })

  }
  

}



  
  



