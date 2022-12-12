var add = document.querySelector("#add");
var addSubmit = document.querySelector(".submit");
var del = document.querySelectorAll(".delete");
var items = document.querySelector("#items");
var filter = document.querySelector("#filter");

var newItem;

addSubmit.addEventListener("click", addItem);
add.addEventListener("keypress", function(event){
  if(event.key === "Enter"){
    event.preventDefault();
    addItem();
  }
});

function addItem() {
  if(add.value !== ""){
    newItem = document.createElement("li");
    newItem.className = "list-group-item";
    newItem.innerHTML = add.value + '<button type="button" class="btn btn-danger btn-sm float-right delete " name="button"><i class="fa-solid fa-xmark"></i></button>';
    items.appendChild(newItem);
    newItem.querySelector(".delete").addEventListener("click", trash);
    setTimeout(function()
    {
      add.value = "";
      addSubmit.blur();
    }, 50);
  }
}

del.forEach(d => d.addEventListener("click", trash));

filter.addEventListener("input", function(e){
  var itemList = document.querySelectorAll("li");
  console.log(itemList);
    itemList.forEach(function(item){
      if(item.firstChild.textContent.toLowerCase().indexOf(event.target.value.toLowerCase()) != -1){
        item.style.display = "block";
      }
      else{
        item.style.display = "none";
      }
    });
});

function trash(){
    this.parentElement.remove();
}
