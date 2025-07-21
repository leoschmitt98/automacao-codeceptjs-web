# 🧪 Automação de Testes Web com CodeceptJS (Sem Page Object)

Projeto de automação de testes de interface usando **CodeceptJS** com **Playwright**, aplicando uma estrutura **direta**, **sem uso do padrão Page Object Model (POM)**. Ideal para demonstrar domínio de comandos básicos e fluxo simples de testes automatizados.

---

## 🎯 Objetivos

- Demonstrar testes automatizados com abordagem direta (sem abstrações).
- Servir como exemplo prático para entrevistas de QA ou estudo individual.
- Mostrar domínio sobre os comandos essenciais do CodeceptJS.
- Complementar um projeto estruturado com Page Object, permitindo comparação entre abordagens.

---

## 🧰 Tecnologias Utilizadas

| Tecnologia     | Finalidade                                  |
|----------------|----------------------------------------------|
| **Node.js**    | Ambiente de execução JavaScript              |
| **CodeceptJS** | Framework de testes automatizados            |
| **Playwright** | Controle de navegação no navegador (headless ou visual) |

---

## 📁 Estrutura do Projeto

```plaintext
automacao-codeceptjs-web/
│
├── tests/                      # Testes organizados por funcionalidade
│   ├── login/
│   │   ├── login_sucesso_test.js
│   │   └── login_falha_test.js
│   ├── cadastro/
│   │   ├── cadastro_sucesso_test.js
│   │   └── cadastro_falha_test.js
│   └── carrinho/
│       └── adicionar_carrinho_test.js
│
├── output/                     # Evidências dos testes (prints/logs)
├── codecept.conf.js            # Arquivo de configuração do CodeceptJS
├── package.json                # Dependências do projeto
├── .gitignore                  # Arquivos/pastas ignoradas pelo Git
└── README.md                   # Documentação do projeto
▶️ Como Executar os Testes
1. Instale as dependências
bash
Copiar
Editar
npm install
2. Execute todos os testes
bash
Copiar
Editar
npx codeceptjs run --steps
3. Execute um teste específico
bash
Copiar
Editar
npx codeceptjs run tests/login/login_falha_test.js --steps
📌 Observações
Este projeto não utiliza o padrão Page Object, facilitando o aprendizado e a visualização direta dos comandos.

Ideal para iniciantes em QA e para demonstrar conhecimento básico em entrevistas técnicas.

Serve como complemento para projetos mais estruturados com Page Object Model (ver meu outro repositório).

👤 Autor
Leonardo Wilenbring Schmitt
Estudante de Análise e Desenvolvimento de Sistemas | QA em formação
📧 lschmitt590@gmail.com
📍 Igrejinha – RS – Brasil




