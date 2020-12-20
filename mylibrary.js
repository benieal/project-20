function isTouching(a,b){
    if (a.x-b.x<a.width/2+b.width/2 && b.x-a.x<a.width/2+b.width/2 && a.y-b.y<a.height/2+b.height/2 && b.y-a.y<a.height/2+b.height/2){
    return true;
    }
    else{
      return false;
    }
  }
  
  function bounceOff(){
    if (car.x-wall.x<car.width/2+wall.width/2 && wall.x-car.x<car.width/2+wall.width/2){
     car.velocityX= (-1) * car.velocityX
  
  
    }  
  }