# Aplicação Heroes-Frontend

# Rodar o projeto em Desenvolvimento:

- Subir front-end: ng s ou ng server
- Subir back-end: npm run backend

Exemplos para criar componentes (Comando tipo caminho/nome-componete):

- ng g c core/components/loading
- ng g s core/services/loading --skip-tests
- ng g interceptor core/interceptors/loading --skip-tests
- O parâmetro (--skip-tests) ao criar o componente não cria o arquivo de teste

Este projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) versão 15.2.6.

## Servidor de desenvolvimento

Execute `ng serve` para um servidor de desenvolvimento. Navegue até `http://localhost:4200/`. O aplicativo será recarregado automaticamente se você alterar qualquer um dos arquivos de origem.

## Estrutura de código

Execute `ng generate component component-name` para gerar um novo componente. Você também pode usar `ng generate Directive|pipe|service|class|guard|interface|enum|module`.

## Build

Execute `ng build` para construir o projeto. Os artefatos de construção serão armazenados no diretório `dist/`.

## Executando testes de unidade

Execute `ng test` para executar os testes de unidade via [Karma](https://karma-runner.github.io).

## Executando testes de ponta a ponta

Execute `ng e2e` para executar os testes de ponta a ponta por meio de uma plataforma de sua escolha. Para usar este comando, você precisa primeiro adicionar um pacote que implemente recursos de teste de ponta a ponta.

## Mais ajuda

Para obter mais ajuda sobre o Angular CLI, use `ng help` ou confira a página [Visão geral e referência de comando do Angular CLI](https://angular.io/cli).
