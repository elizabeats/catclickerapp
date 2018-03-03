import model from './model.js';

export default {
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
    return this.getCatNames().length;
  },

  getCatName : function(index) {
    return model.cats[index].name;
  },

  updateAndReturnClickCount : function(index) {
    var clickCount = model.cats[index].clickCount++;
    return clickCount;
  },
};
