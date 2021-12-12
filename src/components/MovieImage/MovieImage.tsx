import * as React from 'react';

import { NOT_FOUND_IMG_URL } from 'src/constants';

type Props = {
  className?: string;
  src: string;
  alt: string;
};

export const MovieImage: React.FC<Props> = ({ className, src, alt }) => {
  const [hasError, setHasError] = React.useState(false);
  const handleError = (e: React.BaseSyntheticEvent<ErrorEvent, HTMLImageElement, HTMLImageElement>): void => {
    const { target: image } = e || {};
    console.log('handle');
    image.onerror = () => {};
    console.log(image.onerror);
    if (image?.src && !hasError) {
      setHasError(true);
      image.src = NOT_FOUND_IMG_URL;
    }
  };
  console.log('img render')
  return <img className={className} src={src || NOT_FOUND_IMG_URL} alt={alt} onError={handleError} />;
};
