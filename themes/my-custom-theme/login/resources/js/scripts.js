const introSection = document.createElement("section")
introSection.innerHTML = "<h1>Sign in.</h1>"
introSection.innerHTML += "<h3>Centralized Console</h3>"
introSection.classList.add("kc-intro-section")

window.onload = function() {
  document.body.insertBefore(introSection, document.body.firstChild)

  const header = document.querySelector("header.kc-form-header")
  header.querySelector("h1").outerHTML = `<h5>${header.querySelector("h1").innerHTML}</h5>`
  const logo = document.createElement("img")
  logo.src = "https://picsum.photos/120/60"
  logo.alt = "Logo"
  logo.classList.add("kc-branding")
  header.insertBefore(logo, header.firstChild)
}