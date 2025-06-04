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
      invalidCodeAlert:
        "cy.get('.server-error-container > .ng-tns-c566118524-1')",
      homePageElement: ".home-dashboard",
      loginForm: "app-login form",
    };
    return selectors;
  }

  accessLoginPage() {
    cy.visit("/entrar");
    cy.get(this.selectorsList().emailField).should("be.visible");
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

  submitButton() {
    cy.get(this.selectorsList().submitButton).first().click();
    return this;
  }

  validate2FAPage() {
    cy.get(this.selectorsList().alertCode, { timeout: 10000 })
      .should("exist")
      .and("be.visible");
    return this;
  }

  closeAlertButton() {
    cy.get(this.selectorsList().closeAlertButton).click();
    return this;
  }

  fillAuthCode(code = "AAAAAA") {
    for (let i = 0; i < 6; i++) {
      cy.get(this.selectorsList().authCodeField(i)).type(code[i] || "A");
    }
    return this;
  }

  submitForm() {
    // Método mantido para compatibilidade com o fluxo
    cy.get(this.selectorsList().submitButton).first().click();
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

export default new LoginPage();
