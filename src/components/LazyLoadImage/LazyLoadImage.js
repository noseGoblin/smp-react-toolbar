import React from 'react';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const MyImage = ({ image }) => (
  <div>
    <LazyLoadImage
      alt={image.alt}
      title={image.title}
      height={image.height}
      width={image.width}
      effect="blur"
      src={image.src}
    />
    <span>{image.caption}</span>
  </div>
);

export default MyImage;