import HTMLElement from "../Utils/HTMLElement";

export default class Item {

  constructor({index, title}) {

    this.index = index;
    this.title = title || '';

    this.html = new HTMLElement({
      type: 'div',
      value: `Question ${this.index}`,
      className: 'item'
    });

  }

  setTitle(title) {

    this.title = title;
    this.html.value =  `Question ${this.index} : ${this.title}`;

    console.log(this);
    
  }

}
