import HTMLElement from '../Utils/HTMLElement';
import getUniqueID from '../Utils/getUniqueID';
import Form from './Form';
import getRandomImageURL from '../Utils/getRandomImageURL';

export default class Field {

  constructor({ type, title, placeholder, name, icon, className, category }) {

    this.form = new Form()
    
    this.type = type || 'text';
    this.title = title || 'Champ';
    this.placeholder = placeholder || 'Nouveau champ...';
    this.name = name || getUniqueID();
    this.icon = icon;
    this.className = className;
    this.category = category || 'text';
    
    this.id = getUniqueID();
    
    this.html = new HTMLElement({
      tag: 'fieldset',
    });

    if(className != undefined)
      this.html.classList.add(this.className);

    if(this.icon != undefined)
      this.title = `<img src="./assets/icons/${this.icon}" role="presentation">` + this.title;

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
      name: this.name
    });

    if(this.form.debug) {
      if(this.category === 'text') this.input.value = getUniqueID();
      if(this.category === 'photo') this.input.value = getRandomImageURL();
      if(this.category === 'video') this.input.value = 'https://youtu.be/F6ihqTMbfvY';
    }

    this.html.append(this.label);
    this.html.append(this.input);
    
    return this.html;

  }

}
