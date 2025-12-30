describe('Table Handling', () => {

  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()
    cy.contains('PIM').click()
  })

  it('Verify employee search result from table', () => {

    // Search employee
    cy.get('input[placeholder="Type for hints..."]').first().type('Paul')

    cy.contains('Search').click()

    // Wait using assertion
    cy.get('.oxd-table-body').should('be.visible')

    // Validate at least one row exists
    cy.get('.oxd-table-card').should('have.length.greaterThan', 0)

    // Validate specific column value
    cy.get('.oxd-table-card').first().find('.oxd-table-cell').eq(2).should('not.be.empty')

    // Click action menu (Edit)
    cy.get('.oxd-table-card').first().find('button').first().click()

    // Assertion after navigation
    cy.url().should('include', '/viewPersonalDetails')
  })
})



// describe('File Upload', () => {

//   beforeEach(() => {
//     cy.visit('https://opensource-demo.orangehrmlive.com/')
//     cy.get('input[name="username"]').type('Admin')
//     cy.get('input[name="password"]').type('admin123')
//     cy.get('button[type="submit"]').click()
//     cy.url().should('include', '/dashboard')
//   })

//   it('Verify user can upload profile picture', () => {

//     // Navigate to My Info
//     cy.contains('My Info').click()
//     cy.contains('Personal Details').should('be.visible')

//     // Upload profile picture
//     cy.get('input[type="file"]', {timeout: 10000 }).should('exist')
//       .selectFile('cypress/fixtures/profile.png', { force: true })

//     // Save changes
//     cy.contains('Save').click()

//     // Assertion
//     cy.contains('Successfully Updated').should('be.visible')
//   })
// })
