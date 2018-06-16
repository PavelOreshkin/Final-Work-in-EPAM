import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducer } from '../reducers/reducer';
import { saveState, loadState } from "../../localStorage";
import throttle from 'lodash/throttle';

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const presistedState = {
  movies: {
    byId: {},
    allFilmId: []
  },
  favoritFilm: loadState()
};

export const store = createStore(reducer, presistedState, composeEnchancers(applyMiddleware(thunk)));

store.subscribe(throttle(() => {
  saveState(
    store.getState().favoritFilm
  );
}, 1000));