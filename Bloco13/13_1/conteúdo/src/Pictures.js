import React from 'react';
import PropTypes from 'prop-types';

const Pictures = (props) => {
  const { height, src, alt, legenda } = props;
  return (
    <div>
      <img src={src} alt={alt} height={height} />
      <p>{legenda}</p>
    </div>
  );
}

Pictures.propTypes = {
  alt: PropTypes.string.isRequired,
  height: PropTypes.number,
  src: PropTypes.string.isRequired,
};

Pictures.defaultProps = {
  height: 400,
};

export default Pictures;
