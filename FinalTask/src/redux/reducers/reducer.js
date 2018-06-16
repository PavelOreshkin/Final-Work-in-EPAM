import { ADD_FILM, TOGGLE_FAVORIT } from './../actions/action';
import { combineReducers } from 'redux';

const byId = (state = {}, action) => {
  switch (action.type) {
    case ADD_FILM: {
      let obj = {};
      action.films.forEach(item =>
        obj[item.id] = item
      );
      return obj
    }
    default: return state
  }
};

const allFilmId = (state = [], action) => {
  switch (action.type) {
    case ADD_FILM: {
      return action.films.map(item => item.id);
    }
    default: return state
  }
};

const movies = combineReducers({ byId, allFilmId })

export const favoritFilm = (state = [], action) => {
  switch (action.type) {
    case TOGGLE_FAVORIT: {
      if (!state.some( item => item.id === action.film.id)) {
        return [
          ...state,
          action.film
        ];
      } else {
        const index = state.findIndex(item => item.id === action.film.id)
        return [
          ...state.slice(0, index),
          ...state.slice(index+1)
        ]
      }     
    }
    default: return state
  }
};

export const reducer = combineReducers({ movies, favoritFilm});