# 0002-static-testing-tools

yarn add eslint -D
npx eslint .

Eslint by default parses files in ecmascript version 5
But we configure to use latest features of JS to ecmascript 2019

Install ESLint extension for VsCode and getting visual feedback directly in code
npx eslint . --fix
We can also run "Command + ." to call autofix inside VsCode

Install Prettier
    - Enable and configure settings.json for VsCode workspace
        <pre><code>"editor.formatOnSave": true,
        "editor.defaultFormatter": "esbenp.prettier-vscode"
        </code></pre>
    - Or even specify to which extensions you want to enable it
        <pre><code>"[javascript]": {
            "editor.formatOnSave": true,
            "editor.defaultFormatter": "esbenp.prettier-vscode"
        },
        </code></pre>
yarn add prettier -D
npx prettier src/example.js
npx prettier src/example.js --write
    - Formats and save the updated file
https://prettier.io/playground/
    - Allow you to customize configuration as needed, then copy JSON to the project

yarn add eslint-config-prettier -D
eslint-config-prettier, disables any rules that prettier renders useless
a few ESLint plugins are supported as well: react, vue, babel, etc

- Install and configure Babel
    <pre><code>"@babel/cli": "^7.7.0",
    "@babel/core": "^7.7.2",
    "@babel/preset-env": "^7.7.1",</code></pre>
- Install Typescript
    yarn add typescript -D
    npx tsc
    "noEmit": true, // do not compile my files, let babel do it
- Installed and configured Babel
    - Enabled Babel to parse Typescript
        - "@babel/preset-typescript": "^7.7.2",
        - Insert configuration into .babelrc
- Install Typescript and Eslint plugins
    - yarn add @typescript-eslint/eslint-plugin -D
    - yarn add @typescript-eslint/parser -D
    - Configure extends in .eslintrc
        "plugin:@typescript-eslint/eslint-recommended",
            - disable rules typescript render unnecessary
        "plugin:@typescript-eslint/recommended",
            - usefull for typescript rules, good practice to have it installed and configured
        "eslint-config-prettier/@typescript-eslint"
            - disable rules that conflict between typescript and prettier

- Validate code in a pre-commit git hook with Husky
* To work with Husky, package.json must be at the same directory as the .git folder
    - yarn add husky -D
    - ls -a .git/hooks to check which hooks exists
    - create .huskyrc and bind to pre-commit

- Auto format all files and validate relevant files in a precommit script with lint-staged
    - yarn add lint-staged -D
    - create .lintstagedrc
    - modify .huskyrc