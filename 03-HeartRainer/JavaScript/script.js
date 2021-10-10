
function heartRainerRed(){
    const redHeart = document.createElement("div");
    redHeart.classList.add("redHeart");

    redHeart.innerText = "💖";
    document.body.appendChild(redHeart);
    redHeart.style.left = Math.random() * 100 + "vw";
    redHeart.style.animationDuration = Math.random() * 1+1+"1";
   setTimeout(()=>{
    redHeart.remove();
      },10000);
};
//  console.log(heartRainer());
//   setInterval(heartRainer , 1);

const btnRed = document.getElementById("btn-red");
btnRed.addEventListener('click', () => { setInterval(heartRainerRed, 2)});

function heartRainerBlue(){
    const heart = document.createElement("div");
    heart.classList.add("heart");

    heart.innerText = " 💙 ";
    document.body.appendChild(heart);
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 1+1+"1";
   setTimeout(()=>{
    heart.remove();
      },10000);
};

const btnBlue = document.getElementById("btn-blue");
// console.log(btnBlue)
btnBlue.addEventListener('click', () => { setInterval(heartRainerBlue, 2)});

function heartRainerGreen(){
    const greenHeart = document.createElement("div");
    greenHeart.classList.add("greenHeart");

    greenHeart.innerText = "💚";
    document.body.appendChild(greenHeart);
    greenHeart.style.left = Math.random() * 100 + "vw";
    greenHeart.style.animationDuration = Math.random() * 1+1+"1";
   setTimeout(()=>{
    greenHeart.remove();
      },10000);
};

const btnGreen = document.getElementById("btn-green");
// console.log(btnBlue)
btnGreen.addEventListener('click', () => { setInterval(heartRainerGreen, 2)});
const reloadBtn = document.getElementById("reload-button")
reloadBtn.addEventListener('click',()=>{
    location.reload();
})



