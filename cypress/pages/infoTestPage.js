class pageTest {


    selectorList() {
        const selectorList = {

        firstNameField: "[name='firstName']",
        lastNameField: "[name='lastName']",
        midNameField: ".orangehrm-middlename",
        idNameField: "[data-v-1f99f73c='']",
        otherID: ".oxd-input", // 5
        LicenseNumber: ".oxd-input", // 6
        DateExpiry: "[placeholder='yyyy-dd-mm']", // 0
        saveButton: "[type='submit']",
        DatecloseButton: ".--close",
        openNationality: "[clear='false']",
        openMaritalStatus: "[tabindex='0']",
        selectNationality: ".oxd-select-dropdown > :nth-child(2)",
        selectMarital: ":nth-child(4) > span",
        selectGender: ".oxd-radio-input--active",
        closeMessage: ".oxd-toast-close"
        
    }

    return selectorList
  }

    EmployeeFullName(firstname, midname, lastname) {
        cy.get(this.selectorList().firstNameField).clear().type(firstname)
        cy.get(this.selectorList().midNameField).clear().type(midname)
        cy.get(this.selectorList().lastNameField).clear().type(lastname)
        
    }

    personalDetails() {
        cy.get(this.selectorList().idNameField).eq(4).clear().type("nickname2")
        cy.get(this.selectorList().otherID).eq(5).clear().type('ID1')
        cy.get(this.selectorList().LicenseNumber).eq(6).clear().type('ID2')
        cy.get(this.selectorList().DateExpiry).eq(0).clear({ force: true }).type('2024-09-09', { force: true })
        cy.get(this.selectorList().DateExpiry).eq(1).clear({ force: true }).type('2024-07-09', { force: true })
        cy.get(this.selectorList().DatecloseButton).click()  
        cy.get(this.selectorList().openNationality).eq(0).click()
        cy.get(this.selectorList().selectNationality).click()
        cy.get(this.selectorList().openMaritalStatus).eq(1).click()
        cy.get(this.selectorList().selectMarital).click()
        cy.get(this.selectorList().selectGender).eq(0).click()    
        
        
    }

    SaveForm() {
        cy.get(this.selectorList().saveButton).eq(0).click()
        cy.get(this.selectorList().saveButton).eq(1).click()
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get(this.selectorList().closeMessage).click()


    }
}

export default pageTest


    