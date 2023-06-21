const d = document,
    alert = d.querySelector(".text-cont__alert"),
    form = d.querySelector(".text-cont__form"),
    btn = d.querySelector(".text-cont__btn"),
    request = d.querySelector("#text-cont__statement"),
    container = d.querySelector(".text-cont");

const text = [
    "Co-creación:Involucrar al cliente en el diseño o elaboración del producto o servicio es una de las estrategias más efectivas para vincularle emocionalmente porque combina personalización y participación. En Forum Business Travel lo desarrollan en sus eventos de formación: “apostamos por el open spaces. Evitamos los eventos unidireccionales y procuramos que, además del gurú, los participantes aporten soluciones al problema. Los eventos pueden ser todo lo personales que desees permitiendo que el participante decida en todo momento en qué quiere profundizar”. Otras técnicas que utilizan son la del ponente interactivo: tiene diez minutos para hablar y los asistentes votan, si el resultado es positivo le dan cinco minutos más. Otra fórmula es ofrecer a los asistentes al principio del evento la posibilidad de elegir sobre qué hablar al final del mismo. “Se trata de provocar y retar a los participantes”, concluye",
    "Gamificación: “Consiste en transformar un proceso clásico en una experiencia lúdica. Busca transformar tu proceso de metodología en un juego”, explica Philippe Delespesse, cofundador del juego Binnakle, un juego empresarial que nació como un spin off de la empresa Inteligencia Creativa y que hoy está en 13 países. “En el juego del Binnakle por ejemplo hay cuatro equipos alrededor de un tablero grande con cuatro zonas (repensar un problema, generar ideas, pulir esas ideas y venderlas) repartidas sobre una isla. Los equipos compiten por los bikles y ganan o pierden en función de las dinámicas que van desarrollando. Al empezar ni miran las monedas y a los 15 minutos matarían por ellas. La ventaja que tiene radica en dejarte ir, dejarte llevar, no tener complejos, ir más lejos. Realmente es una experiencia. Cuando practicas algo se te queda mejor La experiencia hace que las enseñanzas calen más y mejor”",
    "Story Telling: Como recordaba recientemente Marcos de Quinto en una entrevista, el Story Telling sigue teniendo una fuerza brutal para enganchar con el lado más emocional del consumidor. Desde las pinturas rupestres o desde la época de los juglares a los Entremeses del siglo de oro o a las actuales películas o vídeos, los acontecimientos narrados en forma de historia tienen un poder de sugestión enorme. En el caso de la empresa ocurre lo mismo, si la marca o la compañía es capaz de contar una historia atractiva, creíble y coherente sobre su servicio, su misión o su producto, tendrá más papeletas de crear una experiencia diferente en el cliente.",
    "Marketingfood: En los últimos tiempos hemos visto diferentes estrategias de marketing que tienen a la comida como herramienta de engagement. Hay distintas corrientes, como el brainfood: pensar en alimentos saludables para tus eventos, alimentos que ayudan a pensar y estar activos, alimentos funcionales, bajos en azúcares para facilitar el trabajo mental…. O el brandfood, que busca a través del catering o de la comida en general identificar los valores de la marca con un tipo de gastronomía. Propuestas hay miles: desde un catering sano, hasta uno temático en función del evento o del espacio, hasta regalos o detalles gastronómicos a modo de marketing corporativo.",
    "Realidad virtual: Esta tecnología está cada vez más desarrollada lo que permite a las empresas ofrecer contenidos interesantes en este formato por no mucho dinero. Lo hace, por ejemplo, Pangea, que proporciona la experiencia de la realidad virtual en algunos destinos a través de gafas especiales o lo hace también Marriot, “que a través de su programa V Room entrega al cliente que adquiere una maleta, unas gafas de realidad virtual que le permiten vivir una experiencia especial”, recuerda Óscar García.",
    "Regresión infantil: O en palabras de García, “volver a sentirse como niños. Se trata de actuar, jugar, disfrazarse, participar en serial games. Jugar a ser niños saca el lado más emocional del cliente”. Además, puede contribuir a reencontrarse con emociones y sentimientos casi olvidados desde los tiempos infantiles. El Cirque du Soleil, por ejemplo, colabora con el evento de networking C2Montreal, diseñando programas creativos que invitan a los directivos a sumergirse en piscinas de bolas o a construir juguetes… Ponerlo en práctica en un negocio del día a día, puede ser tan sencillo como habilitar un espacio dentro de nuestras instalaciones/comercio para que los clientes puedan expresarse como niños, ofreciendo disfraces, tizas o pintura de mano…",
    "La llamada de los sentidos: El olor, el color, el sabor juegan un papel muy importante a la hora de transmitir unas emociones y unas sensaciones que puedan fijarse en la memoria del individuo. La aromaterapia, la colorterapia, la musicoterapia… Se trata de jugar con los sentidos para penetrar en el inconsciente del cliente. El neuromarketing es una disciplina cada vez más desarrollada y hoy no es complicado ni excesivamente caro diseñar, por ejemplo, un olor que pueda vincularse a nuestra marca.",
    "Espacios pop-up: Otra de las opciones con las que puedes trabajar para vincularte emocionalmente con tu cliente es convertir un espacio en el centro de experiencias, es lo que ocurre con las tiendas Ikea, con los pisos que diseña dentro de sus instalaciones. Es un evento detrás de cada cosa. Pero se puede ir más allá y jugar con los diseños de los espacios para crear experiencias ad hoc. Hay compañías que ofrecen módulos prefabricados que pueden habilitarse como espacios de reuniones portátiles. La compañía filipina Revolution Precrafted, por ejemplo, propone precisamente esos módulos prefabricados customizables para adaptarlos a las necesidades de cliente.",
    "Exclusividad: Uno de los motivadores emocionales más potentes es sentirse unos privilegiados. Una forma de trabajar esta estrategia es a través de la invitación a eventos exclusivos, bien sea por lo excepcional de su celebración, por lo restringido del acceso o por la posibilidad de darles algo a nivel personal que el cliente no podría conseguir.  Hace unos meses, por ejemplo, hubo un evento en Madrid en el que habló Barack Obama. Se rumoreaba que los precios de las entradas rondaban las cuatro cifras. Una gran mayoría de los asistentes acudió al evento invitado. El enganche emocional que pueden tener esos asistentes con la marca/empresa que les ha facilitado vivir una experiencia como esa es brutal. SEAT, por ejemplo, organiza encuentros con emprendedores para que “redescubran” su marca a través de eventos exclusivos donde les invita a conocer de primera mano sus instalaciones y naves de acceso restringido. El engagement de los participantes con la marca tras esta visita es espectacular.",
    "La llamada inmediata:“Una vez llevamos al cliente a la web y nos deja los datos, les llamamos. Tiene el efecto Wow de responder de forma inmediata con una llamada realizada por una persona. Para nosotros es muy importante que sienta que hay una persona detrás y que está dispuesta a asesorarle y ayudarle en todo”, explica Manzanero, de Clicars. En Trive lo denominan Life vídeo “es cubrir la necesidad del sentir o ver lo que compras. A través de una llamada el usuario puede ver el coche, puede hablar con los trivers y preguntar cualquier duda y ofrecen también el Test Drive, para que el cliente lo pruebe en un radio determinado”, insiste Correa.",
    "Asesoramiento: Se trata de acompañar al usuario en todo momento. “Nosotros buscamos hacerle sentir que no está solo en esta operación. Nos preocupa que la gente perciba que detrás del chat hay una persona. Es muy personalizado y tenemos un alto índice de dudas resueltas”, insisten desde Trive. Esta estrategia y la anterior juegan con lo que Martínez-Arroyo llama “el efecto positivo de la humanización en la transacción. Hay que darle un toque humano a tu negocio, hacer que el cliente se sienta escuchado y acompañado”. 1&1 o Europcar, por ejemplo, trabajan muy bien el componente humano en el asesoramiento digital. Y Pangea o We Collect Cluc, por ejemplo, han hecho del asesoramiento especializado su ventaja comparativa.",
    "Teaser Campaign (Campaña de Incógnita): Si sorprendes a tus clientes, les impactas emocionalmente. Se trata de la búsqueda del efecto Wow por excelencia. Combina el efecto del storytelling con el efecto sorpresa de mantener una incógnita y un misterio durante un cierto tiempo. Las grandes empresas lo hacen con campañas en medios de comunicación o en las vallas publicitarias del metro o de las calles. Pero a un nivel de emprendedor, también lo puedes aprovechar recurriendo a la base de datos de tus clientes o a las redes sociales donde más actividad tengas.",
    "Advocacy Marketing: Es el llamado marketing de recomendación y pasa por hacer una buena medición de la experiencia de cliente. “Desde el departamento de experiencia del cliente trabajamos el NPS (Net Promoter Score): un indicador para que los clientes valoren su experiencia y te recomienden. La encuesta incluye preguntas sobre todo el proceso para encontrar los puntos de la empresa que haya que modificar. Incentivamos mucho las recomendaciones de los clientes”, explican desde Clicars. “A través del índice NPS se puede medir el nivel de satisfacción en las interacciones y el nivel de esfuerzo para obtener una respuesta a una necesidad”, explica Machuca.",
    "Diagnóstico global: “Hay que ser proactivos en la relación con el cliente para crear nuevos momentos de relación con el cliente”, insiste Córdoba. Se trata de elaborar un diagnóstico de cómo ha sido la relación con nuestro cliente a lo largo del año y proponerle un marco de actuación para el siguiente. Así juegas con la personalización y la proactividad. “Se trata de elaborar un diagnóstico global de lo que haces para hacerle una oferta más personal”, concluye. En Viesgo por ejemplo iniciaron una campaña por la que a través de una simple foto de tu recibo enviada por whatsapp podían realizarte un diagnóstico global”, recuerda Córdoba.",
    "La última milla: Como señala Martínez-Arroyo tiene mucho que ver con “el Peak at Last. Los humanos recordamos los momentos más álgidos y los últimos momentos. Hay que identificar esos momentos en nuestra relación con el cliente para mejorarlos”. Por ejemplo, en un restaurante, renovar el baño obsoleto o renovar la comida mejorará la experiencia, pero lo que dará el momento Wow, será el detalle que marque la diferencia: el poema personalizado, el chupito exclusivo del local… Pero el Peak at Last también está muy relacionado con lo que se llama la última milla. El momento del contacto con el cliente. Una empresa que lo cuida muchísimo es Aquaservice: la empresa de agua embotellada. “El servicio que nunca han externalizado es el de la entrega del agua porque consideran que estos empleados son los representantes reales de la empresa”, insiste Martínez-Arroyo.",
    "La última milla: Como señala Martínez-Arroyo tiene mucho que ver con “el Peak at Last. Los humanos recordamos los momentos más álgidos y los últimos momentos. Hay que identificar esos momentos en nuestra relación con el cliente para mejorarlos”. Por ejemplo, en un restaurante, renovar el baño obsoleto o renovar la comida mejorará la experiencia, pero lo que dará el momento Wow, será el detalle que marque la diferencia: el poema personalizado, el chupito exclusivo del local… Pero el Peak at Last también está muy relacionado con lo que se llama la última milla. El momento del contacto con el cliente. Una empresa que lo cuida muchísimo es Aquaservice: la empresa de agua embotellada. “El servicio que nunca han externalizado es el de la entrega del agua porque consideran que estos empleados son los representantes reales de la empresa”, insiste Martínez-Arroyo.",
    "La venta cruzada: Conocer los puntos de fricción de tu relación con el cliente te abre las posibilidades de ampliar la gama de productos o servicios a ofrecer en cada una de las fases, mejorando su experiencia e incrementando tus posibilidades comerciales. La empresa de masajes Fariolen, por ejemplo, consigue crear un ambiente especial: música relajante, aromas especiales, iluminación adecuada. Ofrecen agua fría al entrar y cava al salir; expertos en masajes y te dan opciones de contratar bonos que combinan diferentes servicios. Todo ello promoviendo el boca a boca, la retención y la recomendación. Otras forma de trabajar la venta cruzada es a través del cobranding: alíate con otra compañía para ofrecer una experiencia global. Famoso es el ejemplo de Zappos y Google. Para promocionar una app, Google sacó un camión de cupcakes a la calle que vendía a cambio de fotos con la app. La marca de zapatos entonces decidió regalar unos zapatos a cambio de un cupcake del camión de Google. Fue una estrategia que mejoró la experiencia del cliente de ambas",
    "Y no olvides el compromiso: Para conseguir clientes comprometidos y leales nada mejor que mostrarse como una marca/empresa comprometida a su vez con causas sociales y justas. Son muchas las opciones: desde realizar donaciones a ONG por cada producto o servicio que te contraten, hasta participar activamente en la organización o patrocinio de acciones sociales o medioambientales, asociarte con proveedores o partners socialmente responsables o incluso tener una división especializada en el tercer sector. Si, además les das a tus clientes la posibilidad de elegir a qué causa dedicar tus fondos o tus esfuerzos, el enganche es mayor."
]

