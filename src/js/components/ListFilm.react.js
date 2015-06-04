var React = require('react');
var ReactPropTypes = React.PropTypes;
var FilmItem = require('./FilmItem.react');
var FilmActions = require('../actions/FilmActions');


var ListFilm = React.createClass({

  render: function() {

    // Si il n'y a pas de film dans la liste.
    if (Object.keys(this.props.allFilms).length < 1) {
      return null;
    }

    var allFilms = this.props.allFilms;
    var filmsPosition = this.props.filmPositions;

    var films = [];
    for (var indexPosition in filmsPosition) {
      var currentKey = filmsPosition[indexPosition];
      films.push(<FilmItem key={currentKey}
                           film={allFilms[currentKey]}
                           OnMoveUp={this._onMoveUp}
                           OnMoveDown={this._onMoveDown}/>);
    }
    console.log(allFilms);
    console.log(filmsPosition);
    return (
      <div>
        <ul id="list-films list-group">
          { films }
        </ul>
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Ajouter un film" ref="inputFilm"/>
          <span className="input-group-btn">
            <button className="btn btn-default" type="button" onClick={this._onClickAddFilm}>Ajouter</button>
          </span>
        </div>
      </div>
    );
  },

  /**
   * React to the onclick
   */
  _onClickAddFilm: function(/*object*/event) {
    var title = React.findDOMNode(this.refs.inputFilm).value;
    FilmActions.create(title);
  },

});

module.exports = ListFilm;
