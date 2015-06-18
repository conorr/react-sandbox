react-sandbox
====

A turnkey environment for fiddling with ES6-flavored React
----

### Includes

- ES6 and JSX support via Babel
- Support for [ES6 classes](http://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html#es6-classes) for React components
- Incremental rebuilds on save using webpack-dev-server
- Bootstrap 3.3.4 for rapid prototyping

### Getting Started

1. Clone the repo: `git clone https://github.com/conorr/react-sandbox.git`
2. Run `npm install`. If you get an `EACCES` error, this is because npm is trying to install a necessary global dependency and cannot due to permissions. Do not try to fix this using sudo! Follow [these instructions]( https://docs.npmjs.com/getting-started/fixing-npm-permissions) instead.
3. Run `npm run server` and go to http://localhost:8080 in your web browser.
