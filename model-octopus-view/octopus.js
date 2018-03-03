var octopus = {
  getCatNames : function(){
    var cats = [];
    for (let i = 0; i < model.cats.length; i++){
      cats.push(model.cats[i].name);
    }
    return cats;
  },

  getPictures : function(){
    var pictures = [];
    for (let i=0; i < model.cats.length; i++){
      pictures.push(model.cats[i].picture);
    }
    return pictures;
  },

  getCatNamesLength : function() {
    return window.octopus.getCatNames().length;
  },

  getCatName : function(index) {
    return window.model.cats[index].name;
  },

  updateAndReturnClickCount : function(index) {
    var clickCount = window.model.cats[index].clickCount++;
    return clickCount;
  },
};
