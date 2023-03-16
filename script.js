const correctAnswers = ['B','B','B','B'];
const form = document.querySelector('.quiz-form');
const result_container = document.querySelector('.result')
const result = result_container.querySelector('span');


form.addEventListener('submit',(e)=>{
    e.preventDefault()
    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value]
    //check aswers

    userAnswers.forEach((answer, index)=>{
        if(answer === correctAnswers[index]){
         score += 25;
        }
    })
         window.scrollTo(0,0);
         result_container.classList.remove('d-none');
        
         let output = 0;
         const timer = setInterval(()=>{
            result.textContent = `${output}%`
            if(output===score){
                clearInterval(timer);
            }
            else{
               output++
            }
         },10)

         
})
