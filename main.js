const menuBtn = document.getElementById('nav-burger');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});

document.getElementById('nav-burger').
addEventListener('click', function() {
  var navShowHide = document.getElementById('nav-list');
  if (navShowHide.style.visibility === 'visible') {
    navShowHide.style.visibility = 'hidden';
  } else {
    navShowHide.style.visibility = 'visible';
  }

  var elementsShowHide = [
    [document.getElementById('main-title')], 
    [document.getElementById('social-media-container')], 
    [document.querySelector('.btn')]];
  if (navShowHide.style.visibility === 'visible') {
    elementsShowHide.style.visibility = 'hidden';
  } else {
    elementsShowHide.style.visibility = 'visible';
  }
});
