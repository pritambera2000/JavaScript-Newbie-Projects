//====Game Variables & Constants Declearation====//
let inputDir = {x:0 , y:0};
const foodSound = new Audio('../Assets/food.mp3');
const overSound = new Audio('../Assets/gameOver.mp3');
const movementSound = new Audio('../Assets/movement1.mp3');
let score = 0;
const gameBoard = document.querySelector(".game_board");
const scoreBoard = document.getElementById("score_board");
scoreBoard.innerHTML = "YourScore :" + 0;
const hiScore = document.getElementById("hi_score");
let speed = 10;
let lastPaintTime = 0;
let snakeArr = [
    {x:17,y:9}
]
let food =  {x:15,y:9};





//====Game Functions Declearation====//
function main(cTime){
    window.requestAnimationFrame(main);
    // console.log(cTime);
    if((cTime - lastPaintTime)/1000 < 1/speed){
        return;
    }
    lastPaintTime = cTime;
    gameEngine();
}

function isCollide(snake){
    for(i=1 ; i<snakeArr.length ; i++){
        if(snake[i].x === snake[0].x && snake[i].y === snake[0].y){
        return true;
        }
    }
     // If you bump into the wall
     if(snake[0].x >= 18 || snake[0].x <=0 || snake[0].y >= 18 || snake[0].y <=0){
        return true;
    }
        
    return false;
}

function gameEngine(){
    //Obj 1 :- Updating The Snake Array
    if(isCollide(snakeArr)){
        overSound.play();
        inputDir = {x:0,y:0};
        alert('Game Over Press Any Key To Play Again!');
        snakeArr =  [{x:17,y:9}];
       scoreBoard.innerHTML = "YourScore :" + 0;
    }
    //If The Snake Eaten The Food Increment The Food & Regenarate Food
    if(snakeArr[0].y === food.y  && snakeArr[0].x === food.x){
        foodSound.play();
        score += 1
        if(score>hiscoreValue){
            hiscoreValue = score;
            localStorage.setItem("hiscore", JSON.stringify(hiscoreValue));
            hiScore.innerHTML = "HiScore : " + hiscoreValue;
        }
        scoreBoard.innerHTML = "Score :"+score;
        snakeArr.unshift({x:snakeArr[0].x + inputDir.x, y:snakeArr[0].y + inputDir.y})
        let a = 2;
        let b = 16;   // *** Its Generates Random Number Between a,b ***//
        food = {x:Math.round(a+(b-a)*Math.random()), y:Math.round(a+(b-a)*Math.random()) }
    } 

    //Moving The Snake
    for(let i = snakeArr.length -2 ; i>=0 ; i--){
        snakeArr[i+1] = {...snakeArr[i]}
    }

    snakeArr[0].x += inputDir.x;
    snakeArr[0].y += inputDir.y;


    //Obj 2 :- Display The Snake & Food
    //Obj 2.1 :- Display The Snake
    gameBoard.innerHTML = "";
    snakeArr.forEach((e,index)=>{
        snakeElement = document.createElement("div");
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        if(index === 0){
            snakeElement.classList.add("snake_head"); 
        }
        else{
            snakeElement.classList.add("snake_body"); 
        }
       
        gameBoard.appendChild(snakeElement);
    })
    //Display The Food
    foodElement = document.createElement("div");
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add("snake_food");
    gameBoard.appendChild(foodElement);

}









//====Game Logics====//
window.requestAnimationFrame(main);
window.addEventListener('keydown',(e)=>{
    inputDir = {x:0,y:1};//Game Starts Form Here
    movementSound.play();
    switch(e.key){
        case "ArrowUp":
           inputDir.x = 0;
           inputDir.y = -1;
           console.log('ArrowUp');
        break;

        case "ArrowDown":
            inputDir.x = 0;
            inputDir.y = 1;
        break;

        case "ArrowLeft":
            inputDir.x = -1;
            inputDir.y = 0;
        break;

        case "ArrowRight":
            inputDir.x = 1;
            inputDir.y = 0;
        break;
        default:
        break;
    }
})
//====Add HiScore To Local Storage====//
let hiscore = localStorage.getItem("hiscore");
if(hiscore === null){
    hiscoreValue = 0;
    localStorage.setItem("hiscore", JSON.stringify(hiscoreValue));
}
else{
    hiscoreValue = JSON.parse(hiscore);
    hiScore.innerHTML = "HiScore : " + hiscore;
}