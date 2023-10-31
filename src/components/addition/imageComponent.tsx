import { useState } from 'react';
import { ImageComponentProps } from '../../interfaces';

function ImageComponent({ src, alt }: ImageComponentProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div>
      {imageLoaded ? (
        <img src={src} alt={alt} />
      ) : (
        <img className="loader" src="/src/assets/loading.gif" alt="loader" />
      )}

      {imageLoaded || (
        <img
          src={src}
          alt={alt}
          style={{ display: 'none' }}
          onLoad={() => setImageLoaded(true)}
        />
      )}
    </div>
  );
}

export default ImageComponent;
