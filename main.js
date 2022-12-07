song1= "";
song2= "";
leftWristY= "";
leftWristX= "";
rightWristY= "";
rightWristX= "";
function preload() {
     song1= loadSound("echo.mp3");
     song2= loadSound("jackpot sad girl.mp3");
}
function setup() {
     canvas= createCanvas(600, 500);
     canvas.center();
     video= createCapture(VIDEO);
     video.hide();
     poseNet= ml5.poseNet(video, modelLoaded);
     poseNet.on("pose", gotPoses);
}
 function modelLoaded() {
     console.log("pose net 👍");
}
function gotPoses(results) {
     if(results.length > 0) {
         console.log(results);
         rightWristX= results[0].pose.rightWrist.x;
         rightWristY= results[0].pose.rightWrist.y;
         console.log("rightWristX= " + rightWristX + "rightWristY= " + rightWristY);
         leftWristX= results[0].pose.leftWrist.x;
         leftWristY= results[0].pose.leftWrist.y;
         console.log("leftWristX= " + leftWristX + "leftWristY= " + leftWristY);
     }
 }
function draw() {
     image(video, 0, 0, 600, 500);
}
