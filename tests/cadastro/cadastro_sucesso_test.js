const { faker } = require('@faker-js/faker');
const assert = require('assert');

Feature('login');

Scenario('Create a New Account', async ({ I }) => {
    const name = faker.person.firstName();
    const lastName = faker.person.lastName();
    const email = faker.internet.email();

    console.log(`Criando conta para: ${name} ${lastName}`);

    I.amOnPage('/');
    I.click('Signup / Login');

    I.fillField('Name', (`${name} ${lastName}`));
    I.fillField('[data-qa="signup-email"]', email);
    I.click('[data-qa="signup-button"]')

    I.see('ENTER ACCOUNT INFORMATION')

    I.click('#id_gender1')
    I.fillField('#password' ,'123456')
    
    I.selectOption('#days', '7');
    I.selectOption('#months', 'January');
    I.selectOption('#years', '1998');

    I.fillField('#first_name', name )
    I.fillField('#last_name' ,lastName)

    I.fillField('#company' ,'LeoShop')
    I.fillField('#address1' , 'Rua Do Leo,526 Vila Nova')

    I.selectOption('#country' ,'Canada')
    I.fillField('#state' ,'Rio Grande')
    I.fillField('#city' ,'Igrejinha')
    I.fillField('#zipcode' ,'95650000')
    I.fillField('#mobile_number' ,'51996352441')

    I.click('[data-qa="create-account"]')

    I.see('ACCOUNT CREATED!')

});
