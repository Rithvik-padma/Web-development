var images = document.querySelectorAll(".im-part");
var active;

function check(){
  images.forEach(function(image){
    if(image.classList.contains("on")){
      active = image;
    }
  });
}


images.forEach(function(image){
  image.addEventListener("click", function(){
    check();
    if(image.classList.contains("on"))
    {
      image.classList.remove("on");
    }
    else{
      image.classList.add("on");
      active.classList.remove("on");
    }
  }
)
})
