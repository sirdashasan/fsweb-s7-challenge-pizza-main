/* IT-1 TESTLERİ 

describe("template spec", () => {
  it("IT-1 testler ve formun gönderilmesi", () => {
    // Arrange, Act ve Assert yapacağız.
    cy.visit("http://localhost:5173/order/id");

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

*/

/*IT-2 TESTLERİ*/

/*
describe("template spec", () => {
  it("Boyuta göre toplam fiyat değişiyor mu?", () => {
    // Arrange, Act ve Assert
    cy.visit("http://localhost:5173/order/id");

    // L boyutuna tıkla
    cy.get('[data-cy="boyut-radio"][value="L"]').click();
    const selectedPrice = 99;
    cy.get('[data-cy="total-price"]').should(
      "contain",
      `${selectedPrice * 2}₺`
    );
  });
}); */

describe("template spec", () => {
  it("Sayfalar arasında geçiş testi", () => {
    // Arrange, Act ve Assert
    cy.visit("http://localhost:5173");

    cy.get('[data-cy="home-button"]').click();
    cy.get('[data-cy="boyut-radio"][value="L"]').click();
    cy.get('[data-cy="boyut-error"]').should("not.exist");

    cy.get('[data-cy="hamur-select"]').select("Kalın Kenar");
    cy.get('[data-cy="hamur-error"]').should("not.exist");

    cy.get('[data-cy="malzemeler-checkbox"]').check([
      "Pepperoni",
      "Domates",
      "Biber",
      "Sosis",
      "Kabak",
    ]);
    cy.get('[data-cy="malzemeler-error"]').should("not.exist");

    cy.get('[data-cy="ad-input"]').type("hasan");
    cy.get('[data-cy="ad-error"]').should("not.exist");

    cy.get('[data-cy="not-input"]').type("sıcak gelsin lütfen :)");

    const selectedPrice = 85.5;
    cy.get('[data-cy="adet-button-arttir-input"]').click();
    cy.get('[data-cy="total-price"]').should("contain", `${392}₺`);

    cy.get('[data-cy="submit-button"]').click();
  });
});
