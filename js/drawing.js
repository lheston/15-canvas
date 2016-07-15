'use strict';

//wait for document to load
window.onload = function() {

  //YOUR CODE GOES IN HERE
  var canvas = document.querySelector('#canvas');
  var brush = canvas.getContext('2d');

  brush.fillStyle = '#39275B';
  brush.strokeStyle = '#C79900';

  brush.fillRect(20, 30, 50, 100);
  brush.strokeRect(20,40,60,200);

  brush.beginPath();
  brush.moveTo(200,200);
  brush.lineTo(220, 400);
  brush.lineTo(270,250);
  brush.lineTo(320,400);
  brush.closePath();


  //draw path
  brush.stroke();
  brush.fill();

 

  brush.fillStyle = '#F7FE2E';

  brush.fillStyle = '#F7FE2E';

  brush.beginPath();
  brush.fillRect(300, 20, 110, 110);
  brush.fill();

  brush.fillStyle = '#39275B';
  brush.strokeStyle = '#C79900';
   //arc new path
  brush.beginPath();
  //centerX, centerY, radius, startAngle, endAngle
  brush.arc(355,80,30,0*Math.PI, 1*Math.PI);

  brush.fill();

  brush.beginPath();
  //centerX, centerY, radius, startAngle, endAngle
  brush.arc(330,50,15,1*Math.PI, 2*Math.PI);

  brush.fill();

   brush.beginPath();
  //centerX, centerY, radius, startAngle, endAngle
  brush.arc(380,50,15,1*Math.PI, 2*Math.PI);

  brush.fill();

  brush.beginPath();
  //centerX, centerY, radius, startAngle, endAngle
  brush.arc(350,60,15,.15*Math.PI, .75*Math.PI);

  brush.fill();

  function mouseDrawing(){
    canvas.addEventListener('click', function(event){
      var x = event.offsetX;
      var y = event.offsetY;

      brush.beginPath();
      brush.arc(x,y,20,0,2*Math.PI);
      brush.fill();
    })
  }

  mouseDrawing();

  function mouseSmall(){
    var input = document.querySelector('#picker');
    brush.strokeStyle = input.value;
    canvas.addEventListener('mousedown', function(){
      var input = document.querySelector('#picker');
      brush.strokeStyle = input.value;
      var x = event.offsetX;
      var y = event.offsetY;
      brush.beginPath();
      brush.arc(x,y,5,0,2*Math.PI);
      brush.fill();

      //pressed = true;

      
            
    })

    canvas.addEventListener('mousemove', function(){
      var input = document.querySelector('#picker');
      brush.strokeStyle = input.value;
      var x = event.offsetX;
      var y = event.offsetY;
      brush.beginPath();
      brush.arc(x,y,5,0,2*Math.PI);
      brush.fill();




    })
    canvas.addEventListener('mouseup', function(){
      var input = document.querySelector('#picker');
      brush.strokeStyle = input.value;
      var x = event.offsetX;
      var y = event.offsetY;
      brush.beginPath();
      brush.arc(x,y,5,0,2*Math.PI);
      brush.fill();




    })

    

    
  }
  mouseSmall();

  

};

