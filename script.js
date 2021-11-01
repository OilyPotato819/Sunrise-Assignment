// Sunrise Assignment

let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 400;
cnv.height = 400;

// Declare Global Variables
let cloud = document.getElementById("cloud-img");
let leftCloudX = 160;
let rightCloudX = 130;
let sunY = 300;
let sunSize = 20;
let sunGreen = 0;

requestAnimationFrame(loop);
function loop() {
    leftCloudX++;
    rightCloudX--
    sunY--;
    sunSize += 0.2;
    sunGreen++;

    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, 400, 300);

    ctx.fillStyle = "rgb(255," + sunGreen + ", 0)";
    ctx.beginPath();
    ctx.arc(200, sunY, sunSize, 0, 2 * Math.PI);
    ctx.fill();

    ctx.fillStyle = "green";
    ctx.fillRect(0, 300, 400, 100);

    ctx.drawImage(cloud, leftCloudX, 80);
    ctx.drawImage(cloud, rightCloudX, 100);

    requestAnimationFrame(loop);
}