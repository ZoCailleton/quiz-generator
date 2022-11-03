import Question from './Question';
import createHTMLElement from './Utils/createHTMLElement';

export default class QuizGenerator {
  
  constructor(wrapper) {

    this.wrapper = wrapper;

    this.questions = [];
    
    this.setup();

  }
  
  setup() {
    
    this.wrapper.append(createHTMLElement('div', 'a'));

  }

}
