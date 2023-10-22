describe('login', () => {
    it('user should be able to log in', () => {
      cy.visit('/')
  
      // open the login modal
      cy.get('button').contains('Login').click()
  
      // fill in the form
      cy.get('input[type="email"]').type('test@test.com')
      cy.get('input[type="password"]').type('test123')
  
      // submit the form 
      cy.get('button').contains('Sign in').click()
      cy.contains('button', 'Logout').should('be.visible')
    })
  })