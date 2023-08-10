const d = document,
    reproductor = d.querySelector(".video-cont__video"),
    pause = d.querySelector(".video-cont__pause"),
    play = d.querySelector(".video-cont__play");

//function exported to logica.js
export function video (){
    //when clicked on...
    d.addEventListener("click",(e)=>{
        //save where clicked
        const option = e.target;
        //if the clicked element contains the class "video-cont__pause"
        if( option.classList.contains("video-cont__pause") ){
            //pause the video
            reproductor.pause();
            play.classList.remove("video-cont__bc");
            pause.classList.add("video-cont__bc");
        } //if the clicked element contains the class "video-cont__play"
        else if(option.classList.contains("video-cont__play")){
            //play the video
            reproductor.play();
            play.classList.add("video-cont__bc");
            pause.classList.remove("video-cont__bc");
        }
       
    });    

}