var view = {
  getCatNamesLength : function() {
    return window.octopus.getCatNames().length;
  },
  render: function() {
    // Let's loop over the numbers in our array
    for (let i = 0; i < this.getCatNamesLength(); i++) {
        var button = document.createElement('div');
        button.textContent = window.octopus.getCatNames()[i];
        button.addEventListener("click", function(){window.view.showImage([i])});

        button.classList.add("buttonClass");
        button.setAttribute("id", window.octopus.getCatNames()[i]);


        document.getElementById('buttons').appendChild(button);
    };
  },
  showImage: function(number) {
    let image = document.getElementById('image');
    let newImage = document.createElement("img");
    newImage.src = window.octopus.getPictures()[number];
    console.log(images);
    console.log(document.getElementById('images'));
    document.getElementById('images').replaceChild(newImage, image);
  }
};

view.render();
