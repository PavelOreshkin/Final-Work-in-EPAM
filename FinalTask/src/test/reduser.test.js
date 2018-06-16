import {favoritFilm} from '../redux/reducers/reducer';
import {TOGGLE_FAVORIT,toggleFavorit} from '../redux/actions/action';

describe('favoritFilm reducer', () => {
  it('should return the initial state', () => {
    expect(favoritFilm(undefined, {})).toEqual([])
  })
  it('shoud handel TOGGLE_FAVORIT (add to Favorit)', () => {
    const film = {
      "id": 1,
      "title": "Beetlejuice",
      "year": "1988",
      "runtime": "92",
      "genres": [
        "Comedy",
        "Fantasy"
      ],
      "director": "Tim Burton",
      "actors": "Alec Baldwin, Geena Davis, Annie McEnroe, Maurice Page",
      "plot": "A couple of recently deceased ghosts contract the services of a \"bio-exorcist\" in order to remove the obnoxious new owners of their house.",
      "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUwODE3MDE0MV5BMl5BanBnXkFtZTgwNTk1MjI4MzE@._V1_SX300.jpg"
    };
    const initialState = [];
    const resultState = [film];
    const action = toggleFavorit(film);
    expect(favoritFilm(initialState, action)).toEqual(resultState);
  })
  it('shoud handel TOGGLE_FAVORIT (remove from favorites)', () => {
    const film = {
      "id": 1,
      "title": "Beetlejuice",
      "year": "1988",
      "runtime": "92",
      "genres": [
        "Comedy",
        "Fantasy"
      ],
      "director": "Tim Burton",
      "actors": "Alec Baldwin, Geena Davis, Annie McEnroe, Maurice Page",
      "plot": "A couple of recently deceased ghosts contract the services of a \"bio-exorcist\" in order to remove the obnoxious new owners of their house.",
      "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUwODE3MDE0MV5BMl5BanBnXkFtZTgwNTk1MjI4MzE@._V1_SX300.jpg"
    };
    const initialState = [film];
    const resultState = [];
    const action = toggleFavorit(film);
    expect(favoritFilm(initialState, action)).toEqual(resultState);
  })
})