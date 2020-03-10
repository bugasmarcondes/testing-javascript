const path = require("path");

module.exports = {
  projects: [
    path.join(__dirname, "./other/jest.config.js"),
    path.join(__dirname, "./other/jest.no-framework.config.js")
  ]
};
