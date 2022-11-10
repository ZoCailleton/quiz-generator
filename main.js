import Quiz from './Quiz/Quiz';
import QuizGenerator from './QuizGenerator/QuizGenerator';

import './style.scss';

/**
 * TODO :
 * - Déplacer champ titre
 * - Déplacer bouton "Nouvelle question"
 * - CSS : Harmoniser box properties and spaces
 */

new QuizGenerator(document.getElementById('quiz-form'));

new Quiz(document.getElementById('quiz-demo'));
