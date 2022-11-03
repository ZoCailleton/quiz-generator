import createHTMLElement from './Quiz/Utils/createHTMLElement';
import getQuizCSS from './Quiz/Utils/getQuizCSS';
import getQuizScript from './Quiz/Utils/getQuizScript';
import getUniqId from './Quiz/Utils/getUniqId';

document.querySelector('.wrapper form').addEventListener('submit', e => e.preventDefault());

const sendNotification = (_text) => {
  const notification = createHTMLElement('div', _text, 'notification-wrapper');
  document.body.append(notification);
}

const codeWrapper = document.getElementById('code-wrapper');

const writeCode = (_code) => {

  codeWrapper.style.display = 'block';
  codeWrapper.querySelector('.code').textContent = _code;

}

const generateCode = () => {

  // On ajoute le CSS du quiz
  let quizCode = getQuizCSS();

  quizCode += `

    <div class="quiz--wrapper">
      <div class="quiz--inner">
        <p class="index">Question <span>1</span> / ${document.querySelectorAll('.question').length}</p>
        <div>

        `;

        let _iQuestion = 0;

        // Pour chaque question
        for(let question of document.querySelectorAll('.question')) {

          _iQuestion++;

          quizCode +=
          `
          <div class="quiz--question${_iQuestion === 1 ? ' active' : ''}">
            <p class="quiz--question-title">${question.querySelector('.intitule').value}</p>
            <ul class="quiz--answers">`

              // Pour chaque réponse
              let answerId = 0;

                for(let answer of question.querySelectorAll('.answers-wrapper fieldset')) {

                  let statusAnswer = answer.querySelector('.radios div:first-child input').checked;

                  answerId ++;

                  quizCode += `<li data-value="${statusAnswer}" class="quiz--answer">`;

                    quizCode += `${answer.querySelector('input[type="text"]').value} <img src="./assets/${statusAnswer ? 'success' : 'cancel' }.png" role="presentation">`;

                  quizCode += '</li>';

                }

              quizCode += `

            </ul>
          </div>

          `
        }

  quizCode += `
      </div>

      <div class="quiz--cta check">Vérifier</div>

      <nav class="quiz--controls">
        <div class="quiz--cta prev">Question précédente</div>
        <div class="quiz--cta next">Question suivante</div>
      </nav>

    </div>
  </div>
  `;

  // On ajoute le script gérant le quiz
  quizCode += getQuizScript();

  writeCode(quizCode);
  
}

const createHTMLElement = (_type, _value, _class) => {

  const elt = document.createElement(_type);
  if(_value != null) elt.innerHTML = _value;
  if(_class != null) elt.classList.add(_class);

  return elt;

}

const generatedIds = [];

const createInputElement = (_type, _placeholder, _name) => {

  const input = createHTMLElement('input');

  if(_placeholder != null) input.placeholder = _placeholder;
  if(_type != null && (_type === 'text' || _type === 'radio')) input.type = _type;
  if(_name != null) input.name = _name;

  return input;
  
}

const createRadioElement = (_name, _label, _class, _checked) => {

  const container = createHTMLElement('div');

  const id = getUniqId();

  const radio = createInputElement('radio', null, _name);
  radio.id = id;
  container.append(radio);

  if(_label != null) {
    const label = createHTMLElement('label', _label, 'radio-label');
    label.setAttribute('for', id);
    container.append(label);
  }

  if(_checked != null) {
    radio.checked = true;
  }
  
  return container;
  
}

const createRadiosElement = () => {

  // On génère un nom unique aléatoire qui sera commun aux deux inputs radio
  let uniqName = getUniqId();
  
  const wrapper = document.createElement('div');
  wrapper.classList.add('radios');

  wrapper.append(createRadioElement(uniqName, 'Vrai', 'true', true), createRadioElement(uniqName, 'Faux', 'false'));

  return wrapper;

}

const createFieldset = (_label, _placeholder, _isAnswer) => {
  
  const fieldset = createHTMLElement('fieldset');

  const label = createHTMLElement('label', _label);
  const input = createInputElement('text', _placeholder);
  let div = createHTMLElement('div');
  
  // On ajoute l'input
  div.append(label, input);
  fieldset.append(div);

  // On ajoute les boutons radios
  if(_isAnswer != null) {
    div = createHTMLElement('div', null, 'ctas');
    // On ajoute le radio "Vrai / Faux"
    div.append(createRadiosElement());
    // On ajoute le bouton "Supprimer"
    div.append(createHTMLElement('p', 'Supprimer', 'delete-answer'));
    fieldset.append(div);
  } else input.classList.add('intitule');

  return fieldset;

}

