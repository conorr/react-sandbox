react-sandbox
====

A ready-to-go environment for fiddling with ES6 React
----

### Features

- ES6 support via Babel
- Support for ES6-flavored React
- JSX support
- webpack-dev-server for incremental rebuilds upon save
- Webpack hot module replacement -- no need to reload the page to see your changes
- Includes Bootstrap 3.3.4

### Instructions

1. Run ```npm install```. If you get an ```EACCES``` error during install, this is because npm is trying to install a global dependency (Webpack) and cannot due to permissions. Do not try to fix this using sudo! Follow these instruction instead: https://docs.npmjs.com/getting-started/fixing-npm-permissions
2. Run ```npm run server``` and go to http://localhost:8080 in your web browser
