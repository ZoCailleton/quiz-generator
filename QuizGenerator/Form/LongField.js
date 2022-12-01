import HTMLElement from '../Utils/HTMLElement';
import getUniqueID from '../Utils/getUniqueID';
import Form from './Form';

export default class LongField {

  constructor({ label, placeholder, classes }) {

    this.form = new Form()
    
    this.label = label || 'Nouveau champ long';
    this.placeholder = placeholder || 'Nouveau champ long...';
    this.classes = classes || ['box']
    
    this.id = getUniqueID();
    
    this.html = new HTMLElement({
      tag: 'fieldset',
      className: 'large-field',
      moreClasses: this.classes
    });

    this.label = new HTMLElement({
      tag: 'label',
      value: this.label,
      htmlFor: this.id
    });
    
    this.textarea = new HTMLElement({
      tag: 'textarea',
      id: this.id,
      placeholder: this.placeholder
    });

    if(this.form.debug) {
      this.textarea.value = getUniqueID();
    }

    this.html.append(this.label);
    this.html.append(this.textarea);
    
    return this.html;

  }

}
