export default class QuizScript {

  constructor() {
    
   return '<script>const reset=(e,t)=>{for(let i of document.querySelectorAll(e))i.classList.remove(t)};for(let question of document.querySelectorAll(".quiz--question"))for(let answer of question.querySelectorAll(".quiz--answer"))answer.addEventListener("click",function(){reset(".quiz--answer","active"),this.classList.add("active")});let INDEX=1;document.querySelector(".quiz--cta.check").addEventListener("click",()=>{let e=document.querySelector(`.quiz--question:nth-child(${INDEX}) .quiz--answer.active`);reset(`.quiz--question:nth-child(${INDEX}) .quiz--answer`,"false"),reset(`.quiz--question:nth-child(${INDEX}) .quiz--answer`,"true"),"true"===e.dataset.value?e.classList.add("true"):e.classList.add("false")});const updateQuestion=()=>{document.querySelector(".index span").textContent=INDEX,reset(".quiz--question","active"),document.querySelector(`.quiz--question:nth-child(${INDEX})`).classList.add("active")};document.querySelector(".quiz--cta.prev").addEventListener("click",()=>{INDEX>1&&(INDEX--,updateQuestion())}),document.querySelector(".quiz--cta.next").addEventListener("click",()=>{INDEX<document.querySelectorAll(".quiz--question").length&&(INDEX++,updateQuestion())});</script>';
   
  }
  
}
