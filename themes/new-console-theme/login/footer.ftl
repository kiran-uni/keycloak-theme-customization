<#macro content>
  <section class="kc-footer">
    <ul class="kc-footer-list">
      <li><a href="https://www.wso2.com/privacy-policy/">${msg("privacyPolicy")}</a></li>
      <span class="separator"></span>
      <li>
        <a href="https://www.wso2.com/community-guidelines/">
          ${msg("communityGuidelines")}
        </a>
      </li>
      <span class="separator"></span>
      <li><a href="https://www.wso2.com/cookie-policy/">${msg("cookiePolicy")}</a></li>
      <span class="separator"></span>
      <li>
        <a href="https://www.wso2.com/copyright-policy/">
          ${msg("copyRightPolicy")}
        </a>
      </li>
    </ul>
  </section>

  <script>
    <#--Entry point for translations used in js/scripts.js-->
    const translations = {
      loginAccountSubTitle: "${msg("loginAccountSubTitle")}",
      usernamePlaceholder: "${msg("usernamePlaceholder")}",
      passwordPlaceholder: "${msg("passwordPlaceholder")}",
      passwordConfirmationPlaceholder: "${msg("passwordConfirmationPlaceholder")}",
      emailPlaceholder: "${msg("emailPlaceholder")}",
      firstNamePlaceholder: "${msg("firstNamePlaceholder")}",
      lastNamePlaceholder: "${msg("lastNamePlaceholder")}",
    };
  </script>
</#macro>
