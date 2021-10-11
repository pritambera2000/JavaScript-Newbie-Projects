const imgs = document.getElementById("images");

const img  = document.querySelectorAll("#images img");
const btn = document.querySelectorAll("img")


 let i =0
function slide(){
   i++
    if ( i > img.length -1) {
        i = 0
    }
        imgs.style.transform = `translateX(${(-i * 400)}px)`
    
    

    // setTimeout(slide, 1000);
}



// slide();
// console.log(pb)
setInterval(slide, 3000);

// imgs.addEventListener('click',()=>{
//     let i=0;
//     i++
//     // if(i>imgs.length -1){
//     //     i=0
//     // }
//     for (let i = 0; i > imgs.length -1; i++) {
//     //  const element = array[i];
//     if(i>imgs.length -1){
//         i=0
//     }
//        imgs.style.transform = `translateX(${(-i*400)}px)`
//     }
  
// })