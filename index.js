var acc = document.getElementsByClassName("droptitle");
var paths = document.querySelectorAll("path")
for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      paths[i].setAttribute("d","M19.5 8.25l-7.5 7.5-7.5-7.5")
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      paths[i].setAttribute("d","M4.5 15.75l7.5-7.5 7.5 7.5")
    }
  });
}

document.addEventListener('DOMContentLoaded', function (event) {
  // array with texts to type in typewriter
  var dataText = ['East Bay Hacks', 'Also known as HastinHacks'];

  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
      // chekc if text isn't finished yet
      if (i < (text.length)) {
          // add next character to header
          document.getElementById('maintext').innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

          // wait for a while and call this function again for next character
          setTimeout(function () {
              typeWriter(text, i + 1, fnCallback)
          }, 150);
      }
      // text finished, call callback if there is a callback function
      else if (typeof fnCallback == 'function') {
          // call callback after timeout
          setTimeout(fnCallback, 2500);
      }
  }
  // start a typewriter animation for a text in the dataText array
  function StartTextAnimation(i) {
      if (typeof dataText[i] == 'undefined') {
          setTimeout(function () {
              StartTextAnimation(0);
          }, 20000);
      }
      // check if dataText[i] exists
      if (i < dataText[i].length) {
          // text exists! start typewriter animation
         
          typeWriter(dataText[i], 0, function () {
              // after callback (and whole text has been animated), start next text
              StartTextAnimation((i + 1)%2);
          });
      }
  }
  // start the text animation
  StartTextAnimation(0);
});
