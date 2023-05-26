const d = document,
    reproductor = d.querySelector(".video-cont__video"),
    pause = d.querySelector(".video-cont__pause"),
    play = d.querySelector(".video-cont__play"),
    options = d.querySelector(".video-cont__options");


export function video (){

    options.addEventListener("click",(e)=>{
        const option = e.target.classList;
        console.log(option);

        if( option.contains("video-cont__pause") ){
            reproductor.pause();
            play.classList.remove("video-cont__bc");
            pause.classList.add("video-cont__bc");
        } else{
            reproductor.play();
            play.classList.add("video-cont__bc");
            pause.classList.remove("video-cont__bc");
        }
       
    });

    

}