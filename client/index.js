const React = require('react');
const { hydrateRoot } = require('react-dom/client');
const App = require('../src/App');

hydrateRoot(
  document.getElementById('root'),
  React.createElement(App)
);