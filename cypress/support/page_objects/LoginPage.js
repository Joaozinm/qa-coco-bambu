class LoginPage {
  selectorsList() {
    const selectors = {
      loginMainContainer: "app-login",
      emailField: "#ion-input-2",
      passwordField: "#ion-input-3",
      submitButton: "button",
      alertCode: "desktop-modal",
      closeAlertButton: ".is-primary",
      authCodeField: (index) => `[id^="otp_${index}_"]`,
      homePageElement: ".home-dashboard", // Adicione um seletor da página home
      loginForm: "app-login form", // Para verificar ausência após login
    };
    return selectors;
  }

  accessLoginPage() {
    cy.visit("/entrar");
    return this;
  }

  verifyLoginPage() {
    cy.get(this.selectorsList().loginMainContainer, { timeout: 10000 })
      .should("exist")
      .and("be.visible");
    return this;
  }

  fillEmail(email) {
    cy.get(this.selectorsList().emailField).clear().type(email);
    return this;
  }

  fillPassword(password) {
    cy.get(this.selectorsList().passwordField).clear().type(password);
    return this;
  }

  submitForm() {
    cy.get(this.selectorsList().submitButton).first().click();
    return this;
  }

  validate2FAPage() {
    cy.get(this.selectorsList().alertCode, { timeout: 10000 })
      .should("exist")
      .and("be.visible");
    return this;
  }

  closeAlert() {
    cy.get(this.selectorsList().closeAlertButton).click();
    return this;
  }

  fillAuthCode(code = "AAAAAA") {
    for (let i = 0; i < 6; i++) {
      cy.get(this.selectorsList().authCodeField(i)).type(code[i] || "A");
    }
    return this;
  }

  verifyLoginSuccess() {
    cy.get(this.selectorsList().homePageElement, { timeout: 15000 })
      .should("exist")
      .and("be.visible");
    return this;
  }

  verifyLoginElementsNotVisible() {
    cy.get(this.selectorsList().loginForm).should("not.exist");
    return this;
  }
}
