import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import {ParticularFilm} from '../components/ParticularFilm/index';

Enzyme.configure({ adapter: new Adapter() });

describe('ParticularFilm test', () => {
  const props = {
    film: {
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
    },
    toggleFavorit: jest.fn()
  };

  it('should render ParticularFilm', () => {
    const element = shallow(<ParticularFilm {...props} />);
    expect(element.find('Description').props().film).toBe( props.film);
    expect(element.is('div')).toBe(true);
    expect(element.hasClass('particularFilm-background-url')).toBe(true);
    expect(element.find('div').at(1).hasClass('particularFilm-background-opacity')).toBe(true); 
    expect(element.find('div').at(2).hasClass('particularFilm_top')).toBe(true);
    expect(element.find('div').at(3).hasClass('particularFilm_content')).toBe(true);
    expect(element.find('div').at(4).hasClass('particularFilm_posterWraper')).toBe(true);
    expect(element.find('div').at(5).hasClass('particularFilm_corner')).toBe(true);
    expect(element.find('header').hasClass('particularFilm')).toBe(true);
    expect(element.find('p').hasClass('particularFilm_netflix')).toBe(true);
    expect(element.find('i').hasClass('material-icons')).toBe(true);
    expect(element.find('img').hasClass('particularFilm_poster')).toBe(true);
    expect(element.find('Link').hasClass('particularFilm_searchButton')).toBe(true);
    expect(element.find('p').text()).toBe(' netflixroulette');
    expect(element.find('i').text()).toBe('star');    
  })

  it('click', () => {
    const element = shallow(<ParticularFilm {...props} />);
    expect(props.toggleFavorit.mock.calls.length).toBe(0)
    element.find('.material-icons').simulate('click')
    expect(props.toggleFavorit.mock.calls.length).toBe(1)
  })

})
