/**
 * @jsx React.DOM
 */

var ListFilm = require('./ListFilm.react')
var React = require('react');
var FilmStore = require('../stores/FilmStore');


/**
 * Retourne l'ensemble des objets contenus par le Store films
 * @return {object}
 */
function getFilmState() {
  return {
    films: FilmStore.getAll(),
    filmPositions: FilmStore.getFilmPosition()
  };
}

function getInitialFilmState() {
  return {
    films: FilmStore.getInitialFilmState(),
    filmPositions: FilmStore.getFilmPosition()
  };
}

var FilmApp = React.createClass({

  getInitialState: function() {
    return getInitialFilmState();
  },

  componentDidMount: function() {
    FilmStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    FilmStore.removeChangeListener(this._onChange);
  },


  render: function() {
    console.log(this.state.filmPositions);
    return (
      <div>
        <ListFilm allFilms={this.state.films} filmPositions={this.state.filmPositions}/>
      </div>
    );
  },

  _onChange: function() {
    this.setState(getFilmState());
  }

});

module.exports = FilmApp;
