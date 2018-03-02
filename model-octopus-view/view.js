var view = {
  render: function() {
    // Let's loop over the numbers in our array
    for (let i = 0; i < window.octopus.getCatNamesLength(); i++) {
        var button = document.createElement('div');
        button.textContent = window.octopus.getCatNames()[i];
        button.addEventListener("click", function(){window.view.showImage([i])});

        button.classList.add("buttonClass");
        button.setAttribute("id", window.octopus.getCatNames()[i]);

        buttons.appendChild(button);
    };
  },
  showImage: function(number) {
    let newImage = document.createElement("img");
    newImage.src = window.octopus.getPictures()[number];
    newImage.id = 'image';
    images.replaceChild(newImage, image);
  }
};

view.render();
