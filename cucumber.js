const path = require('path');
const common = `
  --require config/config.js
  --require setup/assertions.js
  --require setup/hooks.js
  --require step-definitions/**/*.steps.js
  --require features/support/**/*.js
  --publish-quiet
  --format progress-bar
  --format json:reports/cucumber_report.json
  --parallel 1
  --retry 1
`;

module.exports = {
  default: `${common} features/**/*.feature`,
  timeout: 50000,
  
  // Profile for CI environment
  ci: `${common}
    --format html:reports/cucumber_report.html
    --tags "@smoke"
    features/**/*.feature`
};