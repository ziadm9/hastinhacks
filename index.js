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
