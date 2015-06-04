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

function moveUp(array, id) {
    var index = array.indexOf(id),
        newPos = index - 1;

    if(index === -1)
        throw new Error("Element not found in array");

    if(newPos < 0)
        newPos = 0;

    array.splice(index,1);
    array.splice(newPos,0, id);
};

function moveDown(array, id ) {
    var index = array.indexOf(id),
        newPos = index + 1;

    if(index === -1)
        throw new Error("Element not found in array");

    if(newPos >= array.length)
        newPos = array.length;

    array.splice(index, 1);
    array.splice(newPos,0, id);
};


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
      _filmsPosition.push(id);
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
    *
    */
   getFilmPosition: function() {
     return _filmsPosition;
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
           // Create an UUID for the current film title.
           var id = uuid.v4();
           _films[id] = {
             id: id,                                   // Identifiant généré
             title: title,                             // Titre du film
           };
           _filmsPosition.push(id);
           FilmStore.emitChange();
         }
         break;

       case FilmConstants.FILM_DESTROY:
         delete _films[payload.id];
         delete _filmsPosition[_filmsPosition.indexOf(payload.id)];
         FilmStore.emitChange();
         break;

       case FilmConstants.FILM_MOVE_UP:
         moveUp(_filmsPosition, payload.id, 1);
         FilmStore.emitChange();
         break;

       case FilmConstants.FILM_MOVE_DOWN:
         moveDown(_filmsPosition, payload.id, 1);
         FilmStore.emitChange();
         break;
     }
   })
});

module.exports = FilmStore;
