const d = document,
      blogCont = d.querySelector(".blog-cont"),
      sectionWorkers = d.querySelector(".blog-cont__workers"),
      $formulario = d.querySelector(".blog-cont__form");

export function blog(){
  //The functions are called
  if(blogCont){
    validForm();
    getInfo();
  }

}

//The API is called with the respective parameters
function getInfo(){
const url = "https://reqres.in/api";
fetch(`${url}/users?per_page=8`)
.then(info =>{
  if(info.ok){
   return info.json(); 
  } else{
    alert(info.status)
  }
})
.then(text =>{
  printInfo(text.data);
})
.catch(error =>{
  console.error(`La promesa no funciona: ${error}`)
})
}

//The information is printed in the HTML 
function printInfo(text){
  //The info container is created
const divCont = d.createElement("div");
      divCont.classList.add("blog-cont__worker");
      divCont.setAttribute("data-observerBlog","");
//An array is built with the info
text.map(item=>{
  const divInfo = d.createElement("div");
  divInfo.classList.add("blog-cont__info-worker");
const figure = d.createElement("figure");
  figure.classList.add("blog-cont__cont-img");
const img = d.createElement("img");
  img.classList.add("blog-cont__img-worker");
  img.src = item.avatar;
  img.alt = "fotografía de un empleado";
const p = d.createElement("p");
  p.classList.add("blog-cont__name");
  p.textContent = item.first_name + " " + item.last_name;
figure.insertAdjacentElement("afterbegin",img);
divInfo.insertAdjacentElement("beforeend",figure);
divInfo.insertAdjacentElement("beforeend",p);

//The info is added to the array
divCont.insertAdjacentElement("beforeend",divInfo);
})

//The info is inserted into the html
sectionWorkers.insertAdjacentElement("beforeend",divCont);

const divinformation = d.querySelectorAll("div[data-observerBlog]");
animationDivs(divinformation);

}

//Control when animations are displayed
function animationDivs(divCont){
  const cb = (pr) =>{
    pr.forEach((el) => {
        if(el.isIntersecting){
            if(el.target.classList.contains("blog-cont__worker")){
            el.target.classList.add("animate__animated","animate__backInLeft","blog-cont__worker-visible");
            } 
            if(!el.target.classList.contains("blog-cont__worker")){
              divCont.forEach((item)=>{
                item.classList.remove("animate__backInLeft","blog-cont__worker-visible");
              })
              } 
            
            if(el.target.classList.contains("blog-cont__offers")){
              el.target.classList.add("animate__animated","animate__bounceInUp","blog-cont__offers-visible");
              }
              if(!el.target.classList.contains("blog-cont__offers")){
                divCont.forEach((item)=>{
                  item.classList.remove("animate__bounceInUp","blog-cont__offers-visible");
                })
                } 
        } 
    });
};
//Delimits the space where the animation will be displayed
const observer = new IntersectionObserver(cb,{
    threshold: 0.6,
});
//Selection of the spaces where the animations are
divCont.forEach((el)=>observer.observe(el));

}

//Validation of the information entered in the form
function validForm(){
  //Creation of error messages
  const $inputs = d.querySelectorAll(".blog-cont__form [required]");
  $inputs.forEach((input) => {
    const $span = d.createElement("span");
    $span.id = input.name;
    $span.textContent = input.title;
    $span.classList.add("blog-cont__error", "blog-cont__none");
    input.insertAdjacentElement("afterend", $span);
  });

  //The written text is validated
  d.addEventListener("keyup", (e) => {
    if (e.target.matches(".blog-cont__form [required]")) {
      let $input = e.target,
        pattern = $input.pattern || $input.dataset.pattern;
      
      if (pattern) {
        let regExp = new RegExp(pattern);
        return !regExp.exec($input.value)
          ? d.getElementById($input.name).classList.add("activar")
          : d.getElementById($input.name).classList.remove("activar");
      }

      if (!pattern) {
        return $input.value === ""
          ? d.getElementById($input.name).classList.add("activar")
          : d.getElementById($input.name).classList.remove("activar");
      }
    }
  });

  //Animation and advertisement appear when submitting the form
  d.addEventListener("submit", (e) => {
    const $loader = d.querySelector(".blog-cont__loader"),
      $response = d.querySelector(".blog-cont__response");

    $loader.classList.remove("blog-cont__none");

    setTimeout(() => {
      $loader.classList.add("blog-cont__none");
      $response.classList.remove("blog-cont__none");
      $formulario.reset();

      setTimeout(() => {
        $response.classList.add("blog-cont__none");
      }, 3000);
    }, 3000);
  });
}