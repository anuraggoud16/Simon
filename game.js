var pattern=[];
var ucpattern=[];
var b=0;
var started=false;
var arr=["red","blue","green","yellow"];
function nextSequence(){
    ucpattern = [];
    b++;
    $("#level-title").text("Level " + b);
    var rdk=Math.random();
    var rd=Math.floor(rdk*4);
    var rdC=arr[rd];
    pattern.push(rdC);
    $("#"+rdC).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(rdC);
}
$(".btn").click(function(){
    var cColor=$(this).attr("id");
    ucpattern.push(cColor);
    playSound(cColor);
    animate(cColor);
    checkAnswer(ucpattern.length-1);
});
function playSound(k){
    var aud=new Audio("sounds/"+k+".mp3");
    aud.play();
}
function animate(sattu){
    $("#"+sattu).addClass("pressed");
    setTimeout(function(){
        $("#"+sattu).removeClass("pressed");
    },100);
}
$(document).keypress(function(){
    if(!started)
    {
    $("#level-title").text("Level "+b);
    $("h4").remove();
    nextSequence();
    started=true;
    }
});
$("#ply").click(function(){
    if(!started)
    {
    $("#level-title").text("Level "+b);
    $("h4").remove();
    nextSequence();
    started=true;
    }
}
);

function checkAnswer(currentLevel) {
    if (pattern[currentLevel] === ucpattern[currentLevel]) {
      if (ucpattern.length === pattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
      playSound("wrong");
      $("body").addClass("game-over");
      $("#level-title").text("Game Over!");
      $("h1").after("<h4>NOTE: YOU HAVE TO REMEMBER THE SEQUENCE FROM LEVEL 0<br><br> Press play to restart</h4>");
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      startOver();
    }
}
function startOver() {
    b = 0;
    pattern = [];
    started = false;
  }