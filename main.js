function tp_img1()
{
    window.location="img_1.html";
}
function tp_img2()
{
    window.location="img_2.html";
}
function tp_img3()
{
    window.location="img_3.html";
}

img="";
status="";
objects=[];

function preload()
{
    img=loadImage('img_1.jpg');
}

function setup()
{
    canvas=createCanvas(640,420);
    canvas.center();
    
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function draw()
{
    image(img,0,0,640,420);

    if (status !="")
    {
        for(i=0; i <objects.length; i++)
        {
        document.getElementById("status").innerHTML="Status : Objects Detected";

        fill("#1a9db8");
        percent=floor(objects[i].confidence*100);
        text(objects[i].label+" "+percent+"%",objects[i].x,objects[i].y);
        noFill();
        stroke("#1a9db8");
        rect(objects[i].x -15,objects[i].y,objects[i].width,objects[i].height);
        }
    }
}

function modelLoaded()
{
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img,gotResult);
}

function gotResult(error,results)
{
    if (error)
    {
        console.log(error);
    }
    console.log(results);
    objects=results;
}