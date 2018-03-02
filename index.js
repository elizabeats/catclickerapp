var animals = ['Kitten','Cat','Dog','Mouse','Rat'];
var urls = ['https://d11kavc4axrfgm.cloudfront.net/pet_care/wp-content/uploads/2015/09/04194922/kitten-walking-150904.jpg',
'http://www.catster.com/wp-content/uploads/2017/06/small-kitten-meowing.jpg',
'https://www.cesarsway.com/sites/newcesarsway/files/styles/large_article_preview/public/Common-dog-behaviors-explained.jpg?itok=FSzwbBoi',
'http://cdn.iflscience.com/images/8c26cf21-8c0f-5ce8-a12c-fb8ae868a98b/default-1464365403-903-what-happens-when-you-put-a-mouse-in-mountain-dew-for-30-days.jpg',
'http://deweypest.com/wp-content/uploads/2016/03/rat-300x226.jpg'];
// Let's loop over the numbers in our array
for (var i = 0; i < animals.length; i++) {

    // We're creating a DOM element for the number
    var elem = document.createElement('div');
    elem.textContent = animals[i];

    // ... and when we click, alert the value of `num`
    elem.addEventListener('click', (function(index){
      return function() {
        var column = document.getElementById('column');
        column.innerHTML = "<img style='max-height:150px' src=" + urls[index] + "></img>"
        + "<h1>"+animals[index]+"</h1>"
        +"<p>"+i+"times clicked</p>";
      };
    })(i));
    document.getElementById('list').appendChild(elem);
};
