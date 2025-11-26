class pageTest {


    selectorList() {
        const selectorList = {

        firstNameField: "[name='firstName']",
        lastNameField: "[name='lastName']",
        midNameField: "[placeholder='Middle Name']",
        idNameField: "[data-v-1f99f73c='']",
        otherID: ".oxd-input", // 5
        LicenseNumber: ".oxd-input", // 6
        DateExpiry: ".oxd-date-input", // 0
        
    }

    return selectorList
  }

    EmployeeFullName() {
        cy.get(this.selectorList().firstNameField).clear().type('LEONARDO2')
        cy.get(this.selectorList().midNameField).clear().type('test1')
        cy.get(this.selectorList().lastNameField).clear().type('tester2')
        
    }

    personalDetails() {
        cy.get(this.selectorList().idNameField).eq(4).clear().type("nickname2")
        cy.get(this.selectorList().otherID).eq(5).clear().type('ID1')
        cy.get(this.selectorList().LicenseNumber).eq(6).clear().type('ID2')
        cy.get(this.selectorList().DateExpiry).clear().type('2024-20-09')
       
    }
}

export default pageTest


    