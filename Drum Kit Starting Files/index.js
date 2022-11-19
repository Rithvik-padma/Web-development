buttonClick = document.querySelectorAll(".drum");

for(i = 0; i<buttonClick.length;i++)
{
  buttonClick[i].addEventListener("click", function(){
    makeSound(this.innerHTML);
  });
}

document.addEventListener("keydown", function(event){
  makeSound(event.key);

})

function makeSound(key){
  switch(key)
  {
    case "w": var audio = new Audio("sounds/crash.mp3");
    audio.play();
    animation(document.getElementsByClassName(key)[0]);
    break;
    case "a": var audio = new Audio("sounds/kick-bass.mp3");
    audio.play();
    animation(document.getElementsByClassName(key)[0]);
    break;
    case "s": var audio = new Audio("sounds/snare.mp3");
    audio.play();
    animation(document.getElementsByClassName(key)[0]);
    break;
    case "d": var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
    animation(document.getElementsByClassName(key)[0]);
    break;
    case "j": var audio = new Audio("sounds/tom-2.mp3");
    audio.play();
    animation(document.getElementsByClassName(key)[0]);
    break;
    case "k": var audio = new Audio("sounds/tom-3.mp3");
    audio.play();
    animation(document.getElementsByClassName(key)[0]);
    break;
    case "l": var audio = new Audio("sounds/tom-4.mp3");
    audio.play();
    animation(document.getElementsByClassName(key)[0]);
    break;
    default:console.log(key); break;
  }
}

function animation(ele){
  ele.classList.add("pressed");
  setTimeout(function () {
    ele.classList.remove("pressed");
  }, 100);
}
