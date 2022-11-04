export default class UniqueID {

  constructor() {
    
    this.id = Math.random().toString(16).slice(2);

    return this.id;

  }

}
