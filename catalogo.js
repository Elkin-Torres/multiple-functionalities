//Selected elements in "catalogo.html"
const d = document,
    title = d.querySelector(".catalogue-cont__title");
    
//Vehicle´s information
const album = [
    {
        marca:"Mazda",
        img:"./img/mazda3.png",
        alt:"vehiculo Mazda 3",
        nombre:"Mazda 3",
        modelo:"2022",
        descripcion:"Un diseño que evoca una sola pincelada fluida con una ingeniería que logra un nivel de belleza superior."
    },
    {
        marca:"Mazda",
        img:"./img/mazdaCX5.png",
        alt:"vehiculo Mazda CX5",
        nombre:"Mazda CX5",
        modelo:"2022",
        descripcion:"Mazda Connect mantente conectado con tu música, sin perder la concentración en el camino, domina el camino a bordo de tu Mazda CX-5 y conoce sus sistemas de seguridad "
    },
    {
        marca:"Mazda",
        img:"./img/mazdaCX30.png",
        alt:"vehiculo Mazda CX30",
        nombre:"Mazda CX30",
        modelo:"2023",
        descripcion:"Motor 2.5L con Turbo de Presión Dinámica, Sistema Inteligente AWD, Control G-Vectoring. Conoce el balance entre los motores eSkyactivG con el sistema Mild Hybrid."
    },
    {
        marca:"Mazda",
        img:"./img/mazda2.png",
        alt:"vehiculo Mazda 2",
        nombre:"Mazda 2",
        modelo:"2021",
        descripcion:"Mazda Connect pantalla activa de conducción a color (HUD)conexión inalámbrica para iPhone. Luces delanteras LED automáticas con sensor de luz y con luces de marcha diurna."
    },
    {
        marca:"Mazda",
        img:"./img/mazda6.png",
        alt:"vehiculo Mazda 6",
        nombre:"Mazda 6",
        modelo:"2021",
        descripcion:"Mazda6, con turbo de presión dinámica brinda un extraordinario desempeño, eficiencia en consumo de combustible y seguridad de primer nivel."
    },
    {
        marca:"BMW",
        img:"./img/BMWX1.png",
        alt:"vehiculo BMW X1",
        nombre:"BMW X1",
        modelo:"2023",
        descripcion:"El BMW X1 es un todocamino compacto, del segmento C, fabricado por BMW desde 2009. Actualmente se comercializa la tercera generación, presentada en 2022."
    },
    {
        marca:"BMW",
        img:"./img/BMWX6.png",
        alt:"vehiculo BMW X6",
        nombre:"BMW X1",
        modelo:"2023",
        descripcion:"Los detalles de diseño grandes y sorprendentemente pronunciados atestiguan la soberanía. La tecnología del nuevo BMW X6 es igual en todo aspecto a su rendimiento atlético."
    },
    {
        marca:"BMW",
        img:"./img/BMWX7.png",
        alt:"vehiculo BMW X7",
        nombre:"BMW X1",
        modelo:"2022",
        descripcion:"La SUV deportiva BMW X7 tiene mucho que ofrecer: Diseño deportivo y opciones de equipamiento. Configura tu camioneta deportiva y visita tu concesionaria BMW."
    },
    {
        marca:"Toyota",
        img:"./img/Toyota-Hilux.png",
        alt:"vehiculo Toyota Hilux",
        nombre:"Toyota Hilux",
        modelo:"2021",
        descripcion:"La función H4 de la Toyota Prado nos permite tener la conducción a alta velocidad con tracción en las 4 ruedas y L4 nos permite tener la conducción a baja ..."
    },
    {
        marca:"Toyota",
        img:"./img/Toyota-prado.png",
        alt:"vehiculo Toyota Prado",
        nombre:"Toyota Prado",
        modelo:"2021",
        descripcion:"La función H4 de la Toyota Prado nos permite tener la conducción a alta velocidad con tracción en las 4 ruedas y L4 nos permite tener la conducción a baja ..."
    },
    {
        marca:"Toyota",
        img:"./img/Toyota-supra.png",
        alt:"vehiculo Toyota Supra",
        nombre:"Toyota Supra",
        modelo:"1994",
        descripcion:"3.0i Turbo Potencia 330 cv, Gasolina, Consumos:11.0 l/100, Dimensiones: Longitud 451.5 cm - Anchura 181.0 cm - Altura 127.5 cm, Peso 1615 kg, 3 puertas"
    },
    {
        marca:"Renault",
        img:"./img/Renault-Duster.png",
        alt:"vehiculo Renault Duster",
        nombre:"Renault Duster",
        modelo:"2023",
        descripcion:"la Renault Duster es una camioneta icónica, definida por su diseño        robusto junto a una cintura alta y una firma LED en forma de C. Las líneas        fuertes y poderosas"
    },
    {
        marca:"Renault",
        img:"./img/Renault-stepway.png",
        alt:"vehiculo Renault Stepway",
        nombre:"Renault Stepway",
        modelo:"2022",
        descripcion:"Neumáticos. Neumáticos. 205/55 R16 // 185/70 R14 Rueda de repuesto ; peso. Peso total en marcha (kg). 1547 ; Otros. Número de plazas. 5."
    }

]

