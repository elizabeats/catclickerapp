const cats = [];

export default class Cat {
  static find() {
    return cats;
  }

  static insert(c) {
    cats.push(new Cat(c));
  }

  constructor({ name, picture }) {
    this.name = name;
    this.picture = picture;
    this.clickCount = 0;
    this.preloadImage(picture);
  }

  preloadImage(url) {
    const image = new Image();
    image.src = url;
    this._image = image;
  }
}
