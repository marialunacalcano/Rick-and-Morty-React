it('shows the nav links', () => {
  cy.visit('/')
  cy.contains('nav a', 'Home').should('be.visible')
  cy.contains('nav a', 'Characters').should('be.visible')
  cy.contains('nav a', 'About').should('be.visible')
})

it('navigates with the navbar without reloading the page', () => {
  cy.visit('/')
  cy.window().then((win) => { win.noReload = true })
  cy.contains('nav a', 'About').click()
  cy.location('pathname').should('eq', '/about')
  cy.window().its('noReload').should('eq', true)
})