import QuizGenerator from './QuizGenerator/QuizGenerator';

import './style.scss';

/**
 * TODO :
 * - Déplacer champ titre
 * - Déplacer bouton "Nouvelle question"
 * - CSS : Harmoniser box properties and spaces
 */

new QuizGenerator(document.getElementById('quiz-form'));

document.querySelector('.controls .control').addEventListener('click', () => {
  alert('a')
})
