const btns = document.querySelectorAll(".question-btn");
// const msg = document.querySelectorAll("h4");

btns.forEach(function(btn) {
    btn.addEventListener('click',(e)=>{
        const question = e.currentTarget.parentElement.parentElement;
        question.classList.toggle("show");
        
    })
})