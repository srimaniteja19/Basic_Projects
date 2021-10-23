const bar = document.querySelector(".progress-bar");
const section = document.querySelector("section");

function progressBar() {
  const barHeight = -section.getBoundingClientRect().top;
  const percentage =
    (barHeight /
      (section.getBoundingClientRect().height -
        document.documentElement.clientHeight)) *
    100;
  const rounded = Math.floor(percentage);
  bar.style.width = rounded + "%";
  if (rounded < 0) {
    bar.style.width = 0 + "%";
  }
}

window.addEventListener("scroll", progressBar);
