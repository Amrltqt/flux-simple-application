/**
 * Stockage des films que l'on veux selectionner.
 * Un film c'est un un titre lié à un identifiant
 * et une position dans l'ordre d'affichage
 */
var AppDispatcher = require('../dispatchers/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var FilmConstants = require('../constants/FilmConstants');
var assign = require('object-assign');
var uuid = require('uuid');


var CHANGE_EVENT = 'change';

var _films = {}; // Ensemble des films de l'application.

var _filmsPosition = []; // Ensemble des films de l'application.s


/**
 * Création d'un nouveau film
 * @param {string} title Titre du film à ajouter
 */
function create(title) {
  var id = uuid.v4();
  _films[id] = {
    id: id,                                   // Identifiant généré
    title: title,                             // Titre du film
  };
  _filmsPosition.push(_films[id]);
  console.log(_films);
  console.log(_filmsPosition);
}

/**
 * Suppression du film dans le Store
 * @param {uuid} id Identifiant du film à supprimer.
 */
function destroy(id) {
  delete _films[id];
}

var FilmStore = assign({}, EventEmitter.prototype, {

  /**
   * Charge la liste de titre Json présente dans ./data/init.json
   */
  getInitialFilmState: function() {
    var filmsTitles = [
      "Hôtel Terminus",
      "De bruit et de fureur",
      "Thérèse",
      "Sans toit ni loi",
    ];
    var index = 0;
    for (var key in filmsTitles) {
      var id = uuid.v4();
      _films[id] = {id: id, title: filmsTitles[key]};
      _filmsPosition.push(_films[id]);
    }

    return _films;
  },

  /**
   * Retourne l'ensemble des films du Store
   * @return {object}
   */
   getAll: function() {
     return _films;
   },

   /**
    * DP Observer, envois un message indiquant qu'une modification
    * du Store à eu lieu.
    */
   emitChange: function() {
     this.emit(CHANGE_EVENT);
   },

   /**
    * Ajoute une méthode pour réagir à la réception d'un message
    * CHANGE_EVENT
    * @param {function} callback
    */
   addChangeListener: function(callback) {
     this.on(CHANGE_EVENT, callback)
   },

   /**
    * Suppression de la méthode associée à la réception du message
    * CHANGE_EVENT
    * @param {function} callback
    */
   removeChangeListener: function(callback) {
     this.removeListener(CHANGE_EVENT, callback);
   },


   dispatcherIndex: AppDispatcher.register(function(payload) {
     var action = payload.actionType;
     var text;

     switch(action) {
       case FilmConstants.FILM_CREATE:
         var title = payload.title.trim();
         if (title !== '') {
           create(title);
           // On averti les Listeners qu'on a effectué un changement sur le Store
           FilmStore.emitChange();
         }
         break;

       case FilmConstants.FILM_DESTROY:
         destroy(payload.id);
         FilmStore.emitChange();
         // On averti les Listeners qu'on a effectué un changement sur le Store
         break;
     }
   })
});

module.exports = FilmStore;
