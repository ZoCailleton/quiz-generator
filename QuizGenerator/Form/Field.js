import HTMLElement from '../Utils/HTMLElement';
import UniqueId from '../Utils/UniqueID';

export default class Field {

  constructor({type, title, placeholder}) {
    
    this.type = type || 'text';
    this.title = title || 'Champ';
    this.placeholder = placeholder || 'Nouveau champ';
    
    this.name = new UniqueId().id;
    
    this.html = new HTMLElement({
      type: 'fieldset'
    });

    this.label = new HTMLElement({
      type: 'label',
      value: this.title
    });

    this.label.setAttribute('for', this.name);
    
    this.input = new HTMLElement({
      type: 'input'
    });
    
    this.create();
    
    return this.html;

  }

  create() {
    
    this.input.type = this.type;
    this.input.id = this.name;
    this.input.placeholder = this.placeholder;

    this.html.append(this.label);
    this.html.append(this.input);

  }

}
