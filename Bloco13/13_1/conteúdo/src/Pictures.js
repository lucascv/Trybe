import React from 'react';

const Pictures = (props) => {
  const { height, src, alt, legenda } = props;
  return (
    <img src={src} alt={alt} height={height}/>
  );
}

export default Pictures;
