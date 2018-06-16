import React, { Component } from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleFavorit } from '../../redux/actions/action';

import PropTypes from 'prop-types';

const propTypes = {
  film: PropTypes.object,
  favoritFilm: PropTypes.array,
  toggleFavorit: PropTypes.func
};

class Movie extends Component {

  toggle = (event) => {
    this.props.toggleFavorit(this.props.film);
  }

  render() {
    return (
      <div className='movie'>
        <div className='movie_corner' />
        <i className={this.props.inFavorit === false ? 'material-icons' : 'material-icons material-icons__activ'} onClick={this.toggle}>star</i>
        <Link to={'/film/' + this.props.film.title}><img className='movie_poster' src={this.props.film.posterUrl} alt={this.props.film.title} /></Link>
        <div className='movie_content'>
          <div className='movie_title'>{this.props.film.title}</div>
          <div className='movie_genres'>{this.props.film.genres.map((item, index) => <span key={index}>{item} </span>)}</div>
          <div className='movie_year'>{this.props.film.year}</div>
        </div>
      </div>
    )
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    favoritFilm: state.favoritFilm,
    inFavorit: state.favoritFilm.some((item) => (item.id === ownProps.film.id))    
  }
};

const mapDispatchToProps = {
  toggleFavorit
};

Movie.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(Movie);