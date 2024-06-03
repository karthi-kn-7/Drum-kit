function toPlay(key){
    switch(key){
        case "w":
            var a=new Audio("sounds/tom-1.mp3");
            a.play();
            break;
        case "a":
            var a=new Audio("sounds/tom-2.mp3");
            a.play();
            break;
        case "s":
            var a=new Audio("sounds/tom-3.mp3");
            a.play();
            break;
        case "d":
            var a=new Audio("sounds/tom-4.mp3");
            a.play();
            break;
        case "j":
            var a=new Audio("sounds/crash.mp3");
            a.play();
            break;

        case "k":
            var a=new Audio("sounds/kick-bass.mp3");
            a.play();
            break;

        case "l":
            var a=new Audio("sounds/snare.mp3");
            a.play();
            break;
        default:
    }
}
function buttonAnimation(k){
    var v=document.querySelector("."+k);
    v.classList.add("pressed");
    setTimeout(function(){
       v.classList.remove("pressed"); 
    }, 100);

}
for(i=0;i<7;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var v=this.innerHTML;
        console.log(v);
        toPlay(v);
        buttonAnimation(v);
    });
}
document.addEventListener("keypress",function(event){
    toPlay(event.key);
    buttonAnimation(event.key);
});