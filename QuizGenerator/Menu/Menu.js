import HTMLElement from "../Utils/HTMLElement";
import Item from "./Item";

let instance = null;

export default class Menu {
  
  constructor() {

    if(instance) {
      return instance;
    }
    
    instance = this;
    
    this.items = [];

    this.html = new HTMLElement({
      type: 'div',
      className: 'menu-wrapper'
    });

    this.addItem();
    this.addItem();
    
  }

  addItem() {

    let item = new Item({
      index: this.items.length + 1
    });

    this.items.push(item);

    this.html.append(item.html);

  }

  updateItemTitle(index, title) {

    this.items[index].setTitle(title);

  }

}
