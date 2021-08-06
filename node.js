var numofbtn = document.querySelectorAll(".sound_btn").length;

for(var i = 0; i < numofbtn; i++){
    document.querySelectorAll(".sound_btn")[i].addEventListener('click', function(){
        active = this.innerHTML;
        makeSound(active);
        visualEffect(active);
    });
}

document.addEventListener("keypress", function(event){
    makeSound(event.key);
    visualEffect(event.key);
});

function makeSound(key){
    switch(key){
        case "a":
            new Audio('sounds/s1.mp3').play();
            break;
        case "b":
            new Audio('sounds/s2.mp3').play();
            break;
        case "c":
            new Audio('sounds/s3.mp3').play();
            break;
        case "d":
            new Audio('sounds/s4.mp3').play();
              break;
        case "e":
            new Audio('sounds/s5.mp3').play();
            break;
        case "f":
            new Audio('sounds/s6.mp3').play();
            break;
        case "g":
            new Audio('sounds/s7.mp3').play();
            break;
        default:
            new Audio('sounds/s2.mp3').play();
    }
}


function visualEffect(active){
    var para1 = document.querySelector("." + active);
    para1.classList.add("pressed");
    setTimeout(function(){
        para1.classList.remove("pressed");
    },200);

}



// function anotherfunction (para_1, para_2){
//     var para_3 = {
//         eventType : "keypress",
//         key : "p"
//     }

//     if (para_3.eventType === para_1){
//         para_2(para_3);
//     }
// }

// document.addEventListener("keypress", function(e){
//     console.log(e);
// });