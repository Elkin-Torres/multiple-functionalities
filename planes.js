const d = document,
circle = d.querySelectorAll(".planes-cont__circle"),
section = d.querySelectorAll("section[data-observerPlans]");

//Control of animations and when they are executed
export function planes(){
    //Show the information when the cursor is over and hide it when the cursor is removed
    circle.forEach(function(item){
        item.addEventListener("mouseenter",(e)=>{
            const info = e.currentTarget.previousElementSibling;
            info.style.display = "block";
        })

        item.addEventListener("mouseleave",(e)=>{
            const info = e.currentTarget.previousElementSibling;
            info.style.display = "none";
        })
    });

    const cb = (pr) =>{
        pr.forEach((el) => {
            const id = el.target.getAttribute("id");
            if(el.isIntersecting){
                d.querySelector(`span[id="${id}"][data-observerPlans]`).style.display = "block";
            } else {
                d.querySelector(`span[id="${id}"][data-observerPlans]`).style.display = "none";
            }
        });
    };
    //Specifies the space in which the animation should be displayed
    const observer = new IntersectionObserver(cb,{
        threshold: 0.8,
    });

    //Selection of the spaces where the information is found
    section.forEach((el)=>observer.observe(el));
}