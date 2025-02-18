const getIntroSection = (title = "Sign in.") => {
  const introSection = document.createElement("section")
  introSection.innerHTML = `<h1>${title}</h1>`
  introSection.innerHTML += "<h3>Centralized Console <i class=\"fa fa-heartbeat\"></i></h3>"
  introSection.classList.add("kc-intro-section")
  return introSection
}

const getFooterSection = () => {
  const footerSection = document.createElement("section")
  const currYear = new Date().getFullYear()
  footerSection.innerHTML = `
<p class="kc-footer">
  <span>Powered by <a href="https://www.keycloak.org" target="_blank">Keycloak</a></span>
  <i class="fa fa-circle" aria-hidden="true"></i>
  <span>© ${currYear} Asians Group</span>
</p>
`
  footerSection.classList.add("kc-footer-section")
  return footerSection
}

const linkFontAwesomeCSS = () => {
  const link = document.createElement("link")
  link.rel = "stylesheet"
  link.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  document.head.appendChild(link)
}

const getIntroTitle = () => {
  const isResetPasswordPage = window.location.pathname.includes("login-actions/reset-credentials")
  const isLoginPage = window.location.pathname.includes("login-actions/authenticate")

  if (isResetPasswordPage) {
    return "Reset Password"
  } else if (isLoginPage) {
    return "Sign in."
  }
  return "Sign in."
}

linkFontAwesomeCSS()
const footerSection = getFooterSection()
const introSection = getIntroSection(getIntroTitle())

window.onload = function() {
  document.body.insertBefore(introSection, document.body.firstChild)
  document.body.appendChild(footerSection)

  const header = document.querySelector("header.kc-form-header")
  header.querySelector("h1").outerHTML = `<h5>${header.querySelector("h1").innerHTML}</h5>`

  const logo = document.createElement("div")
  logo.classList.add("kc-branding")
  header.insertBefore(logo, header.firstChild)
}