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