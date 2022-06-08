describe('Web app contains CRUD functionalities', () => {
    it('shows default one todo', () => {
        cy.visit('http://localhost:3000/todo-list-app')
        cy.findByText('Try editing this sample todo').should('exist')
    })
    //allows uer to create todo
    it('allows user to create new todos ', () => {
        cy.visit('http://localhost:3000/todo-list-app')
        cy.findByTestId('enter-todo-form').type('do laundry')
        cy.get('form').submit()
        cy.findByTestId('enter-todo-form').type('walk dog')
        cy.get('form').submit()
        cy.findByTestId('enter-todo-form').type('cook dinner')
        cy.get('form').submit()
        cy.findByTestId('enter-todo-form').type('go on a jog')
        cy.get('form').submit()
        cy.get('.todoitem').should('have.length', 5)
    })

    // // allows multiple todos to be saved
    it('allows user to save todos upon refresh ', () => {
        cy.visit('http://localhost:3000/todo-list-app')
        cy.findByTestId('enter-todo-form').type('do laundry')
        cy.get('form').submit()
        cy.findByTestId('enter-todo-form').type('walk dog')
        cy.get('form').submit()
        cy.reload()
        cy.get('.todoitem').should('have.length', 3)
    })

    // //allow suer to edit todo
    it('allows user to edit todo ', () => {
        cy.visit('http://localhost:3000/todo-list-app')
        cy.findByTestId('enter-todo-form').type('do laundry')
        cy.get('form').submit()
        cy.findAllByLabelText('Edit').first().click()
        for (let i = 0; i < 30; i++) {
            cy.findByTestId('edit-text-field').type('{backspace}')
        }
        cy.findByTestId('edit-text-field').type('wash dishes')

        cy.findByText('Submit Todo').click()
        cy.findAllByTestId('todo-item-text')
            .first()
            .should('contain', 'wash dishes')
    })

    it('allows user to delete todos', () => {
        cy.visit('http://localhost:3000/todo-list-app')
        cy.findByTestId('enter-todo-form').type('do laundry')
        cy.get('form').submit()
        cy.findByTestId('enter-todo-form').type('walk dog')
        cy.get('form').submit()
        cy.findByTestId('enter-todo-form').type('fold clothing')
        cy.get('form').submit()
        cy.get('.todoitem').should('have.length', 4)
        for (let i = 0; i < 4; i++) {
            cy.findAllByLabelText('Delete').first().click()
        }
        cy.get('.todoitem').should('not.exist')
    })
})
