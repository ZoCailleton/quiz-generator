import HTMLElement from '../Utils/HTMLElement';
import UniqueId from '../Utils/UniqueID';

export default class Field {

  constructor({type, title, placeholder}) {
    
    this.type = type || 'text';
    this.title = title || 'Champ';
    this.placeholder = placeholder || 'Nouveau champ';
    
    this.name = new UniqueId().id;
    
    this.html = new HTMLElement({
      tag: 'fieldset'
    });

    this.label = new HTMLElement({
      tag: 'label',
      value: this.title,
      htmlFor: this.name
    });
    
    this.input = new HTMLElement({
      tag: 'input'
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
