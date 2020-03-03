# 0002-static-testing-tools

yarn add eslint -D
npx eslint .

Eslint by default parses files in ecmascript version 5
But we configure to use latest features of JS to ecmascript 2019

Install ESLint extension for VsCode and getting visual feedback directly in code
npx eslint . --fix
We can also run "Command + ." to call autofix inside VsCode

Install Prettier
yarn add prettier -D
npx prettier src/example.js
npx prettier src/example.js --write
    - Formata e salva o arquivo atualizado