var ListFilm = require('./ListFilm.react')
var React = require('react');
var FilmStore = require('../stores/FilmStore');


/**
 * Retourne l'ensemble des objets contenus par le Store films
 * @return {object}
 */
function getFilmState() {
  return {
    allFilms: FilmStore.getAll()
  };
}

function getInitialFilmState() {
  return {
    allFilms: FilmStore.getInitialFilmState()
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
    return (
      <div>
        <ListFilm allFilms={getFilmState()}/>
      </div>
    );
  },

  _onChange: function() {
    this.setState(getFilmState());
  }

});

module.exports = FilmApp;
