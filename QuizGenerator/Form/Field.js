import HTMLElement from '../Utils/HTMLElement';
import UniqueId from '../Utils/UniqueID';

export default class Field {

  constructor({type, title, placeholder, name}) {
    
    this.type = type || 'text';
    this.title = title || 'Champ';
    this.placeholder = placeholder || 'Nouveau champ...';
    this.name = name || new UniqueId().id;
    
    this.id = new UniqueId().id;
    
    this.html = new HTMLElement({
      tag: 'fieldset'
    });

    this.label = new HTMLElement({
      tag: 'label',
      value: this.title,
      htmlFor: this.id
    });
    
    this.input = new HTMLElement({
      tag: 'input',
      id: this.id,
      type: this.type,
      placeholder: this.placeholder,
      name: name
    });

    this.html.append(this.label);
    this.html.append(this.input);
    
    return this.html;

  }

}
