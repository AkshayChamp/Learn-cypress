describe('Create Employee profile', () => {

    beforeEach(() => {
      // Login reusable logic
      cy.visit('https://opensource-demo.orangehrmlive.com/')
      cy.get('input[name="username"]').type('Admin')
      cy.get('input[name="password"]').type('admin123')
      cy.get('button[type="submit"]').click()
      cy.url().should('include', '/dashboard')
    })
  
    it('Verify user can select dropdown and scroll', () => {
  
      // Navigate to PIM
      cy.contains('PIM').click()
  
      cy.contains('Employee Information').should('be.visible')
  
      // Scroll to button
      cy.contains('Add').scrollIntoView().should('be.visible').click()
  
      // Verify Add Employee page
      cy.contains('Add Employee').should('be.visible')
  
      // Enter employee details
      cy.get('input[name="firstName"]').type('Akshay')
      cy.get('input[name="lastName"]').type('Automation')
  
      cy.contains('Save').click()
  
      // Assertion 
      cy.contains('Personal Details').should('be.visible')
    })
  })
  