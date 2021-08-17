function preload(){

}

function setup(){
    video = createCapture(VIDEO);
    video.position(650, 90);
    canvas = createCanvas(640, 480);
    canvas.position(650, 90);
}

function draw(){
    fill('rgb(100%,0%,10%)');
    strokeWeight(0);
    circle(30, 450, 50);
    circle(30, 30, 50);
    circle(610, 30, 50);
    circle(610, 450, 50);
}

function take_snapshot(){
    save("your_amazing_photo.png");

    sound = createAudio('ding-sound-effect_2.mp3');
    sound.autoplay(true);
}