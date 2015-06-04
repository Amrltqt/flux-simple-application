var React = require('react');
var FilmActions = require('../actions/FilmActions');

var FilmItem = React.createClass({

  render: function() {
    var film = this.props.film;
    return (
      <tr className="film-item">
        <td>{ film.title } </td>
        <td>
          <button className="btn btn-success  btn-xs" onClick={this._onMoveUp}> Up </button>
        </td>
        <td>
          <button className="btn btn-danger  btn-xs" onClick={this._onMoveDown}> Down </button>
        </td>
      </tr>
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
