import Cat from './Cat.js';
import View from './View.js';

export default class Controller {
  constructor() {
    this.handleCatClick = this.handleCatClick.bind(this);
    this.view = new View();
    this.cats = Cat.find();
    this.activeCat = null;
    this.render();
  }

  render() {
    this.view.render({
      activeCat: this.activeCat,
      cats: this.cats,
      onCatClick: this.handleCatClick,
    });
  }

  handleCatClick(cat) {
    this.activeCat = cat;
    this.activeCat.clickCount++;
    this.render();
  }
};
