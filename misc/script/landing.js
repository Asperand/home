
var cube = document.querySelector('.cube');
var radioGroup = document.querySelector('.radio-group');
var currentClass = '';

function changeSide() {
  var checkedRadio = radioGroup.querySelector(':checked');
  var showClass = 'show-' + checkedRadio.value;
  if ( currentClass ) {
    cube.classList.remove( currentClass );
  }
  cube.classList.add( showClass );
  currentClass = showClass;
}
// set initial side

changeSide();
radioGroup.addEventListener( 'change', changeSide );

land = function() {
window.setTimeout(function() {
document.querySelector(':checked').removeAttribute('checked');
document.querySelector('input[value="top"]').setAttribute('checked',true);
changeSide();
}, 2000);
window.setTimeout(function() {
document.querySelector(':checked').removeAttribute('checked');
document.querySelector('input[value="bottom"]').setAttribute('checked',true);
changeSide();
}, 4000);
window.setTimeout(function() {
document.querySelector('#slogan').style.opacity = '1';
}, 5000);
}
land();
window.setInterval(function() {
//land();
}, 7000);
