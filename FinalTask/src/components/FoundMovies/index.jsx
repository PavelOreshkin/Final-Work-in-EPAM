import React, { Component } from 'react';
import './index.scss';
import Movie from '../Movie';
import PropTypes from 'prop-types';

const propTypes = {
  foundMovies: PropTypes.object
};

class FoundMovies extends Component {

  render() {
    return (
      <article className='foundMovies'>
        <div className='foundMovies_content'>
          {(!this.props.foundMovies.allFilmId.length) ? <div className='foundMovies_noFound'>No films found</div> : this.props.foundMovies.allFilmId.map(id => <Movie film={this.props.foundMovies.byId[id]} key={id} />)}
        </div>
      </article>
    )
  }
}
FoundMovies.propTypes = propTypes;

export default FoundMovies;