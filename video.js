const d = document,
    reproductor = d.querySelector(".video-cont__video"),
    pause = d.querySelector(".video-cont__pause"),
    play = d.querySelector(".video-cont__play");


export function video (){

    d.addEventListener("click",(e)=>{
        const option = e.target;
        //console.log(option);

        if( option.classList.contains("video-cont__pause") ){
            reproductor.pause();
            play.classList.remove("video-cont__bc");
            pause.classList.add("video-cont__bc");
        } else if(option.classList.contains("video-cont__play")){
            reproductor.play();
            play.classList.add("video-cont__bc");
            pause.classList.remove("video-cont__bc");
        }
       
    });    

}