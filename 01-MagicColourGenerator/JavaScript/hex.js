const hexNumbers = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F", "G"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', ()=>{
    console.log( getRandomNumber());
    let hexcolor = "#";
    for(let i =0;i<6;i++){
        hexcolor += hexNumbers[ getRandomNumber()];
    };
   console.log(hexcolor);
    document.body.style.backgroundColor = hexcolor;
    color.textContent=hexcolor;
});

function getRandomNumber() {
    return Math.floor(Math.random() * hexNumbers.length);
};


