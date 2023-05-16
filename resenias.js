const d =  document,
      img= d.querySelector(".resenias-cont__img"),
      film = d.querySelector(".resenias-cont__film"),
      year = d.querySelector(".resenias-cont__year"),
      text = d.querySelector(".resenias-cont__text"),
      btns = d.querySelectorAll(".resenias-cont__btn"),
      btnAbrir = d.querySelector(".resenias-cont__ampliar"),
      modal = d.querySelector(".modal"),
      modalTitle = d.querySelector(".modal__title"),
      modalYear = d.querySelector(".modal__year"),
      modalText = d.querySelector(".modal__text"),
      btnCerrar = d.querySelector(".modal__cerrar");


const peliculas = [
    {
        img: "./img/mr.nobody.png",
        nombre: "Mr. Nobody",
        año: "2009",
        descripcion : "La historia arranca en el año 2092. Los avances científicos han conseguido, gracias a un proceso de telomerización cromosómica, la regeneración celular infinita y, con ello, la cuasiinmortalidad. El mundo asiste...",
        modalText : "La historia arranca en el año 2092. Los avances científicos han conseguido, gracias a un proceso de telomerización cromosómica, la regeneración celular infinita y, con ello, la cuasiinmortalidad. El mundo asiste con expectación a las últimas horas de Nemo Nobody, el último ser humano mortal. El supercentenario Nemo, que ha cumplido 118 años, evoca, entre los jirones de su memoria, instantes cruciales de su vida, como la separación de sus padres, el recuerdo de sus tres amores principales y las dificultades posteriores que sufrió en sendos instantes cruciales de su vida, sucedidos a la edad de nueve, de quince y de treinta y cuatro años. Con el discurrir de la historia, el espectador asiste a diversas encrucijadas vitales que se le presentan al protagonista, un laberinto de caminos que se van ramificando según las diferentes decisiones tomadas (o evitadas)."
    },
    {
        img: "./img/memento.png",
        nombre: "Memento",
        año: "2002",
        descripcion : "Leonard, cuya memoria está dañada por culpa de un golpe en la cabeza al intentar evitar el asesinato de su mujer, tiene que recurrir a la ayuda de una cámara instantánea y a las notas...",
        modalText: "Memento sigue la historia de Leonard, un hombre que tras un golpe sufre un trauma cerebral que le causa amnesia anterógrada. Leonard es incapaz de almacenar nuevos recuerdos, por lo que olvida lo que estaba haciendo después de unos minutos; sin embargo, posee memoria sensorial y recuerda cómo realizar acciones cotidianas. Para recordar los sucesos de su vida diaria crea un sistema usando fotos instantáneas para tener un registro de la gente con la cual se relaciona, dónde se hospeda y otros elementos básicos para el desarrollo de su vida. Además de las fotografías, toma notas y se tatúa pistas del asesino de su esposa, a veces demasiado ambiguas. Leonard busca vengarse del hombre que violó y asesinó a su mujer, y que le provocó su enfermedad, a la vez que se siente culpable por no haber creído en Sammy, otro personaje que sufrió su mismo problema."
    },
    {
        img: "./img/atlas.png",
        nombre: "El atlas de las nubes",
        año: "2013",
        descripcion : "Varias historias se desarrollan en diversas líneas temporales, pero, aunque son independientes y tienen lugar a lo largo de cinco siglos, todas están relacionadas y repercuten en las demás, lo que desata drama, misterio, acción y amor...",
        modalText:"Cloud Atlas (en España: El atlas de las nubes; en Hispanoamérica: Cloud Atlas: la red invisible) es una película de ciencia ficción escrita y dirigida por Tom Tykwer (también compositor de la banda sonora) y las hermanas Lilly y Lana Wachowski. Está basada en la novela homónima de 2004 escrita por David Mitchell y fue estrenada en Estados Unidos el 26 de octubre de 2012.El rodaje comenzó el 16 de septiembre de 2011 en el Studio Babelsberg en Potsdam-Babelsberg, Alemania. Otros lugares de rodaje comprenden Escocia, particularmente las ciudades de Glasgow y Edimburgo, y la isla de Mallorca (España). Tykwer y las hermanas Wachowski llevaron a cabo las tareas de dirección de forma paralela con dos equipos distintos."
    }, 
    {
        img: "./img/interstellar.png",
        nombre: "Interstellar",
        año: "2014",
        descripcion : "Gracias a un descubrimiento, un grupo de científicos y exploradores, encabezados por Cooper, se embarcan en un viaje espacial para encontrar un lugar con las condiciones necesarias para reemplazar a la Tierra ...",
        modalText:"En 2067, la destrucción de las cosechas en la Tierra ha hecho que la agricultura sea cada vez más difícil y se vea amenazada la supervivencia de la humanidad. Joseph Cooper, viudo, exingeniero y piloto de la NASA, dirige una granja con su suegro Donald, su hijo Tom y su hija Murph, quien cree que su habitación está embrujada por un poltergeist. Cuando aparecen inexplicablemente extraños patrones de polvo en el suelo de la habitación de Murph, Cooper se da cuenta de que la gravedad está detrás de su formación, no un fantasma. Interpreta el patrón como un conjunto de coordenadas geográficas formadas en código binario. Cooper y Murph siguen las coordenadas a una instalación secreta de la NASA, donde se encuentran con el exprofesor de Cooper, el doctor Brand."
    }, 
    {
        img: "./img/triangle.png",
        nombre: "Triangle",
        año: "2009",
        descripcion : "La película narra la historia de Jess y unos amigos que, tras naufragar en alta mar, abordan un misterioso transatlántico. Aunque en un primer recorrido el interior de la nave les parece completamente desierto, pronto descubren...",
        modalText:"La película comienza con imágenes inconexas de una mañana de sábado con Jess (Melissa George), una joven madre soltera que vive en Florida atendiendo a Tommy (Joshua McIvor), su hijo autista; se ve a Jess ocupada intentando calmar a Tommy en su casa quien vio algo que le provocó una crisis de pánico, luego recogiendo la ropa seca del jardín, luego limpiando pintura que el niño derramó en el piso, después poniendo un enorme bolso con ropa en el maletero de su auto y finalmente conduciendo fuera de la ciudad con el aún exaltado Tommy en el asiento tresero. Cuando Jess llega al muelle es recibida por Victor quien, al igual que Greg y los demás notan de inmediato que luce perturbada y descolocada, sin embargo tras dormir algunas horas despierta más animada."
    }
];




let contadora = 0;

function cambiarPelicula(){
    let cambiando = peliculas[contadora];

 img.src = cambiando.img;
 film.textContent = cambiando.nombre;
 modalTitle.textContent = cambiando.nombre;
 year.textContent = cambiando.año;
 modalYear.textContent = cambiando.año;
 text.textContent = cambiando.descripcion; 
 modalText.textContent = cambiando.modalText;  
}

export function resenias(){

    btns.forEach(function(btn){
        btn.addEventListener("click" , (e)=>{
            const btnClick = e.currentTarget.classList;
            if(btnClick.contains("resenias-cont__btn-right")){
                contadora++;  
                if(contadora > peliculas.length -1){
                    contadora = 0;
                }
                cambiarPelicula();
            } else if(btnClick.contains("resenias-cont__btn-left")){
                contadora--;
                if(contadora < 0){
                    contadora = peliculas.length - 1;
                }
                cambiarPelicula();
            }
        })
    })

    d.addEventListener("click",(e)=>{
       /*  if(e.target === btnAbrir){
            modal.style.display = "flex"; 
        } */

        switch (e.target){
            case btnAbrir:
            modal.style.display = "flex"; 
            break;

            case btnCerrar:
            modal.style.display = "none"; 
            break;
        }


    })

}