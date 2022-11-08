import Form from "./Form";
import HTMLElement from "../Utils/HTMLElement";

export default class Controls {

  constructor() {
    
    this.form = new Form();
    
    this.html = new HTMLElement({
      tag: 'div',
      className: 'controls'
    });

    this.add = new HTMLElement({
      tag: 'button',
      className: 'add-question',
      value: 'Ajouter une question'
    });

    this.add.addEventListener('click', () => {
      this.addQuestion();
    })

    this.html.appendChild(this.add);
    
    return this.html;

  }

  addQuestion() {
    
    this.form.addQuestion();

  }

}
