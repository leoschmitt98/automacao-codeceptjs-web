Feature('login com falha');

Scenario('realizando login sem preencher email e senha', async ({ I }) => {
 I.amOnPage('/');
  I.click('Signup / Login');
  I.click('[data-qa="login-button"]');

  I.seeElement('[data-qa="login-email"]:invalid');
  I.seeElement('[data-qa="login-password"]:invalid');

});

Scenario('Login sem senha', async ({ I }) => {
  I.amOnPage('/');
  I.click('Signup / Login');
  I.fillField('[data-qa="login-email"]', 'lschmitt590@gmail.com');
  I.click('[data-qa="login-button"]');

  I.seeElement('[data-qa="login-password"]:invalid');
});

Scenario('Login sem email', async ({ I }) => {
  I.amOnPage('/');
  I.click('Signup / Login');
  I.fillField('[data-qa="login-password"]', '123456');
  I.click('[data-qa="login-button"]');

  I.seeElement('[data-qa="signup-email"]:invalid');
});

Scenario('Login com email invalido', async ({ I }) => {
  I.amOnPage('/');
  I.click('Signup / Login');
  I.fillField('[data-qa="login-password"]', '123456');
  I.fillField('[data-qa="login-email"]', 'lschmitt59@gmail.com');
  I.click('[data-qa="login-button"]');

  I.see('Your email or password is incorrect!');
});

Scenario('Login com senha invalida', async ({ I }) => {
  I.amOnPage('/');
  I.click('Signup / Login');
  I.fillField('[data-qa="login-password"]', '1234567');
  I.fillField('[data-qa="login-email"]', 'lschmitt590@gmail.com');
  I.click('[data-qa="login-button"]');

  I.see('Your email or password is incorrect!');
});