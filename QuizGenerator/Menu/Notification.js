import HTMLElement from "../Utils/HTMLElement";

export default class Notification {

  constructor(text) {

    this.text = text;
    this.html = new HTMLElement({
      type: 'div',
      className: 'notification',
      value: this.text
    });

    return this.html;

  }

}
