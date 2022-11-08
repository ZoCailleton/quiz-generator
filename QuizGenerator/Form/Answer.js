import Field from "./Field";
import Choices from "./Choices";
import HTMLElement from "../Utils/HTMLElement";
import Form from "./Form";

export default class Answer {

  constructor({answer, placeholder, state, index, type}) {

    this.form = new Form();

    this.answer = answer;
    this.placeholder = placeholder || 'Réponse...';
    this.state = state;
    this.index = index;
    this.type = type || 'text';

    this.html = new HTMLElement({
      tag: 'div',
      className: 'answer-wrapper',
      moreClasses: ['box']
    });

    if(this.type === 'text') this.setupField();
    if(this.type === 'photo') this.setupFieldPhoto();
    if(this.type === 'video') this.setupFieldVideo();

    this.setupChoices();
    this.setupControls();

  }

  setupField() {

    this.html.append(new Field({
      tag: 'text',
      title: `Réponse <span class="index">${this.index}</span>`,
      placeholder: this.placeholder,
      icon: 'text.png'
    }));

  }

  setupFieldPhoto() {

    let fields = new HTMLElement({
      tag: 'div',
      className: 'fields'
    });

    fields.append(new Field({
      tag: 'text',
      title: `Réponse <span class="index">${this.index}</span>`,
      placeholder: this.placeholder,
      icon: 'photo.png'
    }));

    fields.append(new Field({
      tag: 'text',
      title: `URL de la photo`,
      placeholder: 'https://images.pexels.com/photos/11757303/pexels-photo-11757303.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      icon: 'link.png'
    }));

    this.html.append(fields);

  }

  setupFieldVideo() {

    let fields = new HTMLElement({
      tag: 'div',
      className: 'fields'
    });

    fields.append(new Field({
      tag: 'text',
      title: `Réponse <span class="index">${this.index}</span>`,
      placeholder: this.placeholder,
      icon: 'film.png'
    }));

    fields.append(new Field({
      tag: 'text',
      title: `URL de la vidéo`,
      placeholder: 'https://www.pexels.com/fr-fr/video/fleurs-verre-pierres-fumer-7815884/',
      icon: 'link.png'
    }));

    this.html.append(fields);

  }

  setupChoices() {

    let choices = new Choices({choices: [
      {
        state: true,
        text: 'Vrai'
      },
      {
        state: false,
        text: 'Faux'
      }
    ]});
    
    this.html.append(choices);

  }

  setupControls() {

    let controls = new HTMLElement({
      tag: 'div',
      className: 'controls'
    });

    let replaceElt = new HTMLElement({
      tag: 'img',
      className: 'replace',
      src: './assets/icons/menu.png'
    });

    let deleteElt = new HTMLElement({
      tag: 'img',
      className: 'remove',
      src: './assets/icons/close.png'
    });

    deleteElt.addEventListener('click', () => {
      this.delete();
    });
    
    controls.append(replaceElt);
    controls.append(deleteElt);
    this.html.append(controls);

  }

  updateQuestion(title) {

    this.title = title;
    
  }
  
  delete() {
    
    this.html.remove();
    this.form.updateAll();

  }

}
