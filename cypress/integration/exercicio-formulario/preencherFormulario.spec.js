///<reference types = "cypress"/>

describe("Preencher Formulario", () => {

    before(() => {
        cy.visit('http://way2automation.com/way2auto_jquery/index.php')
    })

    it("Validar campos", () => {
        cy.get('[name="name"]')
            .should('be.visible')
            .type("Glória")

        cy.get('[name="phone"]')
            .should('be.visible')
            .type("(51)999999999")

        cy.get('[name="email"]')
            .should('be.visible')
            .type("teste@teste.com")

        cy.get('[name="city"]')
            .should('be.visible')
            .type("Canoas")

        cy.get(':nth-child(10) > input')
            .should('be.visible')
            .type("MarquesG")

        cy.get(':nth-child(11) > input')
            .should('be.visible')
            .type("123456")

        cy.get('select')
            .should('be.visible')
            .select("Bulgaria")

        cy.get(':nth-child(12) > .span_1_of_4 > .button')
            .should('be.visible')
            .click();

        cy.get('#alert')
            .should("have.text", "This is just a dummy form, you just clicked SUBMIT BUTTON");
    })

})