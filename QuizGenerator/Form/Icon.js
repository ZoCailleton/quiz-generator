import HTMLElement from "../Utils/HTMLElement"

export default class Icon {

  constructor({src, alt}) {

    this.src = `./assets/icons/${src}`;

    this.html = new HTMLElement({
      tag: 'div',
      className: 'icon'
    });

    this.html.append(new HTMLElement({
      tag: img,
      src: this.src,
      alt
    }));

    return this.html;
    
  }

}
