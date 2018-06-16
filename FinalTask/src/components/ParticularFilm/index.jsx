import React, { Component } from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import Description from '../Description'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleFavorit } from "../../redux/actions/action";

const propTypes = {
  film: PropTypes.object,  
  favoritFilm: PropTypes.array,
  inFavorit: PropTypes.bool,
  toggleFavorit: PropTypes.func
};

export class ParticularFilm extends Component {

  toggle = (event) => {
    this.props.toggleFavorit(this.props.film);
  }

  render() {
    return (
      <div className='particularFilm-background-url' >
        <div className='particularFilm-background-opacity'>
          <header className='particularFilm'>
            <div className='particularFilm_top'>
              <p className='particularFilm_netflix'> netflixroulette</p>
              <Link className='particularFilm_searchButton' to='/home'>search</Link>
            </div>
            <div className='particularFilm_content'>
              <div className='particularFilm_posterWraper'>
                <div className='particularFilm_corner' />
                <i className={this.props.inFavorit === false ? 'material-icons' : 'material-icons material-icons__activ'} onClick={this.toggle}>star</i>
                <img className='particularFilm_poster' src={this.props.film.posterUrl} alt={this.props.film.title} />
              </div>
              <Description film={this.props.film} />
            </div>
          </header>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    favoritFilm: state.favoritFilm,
    inFavorit: state.favoritFilm.some((item) => (item.id === ownProps.film.id))
  }
};

const mapDispatchToProps = {
  toggleFavorit
};

ParticularFilm.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(ParticularFilm);