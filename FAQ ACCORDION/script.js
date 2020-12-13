
let questions = document.querySelectorAll('.faq-text');
for (let i = 0; i < questions.length; i++){
    let self = questions[i];

   self.addEventListener('click', ()=>{
    if(self.classList.contains('active')){
        self.classList.remove('active')
    
    } else {
        self.classList.add('active')
    }
    })
}