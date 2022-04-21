function preload(){
img_Clwn=loadImage("Clown-Nose.png")
}

x_nose=0
y_nose=0

function setup(){
canvas=createCanvas(350,350);
canvas.center();
VidCanvas=createCapture(VIDEO);
VidCanvas.hide();
Pose_Net=ml5.poseNet(VidCanvas,Model_Loaded);
Pose_Net.on('pose',got_pose);
}



function Take_snapshot(){
    save("Your_a_clown.png");
}
 function Model_Loaded(){
     console.log("Model initialized")
 }
 
 function got_pose(results){
     if(results.length>0){
         console.log(results);
         x_nose=results[0].pose.nose.x;
         y_nose=results[0].pose.nose.y;
         console.log("X = "+ x_nose);
         console.log("Y = "+ y_nose);


     }
 }


 function draw(){
    image(VidCanvas,0,0,350,350);

    
    image(img_Clwn,x_nose,y_nose,20,20);

}