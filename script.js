const btn = document.getElementById("btn");

window.onscroll = function () {
  if (document.documentElement.scrollTop > 100) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}