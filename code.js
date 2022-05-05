song1 = "";
song2 = "";

function preload(){
    song1 = loadSound("giorno theme.mp3")
    song2 = loadSound("SecretSong.mp3")
}

function setup(){
    canvas  = createCanvas(600, 500)
    canvas.center()

    video = createCapture(VIDEO)
    video.hide()
}