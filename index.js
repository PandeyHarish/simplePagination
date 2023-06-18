let link = document.getElementsByClassName("link");
let currentValue = 1;
function activeLink() {
  for (l of link) {
    l.classList.remove("active");
  }
  event.target.classList.add("active");
  currentValue = event.target.value;
}

function backBtn() {
  if (currentValue > 1) {
    for (l of link) {
      l.classList.remove("active");
    }
    currentValue--;
    link[currentValue - 1].classList.add("active");
  }
}

function nextBtn() {
  if (currentValue < 6) {
    for (l of link) {
      l.classList.remove("active");
    }
    currentValue++;
    link[currentValue - 1].classList.add("active");
  }
}
