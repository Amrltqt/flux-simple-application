var React = require('react');
var FilmActions = require('../actions/FilmActions');

var FilmItem = React.createClass({

  render: function() {
    var film = this.props.film;
    return (
      <li className="film-item list-group-item">
        <span className="film-title">{ film.title }  </span>
        <span className="up-action-film ">
          <button className="btn btn-default  btn-xs" onClick={this._onMoveUp}> Up </button>
        </span>
        <span className="down-action-film">
          <button className="btn btn-default  btn-xs" onClick={this._onMoveDown}> Down </button>
        </span>
      </li>
    );
  },


  _onMoveUp: function(/*object*/event) {
    console.log(event);
    FilmActions.moveUp(this.props.film.id);
  },

  _onMoveDown: function(/*object*/event) {
    FilmActions.moveDown(this.props.film.id);
  }
});

module.exports = FilmItem;