const getNumberOfQuestions = () => document.querySelectorAll('.question').length;

document.addEventListener('click',function(e) {

  // Clique sur les éléments générés dynamiquement

  //Suppression d'une question
  for(let elt of document.querySelectorAll('.question .delete-question')) {

    if(e.target && e.target == elt) {

      if(getNumberOfQuestions() > 1) {
        elt.parentNode.parentNode.remove();
        document.querySelector('nav li:last-child').remove();
      } else {
        elt.classList.add('nope');
        setTimeout(() => {
          elt.classList.remove('nope');
        }, 500);
        sendNotification('Le quiz doit contenir au moins une question !');
      }

    }
    
  }

  // Ajout d'une proposition
  for(let elt of document.querySelectorAll('.add-answer')) {

    if(e.target && e.target == elt) generateAnswer(elt.parentNode.parentNode.querySelector('.answers-wrapper'), 'Barack Obama');

  }
  
  // Suppression d'une proposition
  for(let elt of document.querySelectorAll('.delete-answer')) {

    if(e.target && e.target == elt) {
      if(elt.parentNode.parentNode.parentNode.querySelectorAll('fieldset').length > 2) {
        elt.parentNode.parentNode.remove();
      } else {
        elt.classList.add('nope');
        setTimeout(() => {
          elt.classList.remove('nope');
        }, 500);
        sendNotification('Minimum 2 propositions !');
      }
    }
    
  }

});

const generateAnswer = (_container, _placeholder) => {

  const numberFieldsets = _container.querySelectorAll('fieldset').length;

  if(numberFieldsets < 4) {
    _container.append(createFieldset(`Proposition ${numberFieldsets+1}`, _placeholder, true));
  } else {
    sendNotification('4 propositions maximum !');
  }

}

const generateQuestion = () => {

  //updateQuestionsList();
  
  const container = createHTMLElement('div', null, 'question');
  
  const header = createHTMLElement('header');
  // Gestion de l'indice de la question
  header.append(createHTMLElement('h2', `Question <span class="current">1</span> / <span class="total">1</span>`));
  // Bouton "Supprimer la question"
  header.append(createHTMLElement('button', 'Supprimer la question', 'delete-question'));
  container.append(header);

  // Intitulé de la question
  container.append(createFieldset('Intitulé de la question', 'Qui est le président de la République française ?'));
  
  // Suggestions
  const answersWrapper = createHTMLElement('div', null, 'answers-wrapper');
  const examplesPlaceholders = ['Emmanuel Macron', 'François Hollande'];
  examplesPlaceholders.map((_placeholder) => {
    generateAnswer(answersWrapper, _placeholder);
  });
  container.append(answersWrapper);

  // CTAs
  const ctaWrapper = createHTMLElement('div', null, 'cta-wrapper');
  const addAnswerElement = createHTMLElement('button', 'Ajouter une proposition', 'add-answer');
  ctaWrapper.append(addAnswerElement);
  container.append(ctaWrapper);
  
  // Ajout de la question dans l'HTML
  document.querySelector('.questions-wrapper').append(container);

  // Ajout d'une question dans la liste latérale
  document.getElementById('nav-questions').append(createHTMLElement('li', `Question ${document.querySelectorAll('nav li').length + 1}`));
  
}

generateQuestion();

document.getElementById('addQuestion').addEventListener('click', generateQuestion);

const inputsAreFilled = () => true;

// Génération du code du quiz
document.getElementById('generate-code').addEventListener('click', () => {
  inputsAreFilled() ? generateCode() : sendNotification('Toutes les questions doivent contenir un titre !');
});

const copyText = (text) => {
  if(!text) return
  let input = createHTMLElement('input');
  input.setAttribute('value', text);
  document.body.appendChild(input);
  input.select();
  document.execCommand('copy');
  input.parentNode.removeChild(input);
}

let copyButton = codeWrapper.querySelector('.copy');

copyButton.addEventListener('click', function () {
  copyText(codeWrapper.querySelector('.code').innerText)
});
