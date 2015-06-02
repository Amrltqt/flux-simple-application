var React = require('react');
var ReactPropTypes = React.PropTypes;
var FilmActions = require('../actions/FilmActions');

var FilmItem = React.createClass({

  propTypes: {
    film: ReactPropTypes.object.isRequired
  },



  render: function() {
    var film = this.props.film;
    return (
      <li className="film-item list-group-item">
        <span className="film-title">{ film.title }  </span>
        <span className="up-action-film ">
          <a className="btn btn-default  btn-xs"> Up </a>
        </span>
        <span className="down-action-film">
          <a className="btn btn-default  btn-xs"> Down </a>
        </span>
      </li>
    );
  }
});

module.exports = FilmItem;
