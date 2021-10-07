const colors = ["red", "blue", "green" , "cyan" , "gray" , "skyblue"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", ()=>{
    const number = getRandomNumber();
    document.body.style.backgroundColor= colors[number];
    color.textContent = colors[number];
});

const getRandomNumber = () => {
   return Math.floor(Math.random()* colors.length)
};