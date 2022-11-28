let strin = "";
let operators = ["+","-","÷","×","%"];
$(function(){
  $("button").click(function(){
    $("input").removeAttr("disabled");
    $(this).addClass("pressed");
    setTimeout(function(){$(".pressed").removeClass("pressed");}, 100);
    if(!(strin.length === 0 && (operators.includes($(this).attr("id")) || $(this).attr("id") === "equal")))
    {
      if(operators.includes(strin.charAt(strin.length-1)) && operators.includes($(this).attr("id")))
      {
        if(($(this).attr("id") === "-" && (strin.charAt(strin.length -1) === "÷" || strin.charAt(strin.length -1) === "×")))
        {
          strin += $(this).attr("id");
        }
      }
      else if($(this).attr("id") === "equal"){
        strin = strin.replace("×","*").replace("÷", "/");
        strin = eval(strin).toString();
      }
      else if($(this).attr("id") === "00")
      {
        strin = "0";
      }
      else if($(this).attr("id") === "clear"){
        strin = "";
      }
      else if($(this).attr("id") === "delete"){
        strin = strin.slice(0,-1);
      }
      else{
        strin += $(this).attr("id");
      }
      $("input").attr("value", strin);
    }
    $("input").attr("disabled","disabled");
  });
});
