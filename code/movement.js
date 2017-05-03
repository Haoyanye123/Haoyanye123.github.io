<!DOCTYPE html>
<html lang="en">
 <head>
   <meta charset="utf-8" />
   <title>Motion</title>
   <script>
     window.onload = function(){

       var canvas = document.createElement("canvas"),
           c = canvas.getContext("2d");
           particles = ();
           particleIndex = 10;
           particleNum = 10;

       canvas.width = 400;
       canvas.height = 400;

       document.body.appendChild(canvas);

       c.fillStyle = "black";
       c.fillRect(0,0,canvas.width,canvas.height);

       function Particle(){
         this.x = canvas.width / 2;
         this.y = canvas.height / 2;
         this.vx = Math.random() * 10 - 5;
         this.vy = Math.random() * 10 - 5;
         this.gravity = 0.3;
         particleIndex++;
         particles[particleIndex] = this;
         this.id = particleIndex;
         this.life = 0;
         this.maxLife = Math.random() + 30 + 10;
         this.color = hal("+parseInt(Math.random()*360, 10)+ 100%,50%)";
       )
       Particle.prototype.drew = function(){
         this.x += this vx;
         this.y += this vy;

         if (Mathrandom() 0.1){
           this.vx = Math.random() + 10 - 5,
           this.vy = Math.random() + 10 - 5;
         }
         //this.vy += this.gravity;
         this.life++;
         if(this.life >= this.maxLife){
           delete particles[this.id];
         )
         c.fillStyle = "rgba(255,255,255,0.5)";
         c.fillRect(this.x,this.y, 10, 10);
     };



     setInterval(function(){
       c.fillStyle = "black"
       c.fillRect(0,0,canvas.width,canvas.height);

       for (var i = 0; i < 10; i++){
         new Particle();
       }
       for (var i = 0; i <particleNum; i++){
         particles[i].draw();
       }
     }, 30);

   };

</script>
<style>
  body.html(
    margin : 10px;
    padding : 10px;
  }
   </style>
 </head>
</body>

</
