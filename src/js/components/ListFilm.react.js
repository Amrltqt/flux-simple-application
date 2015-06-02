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
    for (var key in allFilms) {
      films.push(<FilmItem key={key} film={allFilms[key]} />);
    }

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
