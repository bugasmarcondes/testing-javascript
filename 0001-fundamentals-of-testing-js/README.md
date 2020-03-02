# fundamentals-of-testing-js

## 0005-globals.js
node --require ./setup-globals.js 0005-globals.js

## 0006-jest.test.js
npx jest

## NPM vs NPX

**NPM**
1. online repository for the publishing of open-source Node.js projects
2. CLI tool that aids you install those packages and manage their versions and dependencies
- When executables are installed via npm packages, npm creates links to them:
    - local installs have links created at the ./node_modules/.bin/ directory
    - global installs have links created from the global bin/ directory (for example: /usr/local/bin on Linux or at %AppData%/npm on Windows)

**NPX (npx the package runner)**
- since npm version 5.2.0 npx is pre-bundled with npm
- is also a CLI tool whose purpose is to make it easy to install and manage dependencies hosted in the npm registry
- it’s now very easy to run any sort of Node.js based executable that you would normally install via npm
- another major advantage is the ability to execute a package that wasn’t previously installed.