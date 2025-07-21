Feature('Falhas no Cadastro');

Scenario('Cadastro sem preencher nenhum campo', async ({ I }) => {
  I.amOnPage('/');
  I.click('Signup / Login');
  I.click('[data-qa="signup-button"]');

  I.seeElement('[data-qa="signup-name"]:invalid');
  I.seeElement('[data-qa="signup-email"]:invalid');
});

Scenario('Cadastro sem email', async ({ I }) => {
  I.amOnPage('/');
  I.click('Signup / Login');
  I.fillField('[data-qa="signup-name"]', 'João Teste');
  I.click('[data-qa="signup-button"]');

  I.seeElement('[data-qa="signup-email"]:invalid');
});

Scenario('Cadastro sem nome', async ({ I }) => {
  I.amOnPage('/');
  I.click('Signup / Login');
  I.fillField('[data-qa="signup-email"]', 'teste@email.com');
  I.click('[data-qa="signup-button"]');

  I.seeElement('[data-qa="signup-name"]:invalid');
});

Scenario('Cadastro com email já cadastrado', async ({ I }) => {
  I.amOnPage('/');
  I.click('Signup / Login');
  I.fillField('[data-qa="signup-name"]', 'Luis Schmitt');
  I.fillField('[data-qa="signup-email"]', 'lschmitt590@gmail.com');
  I.click('[data-qa="signup-button"]');

  // Aguarda e verifica a mensagem de erro
  I.waitForText('Email Address already exist!', 5); // Ajuste a mensagem conforme a real
});
