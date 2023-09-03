noseX=0;
noseY=0;


function setup() {

    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded() {
    console.log('poseNet is initialized');
}
function gotPoses(results) 
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x-14;
        noseY = results[0].pose.nose.y-5;
    }
}


function preload() {
    mustache_nose = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
    }

    function draw() {
        image(video, 0 ,0 ,300, 300);
        image(mustache_nose, noseX, noseY , 30 , 30);
       
    }