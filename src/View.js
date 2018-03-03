
export default class View {
  constructor() {
    this.initialRender = true;
  }

  renderMenu({ cats, onCatClick }) {
    cats.forEach(cat => {
      const button = document.createElement('div');
      button.textContent = cat.name;
      button.addEventListener('click', () => onCatClick(cat));
      button.classList.add('buttonClass');
      button.id = cat.name;
      buttons.appendChild(button);
    });
  }

  renderCat({ cat }) {
    if (!cat) return;
    const newImage = document.createElement("img");
    newImage.src = cat.picture;
    newImage.id = 'image';
    images.replaceChild(newImage, image);
    text.innerHTML = `You clicked ${cat.name} ${cat.clickCount} times!`;
  }

  render({ activeCat, cats, onCatClick }) {
    if (this.initialRender) this.renderMenu({ cats, onCatClick });
    if (activeCat) this.renderCat({ cat: activeCat });
    this.initialRender = false;
  }
}
