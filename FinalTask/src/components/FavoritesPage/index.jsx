import React, { Component } from 'react';
import './index.scss';
import Footer from '../Footer';
import FoundMovies from '../FoundMovies';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const propTypes = {
  favoritFilm: PropTypes.array
};

class FavoritesPage extends Component {
  state = {
    film: {},
    favoritFilm: {
      byId: {},
      allFilmId: []
    }
  }
  componentDidMount() {
    const allFilmId = this.props.favoritFilm.map(item => item.id);
    let byId = {};
    this.props.favoritFilm.forEach(item => byId[item.id] = item)
    this.setState({ favoritFilm: {
      byId: byId,
      allFilmId: allFilmId
    }})
  };

  render() {
    return (
      <div className='favoritesPage'>
        <div className="favoritesPage_content">
          <FoundMovies foundMovies={this.state.favoritFilm} />
        </div>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    favoritFilm: state.favoritFilm
  }
}

FavoritesPage.propTypes = propTypes;

export default connect(mapStateToProps)(FavoritesPage)