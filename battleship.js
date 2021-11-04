var userName = "";
var ships = [{x : Math.floor(Math.random()*10) + 1, y : Math.floor(Math.random()*7) + 1} , {x : Math.floor(Math.random()*10) + 1, y : Math.floor(Math.random()*7)+ 1} , {x : Math.floor(Math.random()*10)+ 1, y : Math.floor(Math.random()*7)+ 1}];
var xLocation;
var yLocation;
var countScore = 0;
var countRound = 0;
var check;

function startGame() {
  userName = document.getElementById("userName").value;
  if (userName == "") {
    alert("Please enter your name to start the game");
  } else {
    var imageTarget = document.createElement('img');
    imageTarget.id ="bird";
    imageTarget.src = './Image/bird1.png';
    var imageTarget2 = document.createElement('img');
    imageTarget2.id ="bird";
    imageTarget2.src = './Image/bird1.png';
    var imageTarget3 = document.createElement('img');
    imageTarget3.id = "bird";
    imageTarget3.src = './Image/bird1.png';

    debugger
    document.getElementById("intruction-game").style.display = "none";
    document.getElementById("restart").style.display = "none";    
    document.getElementById("start-game").style.display = "block";

    document.getElementById("col" + ships[0].x + "-" + ships[0].y).appendChild(imageTarget);
    document.getElementById("col" + ships[1].x + "-" + ships[1].y).appendChild(imageTarget2);
    document.getElementById("col" + ships[2].x + "-" + ships[2].y).appendChild(imageTarget3);
  }
}
document.getElementById("button-start").addEventListener("click", startGame)


function checkValid() {
  xLocation = document.getElementById("x").value;
  yLocation = document.getElementById("y").value;
  var checkX;
  var checkY;
  if (isNaN(xLocation) || xLocation < 1 || xLocation > 10) {
    alert("Check your x, x between 0 to 10");
    document.getElementById("x").value = "";
    checkX = 0;
  } else {
    checkX = 1;
  }
  if (isNaN(yLocation) || yLocation < 1 || yLocation > 7) {
    alert("Check your y, y between 0 to 7");
    document.getElementById("y").value = "";
    checkY = 0;
  } else {
    checkY = 1;
  }
  if(checkX == 1 && checkY == 1){
    check = 1
  } else {
    check = 0
  }
}
document.getElementById("button-fire").addEventListener("click", checkValid)

function fire() {
  var xUser = document.getElementById("x").value;
  var yUser = document.getElementById("y").value;
  // countRound = countRound + 1;
  // document.getElementById("count-round").innerHTML = countRound;
  if(checkValid){
    countRound = countRound + 1;
    document.getElementById("count-round").innerHTML = countRound;
	  for(let i = 0; i < ships.length; i++){
      if(xUser == ships[i].x && yUser == ships[i].y){
        alert("Hit shot!");
        countScore = countScore + 1;
        document.getElementById("count-score").innerHTML = countScore;
        var parent = document.getElementById("col" + ships[i].x + "-" + ships[i].y);
        var children = document.getElementById("bird");
        parent.removeChild(children);
        ships.splice(i, 1);
      }
    }
    var parent = document.getElementById("user-input");
    var childrenX = document.getElementById("x");
    var childrenY = document.getElementById("y");
    var childrenButtonFire = document.getElementById("button-fire");
    var result = '';

    if  (countScore == 3){
      parent.removeChild(childrenX);
      parent.removeChild(childrenY);
      parent.removeChild(childrenButtonFire);
      result = document.createElement("h1");
      document.getElementById("enter-location").innerHTML = userName.toUpperCase()+ " WIN!";
      document.getElementById("restart").style.display = "block";
    } else if(countRound == 5 && countScore < 3) {
        debugger
        parent.removeChild(childrenX);
        parent.removeChild(childrenY);
        parent.removeChild(childrenButtonFire);
        result = document.createElement("h1");
        document.getElementById("enter-location").innerHTML = userName.toUpperCase() + " LOSE!";
        document.getElementById("restart").style.display = "block";
    }
  }
}

function restartGame(){
  location.reload();
}

document.getElementById("button-fire").addEventListener("click", fire)
document.getElementById("button-restart").addEventListener("click", restartGame)
