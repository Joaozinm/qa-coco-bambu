import userData from "../fixtures/userData.json";

Cypress.Commands.add("fastLogin", () => {
  cy.session(
    "user_session",
    () => {
      cy.visit("/entrar");
      cy.get("#ion-input-2").type(userData.userSuccess.username);
      cy.get("#ion-input-3").type(userData.userSuccess.password);
      cy.get("button").first().click();

      // 2FA
      for (let i = 0; i < 6; i++) {
        cy.get(`[id^="otp_${i}_"]`).type("A");
      }
      cy.get("button").first().click();

      // Verificação
      cy.url().should("include", "/home");
      cy.get(".user-avatar").should("be.visible");
    },
    {
      validate() {
        cy.getCookie("session_token").should("exist");
      },
    }
  );
});
