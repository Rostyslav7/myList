'use strict'

var close = document.getElementsByClassName('close');
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    div.remove();
  }
}


function newElement() {
  var div = document.createElement('div');
  div.classList.add('newElem');
  var inputValue = document.querySelector('#input').value;
  var t = document.createTextNode(inputValue);
  div.prepend(t);


  if (inputValue === '') {
    // alert
  } else {
    document.querySelector('#myList').append(div);
  }
  
  document.querySelector('#input').value = '';

  var btn = document.createElement('button');
  btn.classList.add('close');
  div.append(btn);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
     var div = this.parentElement;
      div.style.display = 'none';
    }
  }
}

let btn = document.querySelector('.addBtn');
btn.addEventListener('click', () => {
  newElement();
});
