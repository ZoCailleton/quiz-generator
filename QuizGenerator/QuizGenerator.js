import Demo from './Demo/Demo';
import Form from './Form/Form';

export default class QuizGenerator {
  
  constructor(wrapper) {

    this.wrapper = wrapper;
    
    this.form = new Form();
    this.demo = new Demo();
    
    this.setup();

  }

  setup() {

    this.wrapper.append(this.form.html);

  }

}
