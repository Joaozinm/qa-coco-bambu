describe("API - Carrinho (DummyJSON)", () => {
  context("Adicionar item ao carrinho", () => {
    it("deve adicionar múltiplos produtos com sucesso", () => {
      cy.addToCart({
        userId: 1,
        products: [
          { id: 1, quantity: 2 },
          { id: 50, quantity: 1 },
        ],
      }).then((res) => {
        expect(res.status).to.eq(201);
        expect(res.body).to.have.property("id");
        expect(res.body.products).to.have.length(2);
      });
    });

    it("deve falhar com payload vazio (teste negativo)", () => {
      cy.addToCart({}).then((res) => {
        expect(res.status).to.be.oneOf([400, 422]);
      });
    });
  });

  context("Atualizar carrinho", () => {
    it("deve atualizar quantidade de item no carrinho", () => {
      cy.addToCart({
        userId: 1,
        products: [{ id: 1, quantity: 1 }],
      }).then((res) => {
        cy.updateCart(1, {
          products: [{ id: 1, quantity: 5 }],
        }).then((res) => {
          expect(res.status).to.eq(200);
          expect(res.body.products[0].quantity).to.eq(5);
        });
      });
    });
  });

  context("Remover carrinho", () => {
    it("deve remover carrinho com sucesso", () => {
      cy.addToCart({
        userId: 1,
        products: [{ id: 1, quantity: 1 }],
      }).then((res) => {
        cy.deleteCart(1).then((res) => {
          expect(res.status).to.eq(200);
          expect(res.body).to.have.property("isDeleted", true);
        });
      });
    });

    it("deve retornar erro ao deletar carrinho inexistente", () => {
      cy.deleteCart(999999).then((res) => {
        expect(res.status).to.be.oneOf([404, 400]);
      });
    });
  });
});
