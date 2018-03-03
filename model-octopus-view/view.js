import octopus from './octopus.js';

var view = {
  render: function() {
    // Let's loop over the numbers in our array
    for (let i = 0; i < octopus.getCatNamesLength(); i++) {
        var button = document.createElement('div');
        button.textContent = octopus.getCatNames()[i];
        button.addEventListener("click", function(){view.showImage([i])});
        button.addEventListener("click", function(){view.updateClickText([i])});

        button.classList.add("buttonClass");
        button.setAttribute("id", octopus.getCatNames()[i]);

        buttons.appendChild(button);
    };
  },
  showImage: function(animalIndex) {
    let newImage = document.createElement("img");
    newImage.src = octopus.getPictures()[animalIndex];
    newImage.id = 'image';
    images.replaceChild(newImage, image);
  },

  updateClickText : function(animalIndex) {
    text.innerHTML = 'You clicked '
    + octopus.getCatName(animalIndex) + ' ' + octopus.updateAndReturnClickCount(animalIndex) + ' times!';
  },

};

view.render();