//Function exported to logica.js
export function catalogo(){ 
        
    //The code is executed when document is loaded
    d.addEventListener("DOMContentLoaded",()=>{

        //A section is created, attributes are added to it and it is added to catalogo.html
        let section = d.createElement("section");
            section.classList.add("catalogue-cont__info");
            if(title){                
                title.insertAdjacentElement("afterend",section);
            }

        //A div is created, attributes are added to it and it is added to catalogo.html
        let btnsContainer = d.createElement("div");
            btnsContainer.classList.add("catalogue-cont__btns");
            if(title){
                title.insertAdjacentElement("afterend", btnsContainer);
            }

        //Cars are added with "album" information
        function impCar(albumItem){
            let albumMap = albumItem.map(function(obj){
                return `<div class="catalogue-cont__car">
                <div class="catalogue-cont__car-img">
                  <img src=${obj.img} alt=${obj.alt}>
                </div>
                <div class="catalogue-cont__car-info">
                  <div class="catalogue-cont__car-title">
                   <h3>${obj.nombre}</h3>
                    <span>${obj.modelo}</span>
                  </div>
                  <div class="catalogue-cont__car-text">
                    <p>${obj.descripcion}</p>
                  </div>
                </div>
              </div>`;
              });
            //Quotation marks are removed from albumMap 
            albumMap = albumMap.join("");
            
            //albumMap´s information is added to the previously created section
            section.innerHTML = albumMap;      
        
        }    //Unique "marcas" records in "album" are identified and a new array is created with them.
            const marcasAlbum = album.reduce(function(marcas, vehiculo){
                !marcas.includes(vehiculo.marca)? marcas.push(vehiculo.marca):"";
        
                return marcas;
            },["Todos"]);
        
            //With the new array, the buttons are dynamically created to be able to filter the vehicles later
            const filtroMarcas = marcasAlbum.map(function(marca){
             return `<button class="catalogue-cont__btn" data-id=${marca}>${marca}</button>`
            }).join("");
            
            //filtroMarcas´s information is added to btnsContainer
            btnsContainer.innerHTML = filtroMarcas;
    
        
         
        //impCar function is call
         impCar(album);
        
         //Dynamically created buttons are selected 
        const btns = d.querySelectorAll(".catalogue-cont__btn"); 
        
        //The filter is created so that the user can select which brand of vehicle he wants to see
        btns.forEach(function(btn){
            btn.addEventListener("click",(e)=>{
                const dataId = e.currentTarget.dataset;
                const albumFilter = album.filter( car => car.marca === dataId.id);
                if(dataId.id === "Todos"){
                    impCar(album);
                }else{
                    impCar(albumFilter);
                }
            })
        })
    })


}