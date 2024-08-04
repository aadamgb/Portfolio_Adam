document.querySelector('body').addEventListener('mousemove',eyeball);

function eyeball(){
    const eye = document.querySelectorAll('.eye');
    eye.forEach(function(eye){
        let x = (eye.getBoundingClientRect().left + eye.clientWidth / 2);
        let y = (eye.getBoundingClientRect().top + eye.clientHeight / 2);

        let radian = Math.atan2(event.pageX - x, event.pageY - y);
        let rotation = (radian * (180 / Math.PI) * -1) + 270;

        eye.style.transform = "rotate("+rotation+"deg)"
    });
}

let isTranslated = false;
let cont = 0;
document.getElementById("prof-pic").addEventListener("click", function() {
const miniAdam = document.querySelector(".profile__animation-draw");
const textDisplay = document.querySelector(".text-container-anim");
const eyebrow = document.querySelectorAll('.eyebrow');
const angleDisplay = document.getElementById("angleDisplay");

    if (!isTranslated) {
        cont +=1;
        var angle = Math.random() * Math.PI * 2;
        var x = Math.round(Math.cos(angle) * 950);
        var y = Math.round(-Math.sin(angle) * 950);
        var rotate = Math.round(90-angle * (180 / Math.PI));
        // angleDisplay.textContent = `Angle: ${rotate}°`;

        if(cont == 1){
            angleDisplay.textContent = `Hi!`;
            angle = 0.15 * Math.PI * 2;
            x = Math.round(Math.cos(angle) * 950);
            y = Math.round(-Math.sin(angle) * 950);
            rotate = Math.round(90-angle * (180 / Math.PI));

        }else if (cont == 2){
            angleDisplay.textContent = `Check out my web page!`;
            textDisplay.style.fontSize = "400%";
            textDisplay.style.transform = "translate(-115%,-500%)";
            angle = 0.45 * Math.PI * 2;
            x = Math.round(Math.cos(angle) * 950);
            y = Math.round(-Math.sin(angle) * 950);
            rotate = Math.round(90-angle * (180 / Math.PI));
        }else if (cont == 3){
             eyebrow.forEach(function(eyebrow,index){
                var eyebrowrot = (index === 0) ? -20 : +20
                eyebrow.style.transform = "rotate("+eyebrowrot+"deg)";
            });
            // eyebrow.style.transform = "rotate(20deg)"
            textDisplay.style.display = "none";
        }else if (cont == 5){
        eyebrow.forEach(function(eyebrow,index){
           var eyebrowrot = (index === 0) ? 20 : -20
           eyebrow.style.transform = "rotate("+eyebrowrot+"deg)";
       });
       // eyebrow.style.transform = "rotate(20deg)"
       textDisplay.style.display = "none";
        } else{
            eyebrow.forEach(function(eyebrow){
                eyebrow.style.transform = "rotate(0deg)";
            });
         
         }
        
        setTimeout(function() {
            textDisplay.style.transition = "all 0.5s ease-out";
            textDisplay.style.opacity = "1";
          }, 700);
        // textDisplay.style.display = "block";
        miniAdam.style.transform = "translate("+x+"px,"+y+"px) rotate("+rotate+"deg)";
      } else {
        miniAdam.style.transform = "translate(0, 0)";
        // textDisplay.style.display = "none";
        textDisplay.style.opacity = "0";
        textDisplay.style.transition = "0s"
      }

    isTranslated = !isTranslated;
});
