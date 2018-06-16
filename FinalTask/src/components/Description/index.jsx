import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';

const propTypes = {
  film: PropTypes.object
};

const Description = ({ film }) => {
  return (film.genres) ? (
    <article className='description'>
      <div>
        <h1 className='description_title'>{film.title}</h1> <span className='description_raiting'>4.1</span>
      </div>
      <p>{film.genres.map((item, index) => <span key={index}>{item}, </span>)}</p>
      <p className='description_yearAndRuntime'>{film.year}</p>
      <p className='description_yearAndRuntime'> {film.runtime} min</p>
      <p className='description_descrption'>{film.plot}</p>
      <p className='description_directorAndActors'>Director: {film.director}</p>
      <p className='description_directorAndActors'>Cast: {film.actors}</p>
    </article>
  ) : null;
};

Description.propTypes = propTypes;

export default Description;