import Menu from './Menu/Menu';
import Form from './Form/Form';

export default class QuizGenerator {
  
  constructor(wrapper) {

    this.wrapper = wrapper;
    
    this.form = new Form();
    this.menu = new Menu();
    
    this.setup();

  }

  setup() {

    this.wrapper.append(this.menu.html);
    this.wrapper.append(this.form.html);

  }

}
