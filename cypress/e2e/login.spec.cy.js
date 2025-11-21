describe('Orange HRM Tests', () => {

    const selectorsList = {
      usernameField:"[name='username']",
      passwordField:"[name='password']",
      loginButtom: "[type='submit']",
      sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module"
      wrongCredentialAlert: "[role='alert']"
    }

  it('Login - Sucesses', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type('Admin')
    cy.get(selectorsList.passwordField).type('Admin123')
    cy.get(selectorsList.loginButtom).click()
    cy.get(selectorsList.sectionTitleTopBar).contains('Dashboard')
  })
  it('Login - Fail', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      cy.get(selectorsList.usernameField).type('Test')
      cy.get(selectorsList.passwordField).type('Test')
      cy.get(selectorsList.loginButtom).click()
      cy.get(selectorsList.wrongCredentialAlert)
    })  
   })
