import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menupage'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menupage = new MenuPage()



describe('Orange HRM Tests', () => {

  const selectorsList = {
  
   
   
   
   firstNameField: "[name='firstName']",
   lastNameField: "[name='lastName']",
   genericField: ".oxd-input",
   calendaryField: "[placeholder='yyyy-dd-mm']",
   closeButtonDate: ".--close",
   saveButton: "[type='submit']",
   saveMessage: ".oxd-toast-container--bottom",
   closeButtonSave: ".oxd-toast-close",
   sectionCountryEndStatus: "[clear='false']",
   countrySelect: ".oxd-select-dropdown > :nth-child(4)",
   maritalStatusSelect: ".oxd-select-dropdown > :nth-child(3)",
   genderTest: ".oxd-radio-input",
   bloodType: "[tabindex='0']",
   selectBloodType: ".oxd-select-dropdown > :nth-child(6)"

  }
    
  it('User info - Sucesse', () => {

    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)
    dashboardPage.checkDashboard()
    menupage.infoCheck()
    
    
    
    
    cy.get(selectorsList.firstNameField).clear().type('LEONARDO')
    cy.get(selectorsList.lastNameField).clear().type('TESTER')
    cy.get(selectorsList.genericField).eq(4).clear().type("EmployeeId")
    cy.get(selectorsList.genericField).eq(5).clear().type("otherid")
    cy.get(selectorsList.genericField).eq(6).clear().type("777")
    cy.get(selectorsList.genericField).eq(9).clear().type("Test field")
    cy.get(selectorsList.calendaryField).eq(0).clear().type('2025-18-1')
    cy.get(selectorsList.closeButtonDate).click()
    cy.get(selectorsList.calendaryField).eq(1).clear().type('2021-18-1')
    cy.get(selectorsList.closeButtonDate).click()
    cy.get(selectorsList.saveButton).eq(0).click() // primeiro botão que salva
    cy.get('body').should('contain', 'Successfully Updated') // encontra o texto depois que clicou em salvar
    cy.get(selectorsList.saveMessage) // verifica por outro elemento a mensagem de salvar
    cy.get(selectorsList.closeButtonSave).click() // primeiro close botão que fecha o balão dizendo que salvou
    
    
    cy.get(selectorsList.sectionCountryEndStatus).eq(0).click()
    cy.get(selectorsList.countrySelect).click()
    cy.get(selectorsList.sectionCountryEndStatus).eq(1).click()
    cy.get(selectorsList.maritalStatusSelect).click()
    cy.get(selectorsList.genderTest).eq(1).click()
    cy.get(selectorsList.bloodType).eq(2).click()
    cy.get(selectorsList.selectBloodType).click()
    cy.get(selectorsList.saveButton).eq(1).click() //segundo botão de salvar
    cy.get(selectorsList.closeButtonSave).click() // segundo close botão que fecha o balão dizendo que salvou */
    
    
   


  })
    it.skip('Login - Fail', () => {

      loginPage.acessLoginPage()
      loginPage.loginWithUser(userData.userFail.username, userData.userFail.password)
      
     
    })
  
 })

