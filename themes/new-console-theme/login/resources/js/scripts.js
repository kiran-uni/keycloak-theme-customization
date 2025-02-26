const constructKcFormSubtitle = () => {
  const kcFormHeader = document.getElementsByClassName("kc-form-header")[0]
  const kcFormSubtitle = document.createElement("p")
  kcFormSubtitle.className = "kc-page-subtitle"
  kcFormSubtitle.innerHTML = translations.loginAccountSubTitle
  kcFormHeader.appendChild(kcFormSubtitle)
}

const addPlaceholders = () => {
  const username = document.getElementById("username")
  const password = document.getElementById("password")
  const passwordConfirm = document.getElementById("password-confirm")
  const email = document.getElementById("email")
  const firstName = document.getElementById("firstName")
  const lastName = document.getElementById("lastName")


  if (username) {
    username.placeholder = translations.usernamePlaceholder
  }
  if (password) {
    password.placeholder = translations.passwordPlaceholder
  }
  if (passwordConfirm) {
    passwordConfirm.placeholder = translations.passwordConfirmationPlaceholder
  }
  if (email) {
    email.placeholder = translations.emailPlaceholder
  }
  if (firstName) {
    firstName.placeholder = translations.firstNamePlaceholder
  }
  if (lastName) {
    lastName.placeholder = translations.lastNamePlaceholder
  }
}

const positionLocaleDropdown = () => {
  const kcLocale = document.getElementById("kc-locale")
  const icon = document.createElement("span")
  icon.className = "dropdown-caret"
  kcLocale.querySelector("button").appendChild(icon)


  const kcHeader = document.getElementById("kc-header")
  kcHeader.append(kcLocale)
}

const activateCurrentLocale = () => {
  const htmlLang = document.documentElement.lang;
  const localeLinks = document.querySelectorAll("#language-switch1 li a");

  localeLinks.forEach(link => {
    const liElement = link.closest("li");
    const hrefParams = new URLSearchParams(link.href.split("?")[1]);
    const lang = hrefParams.get("kc_locale");

    if (lang === htmlLang) {
      liElement.classList.add("active");
    } else {
      liElement.classList.remove("active");
    }
  });
};

const positionKcFormHeader = () => {
  const kcFormHeader = document.querySelector(".kc-form-header")
  const kcContent = document.getElementById("kc-content")
  kcContent.prepend(kcFormHeader)
}

const wrapKcContent = () => {
  const kcContent = document.getElementById("kc-content")
  const kcContentWrapper = document.createElement("div")
  kcContentWrapper.id = "kc-card-content-wrapper"
  kcContentWrapper.appendChild(kcContent)
  const kcFormCard = document.querySelector(".kc-form-card")
  kcFormCard.prepend(kcContentWrapper)
}

const addGoogleIcon = () => {
  const googleButton = document.querySelector("#social-google")
  if (googleButton) {
    const googleIcon = document.createElement("span")
    googleIcon.className = "google-icon"
    googleButton.prepend(googleIcon)
  }
}

// login, reset, register -> add differentiating class on body
const tagBodyWithActionClass = () => {
  const url = window.location.href;
  console.log(url)
  const register = url.includes("/login-actions/registration?");
  const reset = url.includes("/login-actions/reset-credentials?");
  const login = url.includes("/login-actions/authenticate?");

  if (register) {
    document.body.classList.add("register")
  } else if (reset) {
    document.body.classList.add("reset")
  } else if (login) {
    document.body.classList.add("login")
  }
}

window.onload = function() {
  constructKcFormSubtitle()
  addPlaceholders()
  positionLocaleDropdown()
  positionKcFormHeader()
  wrapKcContent()
  addGoogleIcon()
  tagBodyWithActionClass()

  // Activate the current locale
  activateCurrentLocale();
}
