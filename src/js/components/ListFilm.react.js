var React = require('react');
var ReactPropTypes = React.PropTypes;
var FilmItem = require('./FilmItem.react');
var FilmActions = require('../actions/FilmActions');


var ListFilm = React.createClass({

  propTypes: {
    allFilms: ReactPropTypes.object.isRequired
  },

  render: function() {

    // Si il n'y a pas de film dans la liste.
    if (Object.keys(this.props.allFilms).length < 1) {
      return null;
    }

    var allFilms = this.props.allFilms;
    var films = [];
    for (var key in allFilms.allFilms) {
      console.log(allFilms.allFilms[key]);
      films.push(<FilmItem key={key} film={allFilms.allFilms[key]} />);
    }

    return (
      <ul id="list-films list-group">
        { films }
      </ul>
    );
  }
});

module.exports = ListFilm;
