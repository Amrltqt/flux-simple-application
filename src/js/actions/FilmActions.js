var AppDispatcher = require('../dispatchers/AppDispatcher');
var FilmConstants = require('../constants/FilmConstants');

var FilmActions = {


  /**
   * Invoke FILM_CREATE from store
   */
  create: function(title) {
    AppDispatcher.dispatch({
      actionType: FilmConstants.FILM_CREATE,
      title: title
    });
  },

  /**
   * Invoke FILM_DESTROY from store
   */
  destroy: function(id) {
    AppDispatcher.dispatch({
      actionType: FilmConstants.FILM_DESTROY,
      id: id
    });
  },


  /**
   * Invoke FILM_MOVE_UP from store
   */
  moveUp: function(id) {
    console.log(id);
    AppDispatcher.dispatch({
      actionType: FilmConstants.FILM_MOVE_UP,
      id: id
    })
  },

  /**
   * Invoke FILM_MOVE_DOWN from store
   */
  moveDown: function(id) {
    AppDispatcher.dispatch({
      actionType: FilmConstants.FILM_MOVE_DOWN,
      id: id
    })
  }
};

module.exports = FilmActions;