export function texto(){

    let count = 0;

    d.addEventListener("keyup",(e)=>{

        if(e.target.matches(".text-cont__form [required]")){
            let input = e.target,
            pattern = e.target.pattern || e.target.dataset.pattern;
            if(pattern){
                let regExp = new RegExp(pattern);
                if(!regExp.exec(input.value)){
                 alert.style.display = "block";
                 btn.disabled = true;   
                } else{
                    alert.style.display = "none";
                    btn.disabled = false;
                }
            }

        }
    })

    form.addEventListener("submit",(e)=>{
        e.preventDefault();

    

        let article = d.createElement("article");
            article.classList.add("text-cont__experiences");
            alert.insertAdjacentElement("afterend",article);
            let experiences = d.querySelector(".text-cont__experiences");



        if(request.value > 0 && request.value <= 18){
            


            if(count > 0){
                container.removeChild(container.lastElementChild);
            }

            let newText = text.slice(0,request.value);

            let insertText = newText.map(function(element){
                return `<p class = "text-cont__experience">${element}</p>`;
            });
            experiences.innerHTML = insertText.join();
            count ++;
            
        } else{

            if(count > 0){
                container.removeChild(container.lastElementChild);
            }

            let paragraph = d.createElement("p");
            paragraph.classList.add("text-cont__experience");
            experiences.insertAdjacentElement("beforeend",paragraph);
            let paragraphCont = d.querySelector(".text-cont__experience");
            
            const random = Math.floor(Math.random() * text.length);
            console.log( typeof text[random]);
            paragraphCont.textContent = text[random];
            console.log( paragraphCont);   
            count++;       
            
        }
    })


}