Feature('login com sucesso');

Scenario('realizando login com sucesso', async ({ I }) => {
  I.amOnPage('/');
  I.click('Signup / Login');

  I.fillField('[data-qa="login-email"]' ,'lschmitt590@gmail.com')
  I.fillField('[data-qa="login-password"]' ,'123456')

  I.click('[data-qa="login-button"]')
  I.see('Delete Account')
  I.see('Cart')

});