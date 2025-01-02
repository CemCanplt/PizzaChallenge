describe("Input Alanı Testi", () => {
  it("İsim inputuna metin girer ve doğrular", () => {
    cy.visit("http://localhost:5173/");

    cy.get('button[data-cy="acim-butonu"]').click();

    cy.get('input[data-cy="isim-girdisi"]').type("Cem");

    cy.should("have.value", "Cem");
  });
});

describe("Malzeme Seçimi Testi", () => {
  it("Birden fazla malzeme seçilebilir", () => {
    cy.visit("http://localhost:5173/");

    cy.get('button[data-cy="acim-butonu"]').click();

    // Malzeme checkboxlarını seç
    cy.get('[data-cy="ingredient-checkbox"]')
      .eq(0)
      .check()
      .should("be.checked");
    cy.get('[data-cy="ingredient-checkbox"]')
      .eq(1)
      .check()
      .should("be.checked");
    cy.get('[data-cy="ingredient-checkbox"]')
      .eq(2)
      .check()
      .should("be.checked");

    cy.get('[data-cy="ingredient-checkbox"]:checked').should("have.length", 3);
  });
});

describe("Form Gönderme Testi", () => {
  it("Formu doldurur ve gönderir", () => {
    cy.visit("http://localhost:5173/");

    // İsmi doldur
    cy.get('button[data-cy="acim-butonu"]').click();

    cy.get('input[data-cy="isim-girdisi"]').type("Cem");

    // Hamur tipini seç
    cy.get('[data-cy="dough-select"]').select("İnce Hamur");

    // Malzemeleri seç
    cy.get('[data-cy="ingredient-checkbox"]').eq(0).check();
    cy.get('[data-cy="ingredient-checkbox"]').eq(1).check();

    // Not alanını doldur
    cy.get('[data-cy="order-note"]').type("Sipariş notu giriyorum.");

    // Formu gönder
    cy.get('[data-cy="submit-button"]').click();

    // Form gönderimin başarılı olduğunu doğrula
    cy.contains("SİPARİŞ ALINDI").should("be.visible");
  });
});
