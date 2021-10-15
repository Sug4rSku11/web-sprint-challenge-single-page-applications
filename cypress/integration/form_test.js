describe('Pizza Order Form', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza');
    })
    const nameInput = () => cy.get('input[name=name]');
    const dropDown = () => cy.get('[id=size-dropdown]')
    const checkBox = () => cy.get(`[value="pepperoni"]`);
    const orderBtn = () => cy.get("button[id='order-button']");
    const specialInput = () => cy.get('input[name=special]');
    

    it('sanity check to make sure tests work', () => {
        //"it" is a test
        //"expect" is an assertion
        expect(1 + 2).to.equal(3);
        expect(2 + 2).not.to.equal(5);
        expect({}).not.to.equal({}); //strict ===
        expect({}).to.eql({}); //not strict ==
    })

    it('the proper elements are showing', () => {
        orderBtn().should('exist');
        nameInput().should('exist');
        dropDown().should('exist');
        specialInput().should('exist');
        checkBox().should('exist');
        cy.contains('Add to Order').should('exist');
    })

    describe('Filling out the inputs', () => {
        //We can use optional describe blocks to organize and group our tests
        //Can we navigate to the url
        it('can navigate to the url', () => {
            cy.url().should('include', 'localhost');
        })
        //submit button should start out disabled
        it('submit button starts out disabled', () => {
            orderBtn().should('be.disabled');
        })
        //type in the inputs
        it('can type in the inputs', () => {
            nameInput()
            .should('have.value', '')
            .type('Desiree')
            .should('have.value', 'Desiree');
        specialInput()
            .should('have.value', '')
            .type('extra cheese please')
            .should('have.value', 'extra cheese please');
        checkBox()
            .should('not.be.visible')
            .check({force: true})
            .should('be.checked')
        })
        //submit button is not disabled after typing in the inputs
        it('the submit button enables when all inputs are filled out', () => {
            nameInput().type('Desiree');
            specialInput().type('extra cheese please');
            orderBtn().should('not.be.disabled')
            orderBtn().click()
        })
        
    })



})
