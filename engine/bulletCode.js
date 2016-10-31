
//Vi starter med at have en Bullet funktion, der skaber og returner en bullet når vi kalder funktionen.
//Vi skaber et tomt bullet-object først i funktionen, med de to krøllede paranteser {} i en variabel 
//Derefter fylder vi der med de variable vi gerne vil have, med de korrekte værdier
var Bullet = function(){
    
 //det nyskabte tomme bullet object 
 var bullet = {};
 
 //først fylder vi bullet objektet med dens start position (x,y), der er der hvor vores mainCharacter starter
 bullet.x = mainCharacter.x;    
 bullet.y = mainCharacter.y; 
 
 //nedenstående kode bruger vektor regning til at bestemme retningen og hastigheden
 //vi får skudet til at skyde fra karakteren og mod musens position
 
 bullet.dirX =  mouseX - mainCharacter.x; 
 bullet.dirY =  mouseY -  mainCharacter.y;       
 
 var length = Math.sqrt( bullet.dirX * bullet.dirX +bullet.dirY * bullet.dirY);
 
 bullet.dirX /= length;
 bullet.dirY /= length;
 
 //gennem vektorregningen udregnes også her dirX og dirY. De bestemmer som sagt hvor mange pixels man bevæger sig højre/venstre og op/ned.
 bullet.dirX *= bulletSpeed;
 bullet.dirY *= bulletSpeed;
 
 //Til sidst returnere vi vores bullet objekt
 //Dette bullet objekt, vil vi længere nede i koden putte direkte i vores bullet-liste (bullets), så vi også kan tegne det.
 return bullet;   
};

/*
På baggrund af specielle ønsker gøres det muligt at roterer bullet-billedet.

Vi udregner nedenunder vinklen mellem en bullets position og retning.
Derefter laver vi et "tegnelag" ovenpå vores normale canvas. (en Matrix, laves med "pushMatrix()").

Dette tegnelag kan flyttes og roteres, for derefter at smelte tilbage sammen med vores orginale lag (ved at bruge "popMatrix()").

Ved at flytte og roterer et tegnelag som vi tegner vores bullet-billede på, vises billedet rigtigt når vi smelter vores tegnelag tilbage i det normale billede (via popMatrix()).

*/
var drawBullet = function(bullet){

  //vinkel mellem position og retning
  var angle = atan2(bullet.dirX-bullet.x,bullet.dirY-bullet.y);
      
  pushMatrix();

  translate(bullet.x,bullet.y);
  
  rotate(angle);
  
fill(255, 255, 0);
ellipse(0,0,5,5);

  //image(bulletImage,0,0, bulletPixelSize,bulletPixelSize);
    
  popMatrix();

}