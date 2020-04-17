import React from 'react';
import Img from 'gatsby-image';

const Carousel = (fluids) => {
  return fluids.fluids.map(fluid => <Img fluid={{ ...fluid, aspectRatio: 1}}/>);
}

export default Carousel;
