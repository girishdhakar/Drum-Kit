var n = document.querySelectorAll(".drum").length;

for(var i=0; i<n; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var word = this.innerHTML;
        makeSound(word);
        addAnimation(word);
    })
}

document.addEventListener("keypress", function(event){
    var word = event.key;

    makeSound(word);
    addAnimation(word);
    
})

function makeSound(word){
    if(word == 'a'){
        var crash = new Audio('./crash-sound.mp3');
        crash.play();
    }
    else if(word == 's'){
        var kick = new Audio('./kick-bass-sound.mp3');
        kick.play();
    }
    else if(word == 'd'){
        var snare = new Audio('./snare-sound.mp3');
        snare.play();
    }
    else if(word == 'f'){
        var tom1 = new Audio('./tom-1-sound.mp3');
        tom1.play();
    }
    else if(word == 'g'){
        var tom2 = new Audio('./tom-2-sound.mp3');
        tom2.play();
    }
    else if(word == 'h'){
        var tom3 = new Audio('./tom-3-sound.mp3');
        tom3.play();
    }
    else if(word == 'j'){
        var tom4 = new Audio('./tom-4-sound.mp3');
        tom4.play();
    }
}

function addAnimation(keyPressed){
    var keyType = document.querySelector("." + keyPressed);

    keyType.classList.add("pressed");

    setTimeout(function(){
        keyType.classList.remove("pressed");
    }, 100);
}