const d = document,
escrito = d.querySelector(".cont-diferencia__escrito"),
btns = d.querySelectorAll(".cont-diferencia__btn");

const info = [
    {
    id:"motivacion",
    contenido:"Nuestro modelo H.E.A.R.T. (Humble, Empathetic, Adaptable, Remarkable, Transparent, por sus siglas en inglés), es un sistema que alienta a los colaboradores a tomar decisiones basadas en estos valores para crear lazos valiosos, así como un impacto positivo, tanto con la comunidad interna como con sus clientes. Ha sido un eje importante para el crecimiento de la compañía, tal y como señala su más reciente reporte de diversidad, inclusión y pertenencia."
    },
    {
    id:"comunidad",
    contenido:"Congrega a cientos de miles de usuarios y clientes. Muchos usuarios son muy activos y dispuestos a contribuir con su tiempo y experiencia a hacer crecer la red. Los usuarios ganan reputación por sus contribuciones a la comunidad y hay incentivos para la participación continua. Muchas posibilidades para los profesionales de este software de gestión empresarial."
    },
    {
    id:"eligenos",
    contenido:"Somos una organización que prioriza la atención a sus clientes, a sus requerimientos, siempre buscamos la mejor manera de poder llegar a satisfacer la necesidad que nos es expuesta y por la cual buscan nuestra experiencia en el mercado, si de algo estamos seguros, es que no descansaremos hasta que nuestros clientes esten totalmente satisfechos con su producto terminado, para eso contamos con profesionales altamente especializados que trabajaran arduamente por conseguir dicho objetivo. "
    }

]

export function diferencia(){

    function cambiar(cambio){
        let insercion = cambio.map(function(obj){
           return obj.contenido;
        });
        escrito.innerHTML = insercion;
    }

 btns.forEach(function(btn){
    btn.addEventListener("click",(e)=>{
        btns.forEach(function(other){
            other.classList.remove("cont-diferencia__btn-active");
        });
        const option = e.target;
        const id = e.currentTarget.dataset.id;
        const infoFilter = info.filter(data => data.id === id);
        cambiar(infoFilter);
        option.classList.add("cont-diferencia__btn-active");
    })
})
 
}
