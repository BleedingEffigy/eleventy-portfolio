const elemList = document.querySelectorAll(".dynamic_animations")

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animated__slideInLeft")
      observer.unobserve(entry.target)
    }
  })
}
const options = {}

const myObserver = new IntersectionObserver(callback, options)
elemList.forEach(elem => {
  myObserver.observe(elem)
})