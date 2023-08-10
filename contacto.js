const d = document,
contactCont = d.querySelector(".contact-cont"),
    $formulario = d.querySelector(".contact-cont__form");

//Validation of the information entered in the form
export function contacto(){
  // the information loads only when you are in the tab
  if(contactCont){
    //Creation of error messages
    const $inputs = d.querySelectorAll(".contact-cont__form [required]");
    $inputs.forEach((input) => {
      const $span = d.createElement("span");
      $span.id = input.name;
      $span.textContent = input.title;
      $span.classList.add("contact-cont__error", "contact-cont__none");
      input.insertAdjacentElement("afterend", $span);
    });
  
    //The written text is validated
    d.addEventListener("keyup", (e) => {
      if (e.target.matches(".contact-cont__form [required]")) {
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
      const $loader = d.querySelector(".contact-cont__loader"),
        $response = d.querySelector(".contact-cont__response");
  
      $loader.classList.remove("contact-cont__none");
  
      setTimeout(() => {
        $loader.classList.add("contact-cont__none");
        $response.classList.remove("contact-cont__none");
        $formulario.reset();
  
        setTimeout(() => {
          $response.classList.add("contact-cont__none");
        }, 3000);
      }, 3000);
    });

  }

}