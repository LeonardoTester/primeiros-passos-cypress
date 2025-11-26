import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menupage'
import pageTest from '../pages/infoTestPage'


const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menupage = new MenuPage()
const infopage = new pageTest


describe('Orange HRM Tests', () => {

  const selectorsList = {

  
  }
    
  it('User info - Sucesse', () => {

    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)
    dashboardPage.checkDashboard()
    menupage.infoCheck()
    infopage.EmployeeFullName()
    infopage.personalDetails()
    
       

  })
    it.skip('Login - Fail', () => {

      loginPage.acessLoginPage()
      loginPage.loginWithUser(userData.userFail.username, userData.userFail.password)
      
     
    })
  
 })

