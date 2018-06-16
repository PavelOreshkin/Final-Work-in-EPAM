import React, { Component } from 'react';
import ParticularFilm from '../ParticularFilm';
import PanelDirector from '../PanelDirector';
import FoundMovies from '../FoundMovies';
import Footer from '../Footer';
import { particularFilm, filmByDirector } from '../../api';
import { withRouter } from 'react-router';

class ParticularFilmPage extends Component {
  state = {
    film: {},
    filmByDirector: {
      byId: {},
      allFilmId: []
    }
  }  

  componentDidMount() {
    particularFilm(this.props.match.params.title)
      .then(response => {
        this.setState({ film: response[0] });
        return response[0];
      })
      .then(response => filmByDirector(response.director))
      .then(response => {
        response = response.filter(item => item.id !== this.state.film.id);
        const allFilmId = response.map(item => item.id);
        let byId = {};
        response.forEach(item => byId[item.id] = item);
        return {
          byId: byId,
          allFilmId: allFilmId
        }
      })
      .then(response => this.setState({ filmByDirector: response }))
  };

  render() {
    return (
      <div className='particularFilmPage'>
        <ParticularFilm film={this.state.film} />
        <PanelDirector film={this.state.film} />
        <FoundMovies rerender={this.rerender} foundMovies={this.state.filmByDirector} location={this.props.location}/>
        <Footer />
      </div>
    )
  }
}

export default withRouter(ParticularFilmPage);