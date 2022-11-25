let songList = [{
    name: "Dandelions",
    artist: "Ruth B.",
    img: "dandelions",
    src: "dandelions"
  },
  {
    name: "Drag Me Down",
    artist: "One Direction",
    img: "dragmedown",
    src: "dragmedown"
  },
  {
    name: "Perfect",
    artist: "Ed Sheeran",
    img: "perfect",
    src: "perfect"
  },
  {
    name: "Teeth",
    artist: "5 Seconds of Summer",
    img: "teeth",
    src: "teeth"
  }
];

var songName = $(".name");
var songArtist = $(".artist");
var songImage = $(".song-image img");
var playpause = $(".pause-play");
var next = $(".next");
var previous = $(".previous");
var queue = $(".list");
var list_close = $("#close");
var song = document.getElementById("song");
var shuffle = $(".shuffle");

var musicIndex = 1; //considering the indexing starts from 0

document.addEventListener("DOMContentLoaded", musicLoad);


function musicLoad() {
  song.src = "songs/" + songList[musicIndex].src + ".mp3";
  song.addEventListener("loadeddata",function(){
    $(".total").html(timeConverter(song.duration));});
  song.addEventListener("timeupdate", function(event){
  length = event.target.currentTime * 100 / event.target.duration;
  $(".current").html(timeConverter(event.target.currentTime));
  $(".progress-current").css("width", length + "%");
  });
  songName.html(songList[musicIndex].name);
  songArtist.html(songList[musicIndex].artist);
  songImage.attr("src", "images/"+songList[musicIndex].src+".jpg");
  select();
}

playpause.click(function() {
  $(this).addClass("pressed");
  setTimeout(function() {
    playpause.removeClass("pressed");
  }, 100);
  playpause.hasClass("play") ? playMusic() : pauseMusic();
});

function pauseMusic() {
  playpause.addClass("play");
  playpause.children("i").html("play_arrow");
  song.pause();
}

function playMusic() {
  playpause.removeClass("play");
  playpause.children("i").html("pause");
  song.play();
}

next.click(nex);

function nex() {
  deselect();
  next.addClass("pressed");
  setTimeout(function() {
    next.removeClass("pressed");
  }, 100);
  pauseMusic();
  ++musicIndex;
  if(musicIndex === songList.length){
    musicIndex = 0;
  }
  musicLoad();
  playMusic();
}

previous.click(prev);

function prev() {
  deselect();
  previous.addClass("pressed");
  setTimeout(function() {
    previous.removeClass("pressed");
  }, 100);
  pauseMusic();
  --musicIndex;
  if(musicIndex === -1){
    musicIndex = songList.length - 1;
  }
  musicLoad();
  playMusic();
}

queue.click(songlist);

function songlist() {
  $(this).addClass("pressed");
  setTimeout(function() {
    queue.removeClass("pressed");
  }, 100);
  $(".music-list").css("bottom", "0px");
}

list_close.click(close);

function close() {
  $(".music-list").css("bottom", "-250px");
}

function timeConverter(time){
  min = Math.floor(time / 60);
  sec = Math.floor(time - min * 60);
  if (sec < 10) {
    sec = "0" + sec;}
  return min+":"+sec;
}

song.addEventListener("ended", function(){
  nex();
});

document.querySelector(".progress-bar").addEventListener("click", function(event){
  var length = event.offsetX;
  song.currentTime = song.duration * length/document.querySelector(".progress-bar").clientWidth;
  document.querySelector(".progress-current").style.width = length;
});

for (var i = 0; i < songList.length; i++) {
  $("#" + i + " .row span").html(songList[i].name);
  $("#" + i + " .row p").html(songList[i].artist);
}

shuffle.click(function(){
  deselect();
  $(this).addClass("pressed");
  setTimeout(function() {
    shuffle.removeClass("pressed");
  }, 100);
  var randIndex = Math.floor(Math.random()*songList.length);
  while(musicIndex === randIndex){
    randIndex = Math.floor(Math.random()*songList.length);
  }
  musicIndex = randIndex;
  musicLoad();
  playMusic();
});

for(var i = 0;i<songList.length;i++){
  $("#"+i).click(function(i){
    deselect();
    musicIndex = $(this).attr("id");
    close();
    musicLoad();
    playMusic();
  });
}

function select(){
  $("#"+musicIndex).addClass("playing");
  $("#"+musicIndex+" .audio-duration span").html("Playing");
}

function deselect(){
  $("#"+musicIndex).removeClass("playing");
  $("#"+musicIndex+" .audio-duration span").html("");
}
