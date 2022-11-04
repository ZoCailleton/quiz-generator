import Form from "../Form/Form";
import HTMLElement from "../Utils/HTMLElement";

let instance = null;

export default class Menu {
  
  constructor() {
  
    if(instance) {
      return instance;
    }
  
    instance = this;

    this.form = new Form();

    this.html = new HTMLElement({
      type: 'div',
      className: 'menu-wrapper'
    });

    this.setupItems();
    
  }

  setupItems() {

    console.log('From setup', this.form.questions);
    
  }

  updateItems() {

    console.log('From update', this.form.questions);
    
  }

}
