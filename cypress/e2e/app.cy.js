describe("MFC Locator", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.window().then((win) => {
      cy.stub(win.navigator.geolocation, "getCurrentPosition").callsFake((cb) =>
        cb({ coords: { latitude: 55.76, longitude: 37.62 } })
      );
    });
  });

  it("loads cards and opens modal", () => {
    cy.get("[data-testid=office-card]").should("have.length.at.least", 1);
    cy.get("[data-testid=office-card]").first().click();
    cy.get("[data-testid=modal]").should("be.visible").find("button").click();
    cy.get("[data-testid=modal]").should("not.exist");
  });

  it("center filter reduces list", () => {
    cy.get("[data-testid=office-card]")
      .its("length")
      .then((len) => {
        cy.contains("Показывать только").prev("input").check();
        cy.get("[data-testid=office-card]").its("length").should("be.lte", len);
      });
  });
});
