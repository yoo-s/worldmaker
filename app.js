function draw() {
  var ctx = document.getElementById('ctx').getContext('2d');
  var img = new Image();
  img.onload = function(){
    /*for (var i=0;i<10;i++){
      for (var j=0;j<10;j++){
        ctx.drawImage(img,j*48,i*48,64,64);
      }
    }
  };
  img.src = 'http://i.imgur.com/7Dcqh9L.png';*/
  	ctx.drawImage(img, 30, 0);
  };
  img.src = 'http://i.imgur.com/76rRvj7.png';
}
