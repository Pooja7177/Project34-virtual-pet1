//Create variables here

var database ;
var foodstock;
var foodcount;
var dog , dogimg1,dogimg2;

function preload()
{
  //load images here
  dogimg1 = loadImage("images/dogImg.png")
  dogimg2 = loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(800, 700);
  database = firebase.database();
  foodstock = database.ref('food');
  foodstock.on("value",readstock);

  dog = createSprite(400,350,50,50);
  dog.addImage(dogimg1);
  dog.scale=0.2
 
  
}


function draw() {  
  background("blue")

  drawSprites();
  //add styles here
 
  if(keyWentDown(UP_ARROW)){
    writestock(foodcount)
    dog.addImage(dogimg2);
  }
  
  if(keyWentUp(UP_ARROW)){
     
    dog.addImage(dogimg1);
  }
 fill("black");
  textSize(20);
  text("Food remaining : "+foodcount,170,200);
  textSize(13);
  text("Note: Press UP_ARROW Key To Feed Max Milk!",130,10,300,20);
}
function readstock(data){
  foodcount = data.val()
  console.log(foodcount);


}

function writestock (count){
  if(count<=0 ){
    count = 0
  }else{

count = count - 1
database.ref('/').set({food:count})
  }

}

