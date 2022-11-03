import createHTMLElement from "./Utils/createHTMLElement";

export default class Question {

  constructor(title, index) {

    this.title = title;
    this.index = index;
    
    this.html = '<div>Question'+this.index+'</div>';

    this.answers = [];

    this.setup();

  }

  setup() {
    
  }

  getHTML() {
    return this.html;
  }
  
  getAnswers() {
    return this.answers;
  }
  
}
