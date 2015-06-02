/**
 * Définition de l'application React en JSX
 */

var Application = require('./components/FilmApp.react')
var React = require('react');

React.render(
  <Application />,
  document.getElementById('main')
);
