import React, { Component } from 'react';
import './index.scss';
import { connect } from 'react-redux';
import { serchFilms } from '../../redux/actions/action';
import PropTypes from 'prop-types';

const propTypes = {
  foundMovies: PropTypes.object,
  serchFilms: PropTypes.func,
  input: PropTypes.string,
  serchOptions: PropTypes.string,
  sortOptions: PropTypes.string,
  sortOptionsChange: PropTypes.func
};

class SortToolbar extends Component {

  sortOptionChange = (event) => {
    this.props.sortOptionChange(event);
  }

  render() {
    return (!this.props.foundMovies.allFilmId.length) ? (<div className='sortToolbar'></div>) :
      (
        <div className='sortToolbar'>
          <div className='sortToolbar_movieFound'>{this.props.foundMovies.allFilmId.length} movies found</div>
          <div className='sortToolbar_right'>
            <div className='sortToolbar_sortBy'>Sort by</div>
            <button className={this.props.sortOption === 'year' ? 'sortToolbar_toggle sortToolbar_toggle__activ' : 'sortToolbar_toggle'} onClick={this.sortOptionChange} value='year'>release date</button>
            <button className={this.props.sortOption === 'runtime' ? 'sortToolbar_toggle sortToolbar_toggle__activ' : 'sortToolbar_toggle'} onClick={this.sortOptionChange} value='runtime'> runtime </button>
          </div>
        </div>
      )
  }
}

SortToolbar.propTypes = propTypes;

export default connect(null, { serchFilms })(SortToolbar);
