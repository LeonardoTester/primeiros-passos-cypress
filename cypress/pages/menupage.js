class MenuPage {

    selectorsList() {
     const selectors = {


        myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
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
        
        
            return selectors


        }
      
        infoCheck() {

          cy.get(this.selectorsList().myInfoButton).click()
          cy.get(this.selectorsList().firstNameField).clear().type('LEONARDO2')
          cy.get(this.selectorsList().lastNameField).clear().type('tester2')
          cy.get(this.selectorsList().genericField).eq(4).clear().type("EmployeeId")
          cy.get(this.selectorsList().genericField).eq(5).clear().type("otherid")
          cy.get(this.selectorsList().genericField).eq(6).clear().type("777")
          cy.get(this.selectorsList().genericField).eq(9).clear().type("Test field")
          cy.get(this.selectorsList().calendaryField).eq(0).clear().type('2025-18-1')
          cy.get(this.selectorsList().closeButtonDate).click()
          cy.get(this.selectorsList().calendaryField).eq(1).clear().type('2021-18-1')
          cy.get(this.selectorsList().closeButtonDate).click()
          cy.get(this.selectorsList().saveButton).eq(0).click() // primeiro botão que salva
          cy.get('body').should('contain', 'Successfully Updated') // encontra o texto depois que clicou em salvar
          cy.get(this.selectorsList().saveMessage) // verifica por outro elemento a mensagem de salvar
          cy.get(this.selectorsList().closeButtonSave).click() // primeiro close botão que fecha o balão dizendo que salvou
          cy.get(this.selectorsList().sectionCountryEndStatus).eq(0).click()
          cy.get(this.selectorsList().countrySelect).click()
          cy.get(this.selectorsList().sectionCountryEndStatus).eq(1).click()
          cy.get(this.selectorsList().maritalStatusSelect).click()
          cy.get(this.selectorsList().genderTest).eq(1).click()
          cy.get(this.selectorsList().bloodType).eq(2).click()
          cy.get(this.selectorsList().selectBloodType).click()
          cy.get(this.selectorsList().saveButton).eq(1).click() //segundo botão de salvar
          cy.get(this.selectorsList().closeButtonSave).click() // segundo close botão que fecha o balão dizendo que salvou */

        
        }

        

    }

    export default MenuPage