import React, { Component } from 'react';
import SearchToolbar from '../SearchToolbar';
import SortToolbar from '../SortToolbar';
import FoundMovies from '../FoundMovies';
import Footer from '../Footer';
import { connect } from 'react-redux';
import { serchFilms } from '../../redux/actions/action';
import PropTypes from 'prop-types';

const propTypes = {
  foundMovies: PropTypes.object
};

class SearchPage extends Component {
  state = {
    input: '',
    serchOptions: 'title',
    sortOption: 'year'
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  }

  toggleOption = (event) => {
    this.setState({ serchOptions: event.target.value });
  }

  search = () => {
    if (this.state.input.length !== 0) this.props.serchFilms(this.state.serchOptions, this.state.input, this.state.sortOption);
  }

  handleKeyPress = (event) => {
    if (this.state.input.length !== 0) {
      if (event.key === 'Enter') {
        this.props.serchFilms(this.state.serchOptions, this.state.input, this.state.sortOption);
      }
    }
  }

  sortOptionChange = (event) => {
    this.setState({ sortOption: event.target.value },
      () => { this.props.serchFilms(this.state.serchOptions, this.state.input, this.state.sortOption); }
    );
  }

  render() {
    return (
      <div className='searchPage'>
        <SearchToolbar
          foundMovies={this.props.foundMovies}
          input={this.state.input}
          serchOptions={this.state.serchOptions}
          sortOption={this.state.sortOption}
          onInputChange={this.onInputChange}
          toggleOption={this.toggleOption}
          search={this.search}
          handleKeyPress={this.handleKeyPress}
        />
        <SortToolbar
          foundMovies={this.props.foundMovies}
          input={this.state.input}
          serchOptions={this.state.serchOptions}
          sortOption={this.state.sortOption}
          sortOptionChange={this.sortOptionChange}
        />
        <FoundMovies foundMovies={this.props.foundMovies} />
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  foundMovies: state.movies,
})

SearchPage.propTypes = propTypes;

export default connect(mapStateToProps, { serchFilms })(SearchPage)