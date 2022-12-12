var data = [
  {
    ques: "Who is the Prime Minister of India",
    a: "Ramnath Kovind",
    b: "Narendra Modi",
    c: "Droupadi Murmu",
    d: "Manmohan Singh",
    answer: "b"
  },
  {
    ques: "Which of the following is not a programming language",
    a: "HTML",
    b: "Python",
    c: "C",
    d: "Haskell",
    answer: "a"
  },
  {
    ques: "Which of the following is a framework of javascript used for backend development",
    a: "Django",
    b: "React",
    c: "Node",
    d: "Laravel",
    answer: "c"
  },
  {
    ques: "Who is the CEO of Meta",
    a: "Elon Musk",
    b: "Mark Zuckerburg",
    c: "Narayana Murthy",
    d: "Rishi sunak",
    answer: "b"
  }
];

var question = document.querySelector("#question");
var a = document.querySelector("#av");
var b = document.querySelector("#bv");
var c = document.querySelector("#cv");
var d = document.querySelector("#dv");
var answer = document.querySelectorAll(".answer");
var submit = document.querySelector("#submit");
var quiz = document.querySelector(".quiz").innerHTML;

var currentQues = 0;
var score = 0;


loadquiz();

function loadquiz(){
  answer.forEach(answer=>answer.checked=false);
  question.innerHTML = data[currentQues].ques;
  a.innerHTML = data[currentQues].a;
  b.innerHTML = data[currentQues].b;
  c.innerHTML = data[currentQues].c;
  d.innerHTML = data[currentQues].d;
}

submit.addEventListener("click", function(){
  this.classList.add("btnClick");
  setTimeout( function(){
    submit.classList.remove("btnClick");
  }, 100);
    var selectedoption = "";
    answer.forEach(answer=>{
    if(answer.checked)
      {
        selectedoption = answer;
      }
    });
    console.log(currentQues);
    if(selectedoption.id === data[currentQues].answer)
    {
        score++;
    }
    currentQues++;
    if(currentQues === data.length){
      document.querySelector(".quiz").innerHTML = `<div class="score"><h1 style="text-align: center; color: white">You have correctly answered ${score}/${data.length} questions</h1>
      <button id="reload">Reload</button></div>`;
      var reload = document.querySelector("#reload");
      reload.addEventListener("click", function(){
        this.classList.add("btnClick");
        setTimeout( function(){
          reload.classList.remove("btnClick");
        }, 100);
        location.reload();
      });

    }
    else{
      loadquiz();
  }
});
