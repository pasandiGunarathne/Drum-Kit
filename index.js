var drumButtons = document.querySelectorAll(".drum").length;
//alert( + drumButtons);


for (var i=0 ; i<drumButtons ; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click" , function(){
        var buttonName = this.innerHTML;
        gotClicked(buttonName);
        addAnimation(buttonName);
    }
);
    
    document.addEventListener("keypress", eve);
    function eve(event){
        gotClicked(event.key);
        addAnimation(event.key);
    }
    
       
}
function gotClicked(buttonName){
    
    switch (buttonName){
        case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;

        case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;

        case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;

        case "d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;

        case "j":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;

        case "k":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;

        case "l":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;

        default:
            alert("wrong input");
            break;
    }
    //this.style.color="white";
    //alert("I got clicked!");
    //var audio = new Audio("sounds/tom-1.mp3");
    //audio.play();
}   

//document.addEventListener("keypress", pressed);

//function pressed(event){
  //  console.log(event);
//}

function addAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(time,100);
    function time(){
        activeButton.classList.remove("pressed");
    }
}
