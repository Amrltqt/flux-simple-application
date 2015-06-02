var AppDispatcher = require('../dispatchers/AppDispatcher');
var FilmConstants = require('../constants/FilmConstants');

var FilmActions = {


  /**
   * Invoke FILM_CREATE from store
   */
  create: function(title) {
    AppDisptacher.dispatch({
      actionType: FilmConstants.FILM_CREATE,
      title: title
    });
  },

  destroy: function(id) {
    AppDispatcher.dispatch({
      actionType: FilmConstants.FILM_DESTROY,
      id: id
    });
  }
};

module.exports = FilmActions;
