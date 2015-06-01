/**
 * Définition de l'application React en JSX
 */

var Application = require('./components/BaseComponent.react')
var React = require('react');

React.render(
  <Application />,
  document.getElementById('main')
);
