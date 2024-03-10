describe("template spec", () => {
  it("Tüm testler ve formun gönderilmesi", () => {
    // Arrange, Act ve Assert yapacağız.
    cy.visit("http://localhost:5174/order");

    // Bir radiobutton seç, seçildikten sonra * işareti gidiyor mu kontrol et
    cy.get('[data-cy="boyut-radio"][value="küçük"]').check();
    cy.get('[data-cy="boyut-error"]').should("not.exist");

    // Default değer dışında bir hamur seçeneği seç * işareti gidiyor mu kontrol et
    cy.get('[data-cy="hamur-select"]').select("Kalın Kenar");
    cy.get('[data-cy="hamur-error"]').should("not.exist");

    // Malzemelerden 5 tane seçildiyse * işareti gidiyor mu kontrol et
    cy.get('[data-cy="malzemeler-checkbox"]').check([
      "Pepperoni",
      "Domates",
      "Biber",
      "Sosis",
      "Mısır",
    ]);
    cy.get('[data-cy="malzemeler-error"]').should("not.exist");

    // Eğer isimde 3 harf girildiyse * işareti gidecek
    cy.get('[data-cy="ad-input"]').type("hasan");
    cy.get('[data-cy="ad-error"]').should("not.exist");

    // Form doldurulduktan sonra buttona bas ve seçilenlerle form gönderildi mi kontrol et
    cy.get('[data-cy="submit-button"]').click();
    cy.log("Sipariş özeti:");
    cy.log("- Boyut: Küçük");
    cy.log("- Hamur: Kalın Kenar");
    cy.log("- Malzemeler: Pepperoni, Domates, Biber, Sosis, Mısır");
  });
});
