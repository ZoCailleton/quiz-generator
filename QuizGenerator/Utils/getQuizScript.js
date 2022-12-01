const getQuizScript = id => `
<script>
  (function(){
    
    let currentQuestion = 1;
    let score = 0;

    const reset = (collection, className) => {
      for(let elt of document.querySelectorAll(collection)) {
        elt.classList.remove(className)
      }
    }

    let questions = [];

    for(let question of document.querySelectorAll('.question-${id}')) {
      questions.push(false)
    }

    const updateQuestionsVisibility = () => {
      reset('article.question-${id}', 'active')
      document.querySelector('article.question-${id}:nth-child('+currentQuestion+')').classList.add('active');
      for(let question of document.querySelectorAll('.question-${id}')) {
        question.querySelector('.score span').innerHTML = score;
      }
    }

    const prev = document.querySelector('.control-${id}.prev-${id}');
    const next = document.querySelector('.control-${id}.next-${id}');

    prev?.addEventListener('click', () => {
      if(currentQuestion > 1) {
        currentQuestion --;
        updateQuestionsVisibility();
        prev.classList.remove('disabled-${id}');
        next.classList.remove('disabled-${id}');
      }
      if(currentQuestion === 1) {
        prev.classList.add('disabled-${id}');
      }
    });

    next?.addEventListener('click', () => {
      if(currentQuestion < document.querySelectorAll('.question-${id}').length) {
        currentQuestion ++;
        updateQuestionsVisibility();
        prev.classList.remove('disabled-${id}');
        next.classList.remove('disabled-${id}');
      }
      if(currentQuestion === document.querySelectorAll('.question-${id}').length) {
        next.classList.add('disabled-${id}');
      }
    });

    for(let question of document.querySelectorAll('.question-${id}')) {
      let index = question.dataset.index;
      const info = question.querySelector('.justification-${id}');
      for(let answer of question.querySelectorAll('.choice-${id}')) {
        answer.addEventListener('click', () => {
          if(!questions[index-1]) {
            answer.classList.add('reveal-${id}');
            questions[index-1] = true;
            if(answer.dataset.state === 'true') {
              score ++;
              question.querySelector('.justification-${id} p span.true').classList.add('active');
              question.querySelector('.justification-${id} p span.false').classList.remove('active');
              updateQuestionsVisibility();
            }
            for(let elt of question.querySelectorAll('.choice-${id}')) {
              if(elt.dataset.state === 'true') {
                elt.classList.add('reveal-${id}');
              }
            }
            if(info != undefined) {
              info.classList.add('active-${id}');
            }
          }
        });
      }
    }

  })();
</script>
`;

export default getQuizScript;
