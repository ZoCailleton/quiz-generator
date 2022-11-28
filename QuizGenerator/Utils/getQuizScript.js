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

    document.querySelector('.control-${id}.prev').addEventListener('click', () => {
      if(currentQuestion > 1) {
        currentQuestion --
        updateQuestionsVisibility()
      }
    });

    document.querySelector('.control-${id}.next').addEventListener('click', () => {
      if(currentQuestion < document.querySelectorAll('.question-${id}').length) {
        currentQuestion ++
        updateQuestionsVisibility()
      }
    });

    const info = document.querySelector('.justification-${id}');

    for(let answer of document.querySelectorAll('choice-${id}')) {
      info.classList.add('active');
    }

  })();
</script>
`;

export default getQuizScript;
