const introSection = document.createElement("section")
introSection.innerHTML = "<h1>Sign in.</h1>"
introSection.innerHTML += "<h3>Centralized Console <i class=\"fa fa-heartbeat\"></i></h3>"
introSection.classList.add("kc-intro-section")

// Add Font Awesome CSS
const link = document.createElement("link")
link.rel = "stylesheet"
link.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
document.head.appendChild(link)

window.onload = function() {
  document.body.insertBefore(introSection, document.body.firstChild)

  const header = document.querySelector("header.kc-form-header")
  header.querySelector("h1").outerHTML = `<h5>${header.querySelector("h1").innerHTML}</h5>`
  const logo = document.createElement("div")
  logo.classList.add("kc-branding")
  header.insertBefore(logo, header.firstChild)
}