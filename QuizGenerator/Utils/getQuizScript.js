const getQuizScript = id => `
<script>
  (function(){
    
    let currentQuestion = 1;

    const reset = (collection, className) => {
      for(let elt of document.querySelectorAll(collection)) {
        elt.classList.remove(className)
      }
    }

    const updateQuestionsVisibility = () => {
      reset('article.question-${id}', 'active')
      document.querySelector('article.question-${id}:nth-child('+currentQuestion+')').classList.add('active');
    }

    const prev = document.querySelector('.control-${id}.prev');

    prev.addEventListener('click', () => {
      if(currentQuestion > 1) {
        currentQuestion --;
        updateQuestionsVisibility();
        prev.classList.remove('disabled-${id}');
      }
      if(currentQuestion === 1) prev.classList.add('disabled-${id}');
    });

    const next = document.querySelector('.control-${id}.next');

    document.querySelector('.control-${id}.next').addEventListener('click', () => {
      if(currentQuestion < document.querySelectorAll('.question-${id}').length) {
        currentQuestion ++;
        updateQuestionsVisibility();
        next.classList.remove('disabled-${id}');
      }
      if(currentQuestion === document.querySelectorAll('.question-${id}').length) next.classList.add('disabled-${id}');
    });

    for(let question of document.querySelectorAll('.question-${id}')) {
      const info = question.querySelector('.justification-${id}');
      for(let answer of question.querySelectorAll('.choice-${id}')) {
        answer.addEventListener('click', () => {
          for(let elt of question.querySelectorAll('.choice-${id}')) {
            elt.classList.add('reveal-${id}');
          }
          if(info != undefined) {
            info.classList.add('active');
          }
        });
      }
    }

  })();
</script>
`;

export default getQuizScript;
