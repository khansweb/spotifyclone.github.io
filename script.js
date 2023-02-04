
let songIndex = 0;

let audioElement = new Audio('1.mp3');
let masterplay = document.getElementById('masterplay');
let my = document.getElementById('my');
let gif = document.getElementById('gifi')
gif.style.opacity =0;
let songItems = Array.from(document.getElementsByClassName('songcontainer'))
let songs = [
    {songname : "1", filepath:"songs/1.mp3" ,coverspath:"covers/1.jpg"},
    {songname : "2", filepath:"songs/2.mp3" ,coverspath:"covers/2.jpg"},
    {songname : "3", filepath:"songs/3.mp3" ,coverspath:"covers/3.jpg"},
    {songname : "4", filepath:"songs/4.mp3" ,coverspath:"covers/4.jpg"},
    {songname : "5", filepath:"songs/5.mp3" ,coverspath:"covers/5.jpg"},
    {songname : "6", filepath:"songs/6.mp3" ,coverspath:"covers/6.jpg"},
    {songname : "7", filepath:"songs/7.mp3" ,coverspath:"covers/7.jpg"},
]
songItems.forEach((element, i)=>{
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverspath;
    element.getElementsByClassName("songname")[0].innerText=songs[i].songname;
})
masterplay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity =0;
    }
})
// check the time 
audioElement.addEventListener('timeupdate' ,() => {
    
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    
    my.value =progress;

    my.addEventListener('change' ,() =>{
        audioElement.currentTime = my.value * audioElement.duration/100;
    })
})

