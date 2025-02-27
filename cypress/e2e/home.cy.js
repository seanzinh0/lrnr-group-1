/// <reference types="cypress" />

describe("Homepage Tests", () => {
  beforeEach(() => {
    cy.visit("https://lrnr-group-1.onrender.com/");
  });

  it("should load the homepage correctly", () => {
    cy.contains("Your guided path to programming enlightenment").should(
      "be.visible"
    );
  });

  it("should display the logo image", () => {
    cy.get("img").should("have.attr", "src").and("include", "lrnr-logo.png");
  });

  it("should navigate to the Quiz Generator page on button click", () => {
    cy.get("button").contains("BEGIN JOURNEY").click();
    cy.url().should("include", "/quizgenerator");
  });

  it("should have a navigation bar", () => {
    cy.get("navbar").should("exist");
  });
});
