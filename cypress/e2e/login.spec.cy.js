describe('Orange HRM Tests', () => {
  it('Login - Sucesses', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type('Admin')
    cy.get("[name='password']").type('Admin123')
    cy.get("[type='submit']").click()
    cy.get(".oxd-topbar-header-breadcrumb-module").contains('Dashboard')
  })
  it('Login - Fail', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get("[name='username']").type('Test')
      cy.get("[name='password']").type('Test')
      cy.get("[type='submit']").click()
      cy.get("[role='alert']").contains('Dashboard')
    })  
   })
