const d = document,
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

//Para el control del numero que se este ingresando
const contadora1 = [];
//Para guardar el primer numero que se ingrese
const contadora2 = [];
//Para controlar que solo se ingrese un punto decimal
let punto = 0;
//Para controlar el cambio de signo del numero que se esta ingresando
let masMenos = 0;
//Para controlar el numero "0" cuando se quiere ingresar como primer y unico digito
let cero = 0;
//Para controlar la division por "0"
let dividirCero = 0;
//Para controlar la raíz negativa
let raizNegativa = 0;
/* Para el control de las operaciones */
const contenedorOperacion = [];

let botonIgual = 0;


//Para ingresar el signo de la operacion seleccionada
function operacionInicial(signo){
  let span = d.createElement("span");
  span.classList.add("signoAlmacenar");
  span.textContent= signo;
  almacenar.insertAdjacentElement("beforeend", span);
}

//Para cambiar el signo de la operacion seleccionada (lo que se hizo en "operacionInicial")
function cambiarOperacion(signo){
/*   const signoAlmacenar = d.querySelector(".signoAlmacenar");
  signoAlmacenar.parentNode.removeChild(signoAlmacenar); */
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

//Para ejecutar las operaciones de dividir con dividendo "1" (cuando se selecciona "1/x"), si no hay numero en "contadora 2"
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

//Para ejecutar las operaciones de dividir con dividendo "1" (cuando se selecciona "1/x"), si hay numero en "contadora2" y ademas se ha seleccionado una operación para realizar con el numero ingresado en "contadora1"
function divisorParaOperar(){
  let numero = Number(contadora1.join(""));
  let resultado = 1 / numero;
  let resultadoFinal = Math.round(resultado * 100)/100;
  contadora1.length = 0;
  contadora1.push(resultadoFinal);
}

//Para ejecutar las operaciones de elevar al cuadrado si no hay numero en "contadora2"
  function elevarCuadrado(){
    let resultado = Math.pow(Number(contadora1.join("")), 2);
     let resultadoFinal = Math.round(resultado * 100)/100;
    almacenar.textContent = resultadoFinal;
    ingresar.textContent = "-";
    contadora2.push(resultadoFinal);
    contadora1.length = 0;
  }
  
//Para ejecutar las operaciones de elevar al cuadrado si hay numero en "contadora2" y ademas se ha seleccionado una operacion para realizar con el resultado de elevar al cuadrado el valor que se ingreso en "contador1"
  function elevarCuadradoParaOperar(){
    let numero = Number(contadora1.join(""));

    let resultado = Math.pow(numero,2);
    let resultadoFinal = Math.round(resultado * 100) / 100;
    contadora1.length = 0;
    contadora1.push(resultadoFinal);
  }


//Para ejecutar las operaciones de raiz cuadrada si no hay numero en "contadora2"
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

//Para ejecutar las operaciones de raiz cuadrada si hay numero en "contadora2" y ademas se ha seleccionado una operacion para realizar con el resultado de la raiz cuadrada que se ingreso en "contador1"
function raizCuadradaParaOperar(){
  let numero = Number(contadora1.join(""));

  let resultado = Math.sqrt(numero);
  let resultadoFinal = Math.round(resultado * 100) / 100;
  contadora1.length = 0;
  contadora1.push(resultadoFinal);
}


//Para ejecutar cualquier operacion de: suma, resta, multiplicacion o division
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
    //operacionInicial("+");
  } else if(operacionAEjecutar === "restar"){
    let resultadoInicial = numero1 - numero2;
    let resultadoFinal = (resultadoInicial >= 0 || -1)* Math.round(Math.abs(resultadoInicial)*100)/100;
    almacenar.textContent = resultadoFinal;
    ingresar.textContent = "-";
    contadora2.length = 0;
    contadora2.push(resultadoFinal);
    contadora1.length = 0;
    //operacionInicial("-");
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
    //operacionInicial("*");
    
    //cero = 0;
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

export function calculadora(registro) {


    //Para el ingreso de los numeros del 1 al 9
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
      //Si no se ha ingresado ningun numero aun
      if(contadora1.length === 0){
        ingresar.textContent = registro;
        contadora1.push(registro);
      }//si ya se ha empezado a ingresar numeros
      else{
        ingresar.textContent += registro;
        contadora1.push(registro);
      }
    }

    //Para el ingreso del numero "0"
    if(contadora1.length <= 23){
      if(registro === "0" && contadora1.length !== 0){
        ingresar.textContent += registro;
        contadora1.push(registro);
      } else if(registro === "0" && contadora1.length === 0){
        cero = 1;
        ingresar.textContent = 0;
      }
    }
 

 //Para ingresar el punto decimal al numero
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
  //Para cambiar a negativo el numero que se esta ingresando
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

    //Para mostrar al final de "almacenar" que operacion se esta escogiendo para ejecutar
      //Cuando se selecciona "sumar"
      if(registro === "+"){
        //contenedorOperacion.length = 0;
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
//
        }else if(contadora2.length !== 0 && (contadora1.length !==0 || cero === 1)){
          operacion();
          contenedorOperacion.length = 0;//
          contenedorOperacion.push("sumar");
          //operacion();
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

      //Cuando se selecciona "restar"
      if(registro === "-"){
        //contenedorOperacion.length = 0;
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
          //operacion();
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
       //Cuando se selecciona "multiplicar"
       if(registro === "*"){
        //contenedorOperacion.length = 0;
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
     /*    }else if(contadora2.length!==0 && contadora1.length === 0 && cero === 1){
          //contenedorOperacion.push("multiplicar");
          contadora1.push(0);
          operacion(); */
        }
  
        }else if(contadora2.length !== 0 && (contadora1.length !==0 || cero === 1)){
          //contenedorOperacion.push("multiplicar");
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
      //Cuando se selecciona "dividir"
      if(registro === "/"){
        //contenedorOperacion.length = 0;
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
     /*    }else if(contadora2.length!==0 && contadora1.length === 0 && cero === 1){
          //contenedorOperacion.push("multiplicar");
          contadora1.push(0);
          operacion(); */
        }
  
        }else if(contadora2.length !== 0 && (contadora1.length !==0 || cero === 1)){
          //contenedorOperacion.push("multiplicar");
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

      //Cuando se selecciona "raiz cuadrada"
      if(registro === "r"){
        //contenedorOperacion.length = 0;
  
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
      //Cuando se selecciona "elevar al cuadrado"
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
      //Cuando se selecciona "1/x"
      if(registro === "d"){
        //contenedorOperacion.length = 0;
  
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
      //Cuando se selecciona "="
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
      //Cuando se selecciona "C"
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
      //Cuando se selecciona "CE"
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

//Para deshabilitar los botones, el ingreso de numeros y operaciones, por consola cuando se intente dividir por "0"
if(dividirCero === 1 || raizNegativa === 1){
  e.preventDefault();
  return false;
}

//Para el ingreso de los numeros del 1 al 9
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

//Para ingresar el punto decimal al numero
if(e.key === "."){
  calculadora(e.key);
}

//Para mostrar al final de "almacenar" que operacion se esta escogiendo para ejecutar
//Cuando se selecciona "sumar"
if(e.key === "+"){
  calculadora(e.key);
}
//Cuando se selecciona "restar"
if(e.key === "-"){
  calculadora("-");
}
//Cuando se selecciona "multiplicar"
if(e.key === "*"){
  calculadora("*");
}
//Cuando se selecciona "dividir"
if(e.key === "/"){
  calculadora("/");
}
//Cuando se selecciona "igual"
if(e.key === "="){
  calculadora("=");
}


});


d.addEventListener("click",(e)=>{

 //Para deshabilitar los botones, el ingreso de numeros y operaciones, por pantalla cuando se intente dividir por "0"
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
    //Para el ingreso de los numeros del 1 al 9
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
    //Para ingresar el punto decimal al numero
      case btnPunto:
        calculadora(".");
        break;
    //Para cambiar a negativo el numero que se esta ingresando
      case btnSigno:
        calculadora("m");
        break;
    /*Para mostrar al final de "almacenar" que operacion se esta escogiendo para ejecutar*/
    //Cuando se selecciona "sumar"
      case btnMas:
        calculadora("+");
        break;
    //Cuando se selecciona "restar"
      case btnMenos:
        calculadora("-");
        break;
    //Cuando se selecciona "multiplicar"
      case btnPor:
        calculadora("*");
        break;
    //Cuando se selecciona "dividir"
      case btnDividir:
        calculadora("/");
        break;
    //Cuando se selecciona "raiz cuadrada"
      case btnRaiz:
        calculadora("r");
        break;
    //Cuando se selecciona "elevar al cuadrado"
      case btnCuadrado:
        calculadora("c");
        break; 
    //Cuando se selecciona "1/x"
      case btnDivisor:
        calculadora("d");
        break;
    //Cuando se selecciona "="
      case btnIgual:
        calculadora("=");
        break;
    //Cuando se selecciona "CE"
      case btnCe:
        calculadora("ep");
        break;
    }
};


  
});

