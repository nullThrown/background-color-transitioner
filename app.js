

var mainBtn = document.getElementById('mainBtn');
var body = document.querySelector('body');

var colors = ['blue','yellow', 'red', 'green', 'black', 'orange', 'white'];

mainBtn.addEventListener('click', function(){
  changeBackground();
});


function changeBackground(){
  //very useful tool- how to randomly generated array indexes
  var random = Math.floor(Math.random() * colors.length);
  console.log(random);
  body.style.backgroundColor = colors[random];
  }
