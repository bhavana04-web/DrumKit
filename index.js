for(i=0;i<=6;i++)
{
document.querySelectorAll("button")[i].addEventListener("click",handleClick);
}
function handleClick()
{
this.style.color="white";
var contentinnerHTML=this.innerHTML;
switch (contentinnerHTML) {
    case "w":
          var sound=new Audio('./sounds/tom-1.mp3');
         sound.play();
        break;
    case "a":
        var sound=new Audio('./sounds/tom-2.mp3');
        sound.play();
        break;

    case "s":
        var sound= new Audio('./sounds/tom-3.mp3');
        sound.play();
        break;
    case "d":
        var sound=new Audio('./sounds/tom-4.mp3');
        sound.play();
        break;
    case "j":
        var sound=new Audio('./sounds/snare.mp3');
        sound.play();
        break;
    case "k":
            var sound=new Audio('./sounds/crash.mp3');
            sound.play();
            break;   
    case "l":
            var sound=new Audio('./sounds/kick-bass.mp3');
            sound.play();
            break;



    default:
        break;
}

 
}