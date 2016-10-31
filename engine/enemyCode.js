//Vi laver også en Enemy funktion, der ligesom vores Bullet funktion, returnere et objekt.
//Her er objektet en fjende som vi skaber, der skal løbe fra sin start position, mod hovedpersonen.
//Vi bruger en random funktion til at bestemme x og y positionen, så den altid ved starte et sted på en kant (top, bund, højre eller venstre)
//(Vi giver også fjenden noget random liv, der afgør hvor mange skud den kan holde til).
var Enemy = function(){
    
 //det tomme fjende objekt  
 var enemy = {};

 var pickNumber = random(1,8);
 
 if(pickNumber > 6){
  enemy.type="blue";

  }else if(pickNumber > 4){
  enemy.type="red";

  }else if(pickNumber > 2){
  enemy.type="green";

  }else {
  enemy.type="orange";
  }
 
 //et random tal mellem 0 og 4, vi bruger dette til at få vores fjende til at starte ved en tilfældig kant.
 var startPoint = random(0,4);
 
 //hvis tallet var mindre end 1, så starter vi i toppen et sted
 if(startPoint < 1){
     enemy.x = random(0,width); 
     enemy.y = 0; 
 }else if(startPoint < 2){ //mindre end 2, bunden
     enemy.x = random(0,width); 
     enemy.y = height; 
 }else if(startPoint < 3){ //mindre end 3, venstre
     enemy.x = 0; 
     enemy.y = random(0,height); 
 }else{ //ellers til højre
  enemy.x = width; 
  enemy.y = random(0,height); 
 }
 

 if(enemy.type == "blue"){
     //fjenden får random liv, mellem 6 og 46.
 enemy.health = random(6,46);
  }else if (enemy.type == "red"){
   //fjenden får random liv, mellem 3 og 23.
 enemy.health = random(3,23);  
  }else if (enemy.type == "green"){
   //fjenden får random liv, mellem 3 og 23.
 enemy.health = random(50,75);  
  }
   else{
  //fjenden får random liv, mellem 2 og 12.
   enemy.health =random (2,12);
   }
 
 //og dens retning sættes til at være mod hovedpersonen, også ved lidt vektorregning
 enemy.dirX =    mainCharacter.x - enemy.x; 
 enemy.dirY =   mainCharacter.y - enemy.y ;       
 
 var length = Math.sqrt( enemy.dirX * enemy.dirX +enemy.dirY * enemy.dirY);
 
 enemy.dirX /= length;
 enemy.dirY /= length;

 if (enemy.type=="orange"){
  enemy.dirX = enemy.dirX * 3;
  enemy.dirY = enemy.dirY * 3;
 }
 
 //vi gør nogle fjender lidt hurtigere, og andre lidt langsommere ved at gange deres retningsvektorer med noget random
 //dette gør også at de kan ramme lidt forbi vores hovedperson
 enemy.dirX *= random(0.5,1.5) * enemySpeedIncrease;
 enemy.dirY *= random(0.5,1.5) * enemySpeedIncrease;
 
 //til sidt returnere vi vores fjende objekt
 return enemy;   
};