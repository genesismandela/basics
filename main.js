document.getElementById('nav-burger').
addEventListener('click', function() {
  var burgerDOM = document.getElementById('nav-burger');
  burgerDOM.style.display = 'none';

  document.getElementById('title-container').style.display = 'none';
  document.getElementById('social-media-container').style.display = 'none';

  document.getElementById('nav-list').style.visibility = 'visible';
});