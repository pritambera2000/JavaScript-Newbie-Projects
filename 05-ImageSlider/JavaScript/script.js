const imgs = document.getElementById("images");

const img  = document.querySelectorAll("#images img");
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