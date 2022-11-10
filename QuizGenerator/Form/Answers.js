import HTMLElement from "../Utils/HTMLElement";
import Answer from "./Answer";
import Form from "./Form";

export default class Answers {

  constructor() {

    this.form = new Form();

    this.html = new HTMLElement({
      tag: 'div',
      className: 'answers'
    });
    
    this.wrapperAnswersText = this.setupAnswers('text', 'active');
    this.wrapperAnswersPhoto = this.setupAnswers('photo');
    this.wrapperAnswersVideo = this.setupAnswers('video');

    this.html.append(this.wrapperAnswersText);
    this.html.append(this.wrapperAnswersPhoto);
    this.html.append(this.wrapperAnswersVideo);

    return this.html;

  }

  add({placeholder, type, state=false}) {

    let answer = new Answer({index: 1, placeholder, state, type});

    if(type === 'text') this.wrapperAnswersText.querySelector('.answers-wrapper').append(answer.html);
    if(type === 'photo') this.wrapperAnswersPhoto.querySelector('.answers-wrapper').append(answer.html);
    if(type === 'video') this.wrapperAnswersVideo.querySelector('.answers-wrapper').append(answer.html);

    this.form.updateAll();

  }

  setupAnswers(type, active) {

    let wrapper = new HTMLElement({
      tag: 'div',
      className: 'grid',
      moreClasses: [type]
    });

    if(active) {
      wrapper.classList.add('active');
    }

    let answers = new HTMLElement({
      tag: 'div',
      className: 'answers-wrapper'
    })

    answers.append(new Answer({index: 1, placeholder: 'Emmanuel Macron...', type, state: true}).html);
    answers.append(new Answer({index: 2, placeholder: 'François Hollande...', type}).html);
    answers.append(new Answer({index: 3, placeholder: 'Nicolas Sarkozy...', type}).html);

    let add = new HTMLElement({
      tag: 'button',
      value: 'Ajouter une réponse',
      className: 'add-response',
      moreClasses: ['box', type],
      dataType: type
    });

    add.addEventListener('click', () => {
      this.add({placeholder: 'Nouvelle réponse...', type: add.dataset.type});
    });

    wrapper.append(answers);
    wrapper.append(add);
    
    return wrapper;

  }

}
