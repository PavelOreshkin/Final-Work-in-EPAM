import React, { Component } from 'react';
import './index.scss';
import { connect } from 'react-redux';
import { serchFilms } from '../../redux/actions/action';
import { Link } from 'react-router-dom';
import arrow from '../../img/arrow.png';
import PropTypes from 'prop-types';

const propTypes = {
  foundMovies: PropTypes.object,
  serchFilms: PropTypes.func,
  input: PropTypes.string,
  serchOptions: PropTypes.string,
  sortOptions: PropTypes.string,
  toggleOption: PropTypes.func,
  handleKeyPress: PropTypes.func,
  onInputChange: PropTypes.func,
  search: PropTypes.func
};

class SearchToolbar extends Component {

  onInputChange = (event) => {
    this.props.onInputChange(event);
  }

  toggleOption = (event) => {
    this.props.toggleOption(event);
  }

  search = () => {
    this.props.search(this.state);
  }

  handleKeyPress = (event) => {
    this.props.handleKeyPress(event);
  }

  render() {
    return (
      <div className='searchToolbar-background-url'>
        <div className='searchToolbar-background-opacity'>
          <header className='searchToolbar'>
            <p className='searchToolbar_netflix'> netflixroulette</p>
            <h2 className='searchToolbar_title'>find your movie</h2>
            <input value={this.props.input} onChange={this.onInputChange} onKeyPress={this.handleKeyPress} className='searchToolbar_input' type="text" />
            <img className='searchToolbar_arrow' src={arrow} alt='arrow' />
            <p className='searchToolbar_toggleTitle'>search by</p>
            <button className={this.props.serchOptions === 'title' ? 'searchToolbar_toggle searchToolbar_toggle__activ' : 'searchToolbar_toggle'} onClick={this.toggleOption} value='title'>title</button>
            <button className={this.props.serchOptions === 'director' ? 'searchToolbar_toggle searchToolbar_toggle__activ' : 'searchToolbar_toggle'} onClick={this.toggleOption} value='director'>director</button>
            <button className='searchToolbar_buttonSearch' onClick={this.search}>search</button>
            <Link className='searchToolbar_favoritLink' to='/favorites'>favorit films</Link>
          </header>
        </div>
      </div>
    )
  }
}

SearchToolbar.propTypes = propTypes;

export default connect(null, { serchFilms })(SearchToolbar);