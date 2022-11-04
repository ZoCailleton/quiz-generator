import Menu from "../Menu/Menu";
import Form from "./Form";
import HTMLElement from "../Utils/HTMLElement";

export default class Controls {

  constructor() {
    
    this.menu = new Menu();
    this.form = new Form();
    
    this.html = new HTMLElement({
      type: 'div',
      className: 'controls'
    });

    this.add = new HTMLElement({
      type: 'button',
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
    this.menu.addItem();

  }

}
