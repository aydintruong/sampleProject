describe('My First Test', () => {
  it('clicks the link "type"', () => {
    cy.visit('http://localhost:4200/shopping-list')

    cy.contains('type').click()
  })
})