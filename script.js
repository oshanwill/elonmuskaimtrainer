document.addEventListener("DOMContentLoaded", function() {
const box = document.getElementById("item");
const score = document.getElementById("number") 
const clickSound = new Audio("Mickey Mouse Clubhouse_ Theme Song (Lyrics).mp3")


box.addEventListener('click', function() {
    clickSound.currentTim = 0
    clickSound.play();
    

    const maxX = window.innerWidth - box.offsetWidth;
    const maxY = window.innerHeight - box.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY)

    score.textContent = Number(score.textContent) + 1;

    box.style.left = `${randomX}px`;
    box.style.top = `${randomY}px`;

    
    });

});




