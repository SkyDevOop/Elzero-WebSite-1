const nav = document.querySelector(".header .links .nav");
const barIcon = document.querySelector(".header .links .icon");

// barIcon.addEventListener('click', (eo) => {
//   nav.classList.toggle('active')
// })

window.addEventListener('scroll', () => {
  nav.classList.remove("active")
})

document.addEventListener('click', (eo) => {
  console.log(eo.target.classList.contains("icon"))
  if (eo.target.classList.contains('icon')) {
    nav.classList.toggle('active')
  }else{
    nav.classList.remove('active')
  }
})