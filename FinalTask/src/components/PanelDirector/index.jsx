import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';

const propTypes = {
  film: PropTypes.object
};

const PanelDirector = ({ film }) => {
  return (
    <div className='panelDirector'>
      Films by {film.director}
    </div>
  )
}

PanelDirector.propTypes = propTypes;

export default PanelDirector;