import * as React from 'react';

import { NOT_FOUND_IMG_URL } from 'src/constants';

type Props = {
  className?: string;
  src: string;
  alt: string;
};

export const MovieImage: React.FC<Props> = ({ className, src, alt }) => {
  const handleError = (e: React.BaseSyntheticEvent<ErrorEvent, HTMLImageElement, HTMLImageElement>): void => {
    const { target: image } = e || {};
    if (image?.src) {
      image.src = NOT_FOUND_IMG_URL;
    }
  };
  return <img className={className} src={src} alt={alt} onError={handleError} />;
};
