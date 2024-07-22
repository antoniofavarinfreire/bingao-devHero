# Bingo Game

Este é um projeto de jogo de bingo desenvolvido com Vue.js, TypeScript e Vuetify. O jogo consiste em duas cartelas, uma para o jogador e outra para a máquina. As bolas são chamadas aleatoriamente e a cartela da máquina é marcada automaticamente, enquanto o jogador deve marcar suas bolas manualmente.

## Funcionalidades

- **Geração Aleatória de Números:** As bolas são chamadas de forma aleatória.
- **Cartela da Máquina:** A cartela da máquina é marcada automaticamente conforme as bolas são chamadas.
- **Cartela do Jogador:** O jogador deve marcar manualmente os números em sua cartela.
- **Verificação de Vencedor:** O jogo verifica automaticamente se há uma coluna completa nas cartelas.

## Tecnologias Utilizadas

- **Vue.js:** Framework JavaScript para construção de interfaces de usuário.
- **TypeScript:** Um superconjunto de JavaScript que adiciona tipagem estática ao idioma.
- **Vuetify:** Framework de componentes de interface do usuário baseado no Material Design para Vue.js.

## Estrutura do Projeto

```plaintext
src
  ├── components
  │   ├── BingoBoard.vue
  │   ├── BingoGame.vue
  │   └── CalledNumbersBoard.vue
  ├── App.vue
  ├── db.ts
  ├── main.ts
  ├── shims-vue.d.ts
  └── store.ts
