import {search} from '../../api';
export const ADD_FILM = 'ADD_FILM';
export const TOGGLE_FAVORIT = 'TOGGLE_FAVORIT';

export const addFilm = (films) => ({
  type: ADD_FILM,
  films
});

export const toggleFavorit = (film) => ({
  type: TOGGLE_FAVORIT,
  film
})

export const serchFilms = (serchOptions, input, sortOption) => (dispatch) => {
  return search(serchOptions, input, sortOption)
    .then(response => dispatch(addFilm(response)))
};