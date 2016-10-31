


//keyPressed og keyReleased, gør at vi kan opfange hvornår en tast trykkes ned og slippes.
//Vi sætter de rigtige knapper til true eller false. 

//her sættes de rigtige trykkede knapper til true (true == holdt nede)
var keyPressed = function() 
{
  if(key.toString()==='a'){
    keys.a =true;
  }
  if(key.toString()==='s')
    {       
    keys.s =true;
  }
  if(key.toString()==='w')
    {       
    keys.w =true;
  }
  if(key.toString()==='d')
    {       
    keys.d =true;
  }

};

var pauseGame = false;

//her sættes de slippede knapper til false
var keyReleased = function()
{
  if(key.toString()==='a'){
    keys.a=false;
  }
  
  if(key.toString()==='s'){
    keys.s=false;
  }
if(key.toString()==='w')
    {       
    keys.w =false;
  }
  if(key.toString()==='d')
    {       
    keys.d =false;
  }

  if (key.toString()==='p')
  {       
  
    if(pauseGame == false){
    frameRate(0.0000000001);
  pauseGame = true;
  }else
{       
  pauseGame = false;
    frameRate(30);
  }

  }

};