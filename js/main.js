const kimClick = document.getElementById("kim_click")
const kimLocation = document.getElementById("kim").offsetTop

kimClick.addEventListener('click', function () {
  window.scrollTo({top:kimLocation, behavior:'smooth'})
})

const jaClick = document.getElementById("ja_click");
const jaLocation = document.getElementById("ja").offsetTop

jaClick.addEventListener('click', function () {
  window.scrollTo({top:jaLocation, behavior:'smooth'});
})

const ddolClick = document.getElementById("ddol_click")
const ddolLocation = document.getElementById("ddol").offsetTop

ddolClick.addEventListener('click', function () {
  window.scrollTo({top:ddolLocation, behavior:'smooth'});
})