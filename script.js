var c = document.getElementById("mycanvas");
var ctx = c.getContext("2d");

raindrops = [];

function gameLoop() {
  ctx.fillStyle = "white";
  ctx.rect(0,0,c.width,c.height);
  ctx.fill();
  var raindrop = {
    x:Math.random() * c.height,
    y:0
  }
  raindrops.push(raindrop);
  var k = raindrops.length
  while (k--) {
    var drop = raindrops[k];
    drop.y = drop.y + 3;
    if (drop.y > c.height) {
      raindrops/splice(k,1);
    } else {
        ctx.beginPath()
        ctx.rect(drop.x,drop.y,2,4);
        ctx.fillStyle = "pink";
        ctx.fill();
      }
    }
  }
  setInterval(gameLoop, 50)