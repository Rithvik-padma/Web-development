
let initialIndex = 0;

let songs = [
    {
        name: 'Closer',
        image: 'https://i1.sndcdn.com/artworks-000179073287-3ur3or-t500x500.jpg',
        file: './music-files/Closer.mp3',
        artists: 'The Chainsmokers-Halsey',
        color: '#8123ed'
    },
    {
        name: 'What make you beautiful',
        image: 'https://i.scdn.co/image/ab67616d00001e024a5584795dc73860653a9a3e',
        file: './music-files/Direction.mp3',
        artists: 'One Direction',
        color: '#037c48'
    },
    {
        name: 'We are never getting back together',
        image: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Wearenever....png',
        file: './music-files/Taylor.mp3',
        artists: 'Taylor Swift',
        color: '#dda20d'
    },
    {
        name: 'Believer',
        image: 'https://i1.sndcdn.com/artworks-s3zOCWcV8XQVtQcv-0emq8A-t500x500.jpg',
        file: './music-files/Believer.mp3',
        artists: 'Imagine Dragons',
        color: '#f40e4c'
    },
    {
        name: 'Attention',
        image: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Charlie_Puth_-_Attention_%28Official_Single_Cover%29.png',
        file: './music-files/Attention.mp3',
        artists: 'Charlie Puth',
        color: '#1a0dc6'
    }
]

const shuffleButton = document.getElementById('shuffle');
const previousButton = document.getElementById('previous');
const playButton = document.getElementById('play');
const nextButton = document.getElementById('next');
const repeatButton = document.getElementById('repeat');
const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const songTitle = document.getElementById('title');
const songArtist = document.getElementById('artist');
const progressContainer = document.getElementById('progress-container');
const songImage = document.getElementById('songImage');
const songCardLayout = document.getElementById('songCardLayout');

let progressTime = 0;
let isPaused = false;

loadSongInfo()

function loadSongInfo() {
    const currentSong = songs[initialIndex]
    songTitle.textContent = currentSong.name
    songArtist.textContent = currentSong.artists
    songImage.src = currentSong.image
    audio.src = currentSong.file
    songCardLayout.style.borderColor = currentSong.color
    progress.style.backgroundColor = currentSong.color

}

function playSong() {
    playButton.src = 'images/pause.png'
    playButton.name = 'pause'
    loadSongInfo()
    console.log(playButton.name)
    if (isPaused) {
        audio.currentTime = progressTime
        isPaused = false
    }
    audio.play();
}

function pauseSong() {
    playButton.name = 'play'
    playButton.src = 'images/play.png'
    console.log(playButton.name)
    audio.pause();
    progressTime = audio.currentTime;
    isPaused = true;
}

function previousSong() {
    if (initialIndex == 0) {
        initialIndex = songs.length - 1;
    } else {
        initialIndex--
    }
    isPaused = false
    playSong();
}

function nextSong() {
    if (initialIndex == songs.length - 1) {
        initialIndex = 0;
    } else {
        initialIndex++;
    }
    isPaused = false
    playSong();
}

function repeatSong() {
    const repeatFlag = repeatButton.name
    if (repeatFlag == 'off') {
        repeatButton.name = 'on'
        repeatButton.src = 'images/repeat_green.png'

    } else {
        repeatButton.name = 'off'
        repeatButton.src = 'images/repeat.png'
    }
}

function shuttleSong() {
    initialIndex = randomNumber(0, songs.length - 1)
    console.log(initialIndex)
    isPaused = false
    playSong()
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function setProgress(e) {
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio.duration
    audio.currentTime = (clickX / width) * duration;
}

function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
}

audio.addEventListener('timeupdate', updateProgress);

progressContainer.addEventListener('click', setProgress);

audio.addEventListener('ended', () => {
    const repeatFlag = repeatButton.name
    if (repeatFlag) {
        playSong()
    } else {
        nextSong()
    }
});

repeatButton.addEventListener('click', repeatSong)
previousButton.addEventListener('click', previousSong)
nextButton.addEventListener('click', nextSong)
shuffleButton.addEventListener('click', shuttleSong)

playButton.addEventListener('click', () => {
    const currentState = playButton.name
    console.log(currentState)
    if (currentState == 'play') {
        playSong();
    } else {
        pauseSong();

    }
}, 500);
