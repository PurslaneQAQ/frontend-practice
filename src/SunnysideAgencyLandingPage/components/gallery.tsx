import React from 'react';

export type ImgProps = {
  imageUrl: string;
}

const Gallery:React.FC<{gallery: ImgProps[]}> = ({ gallery }) => (
  <div className="flex w-screen flex-wrap">
    {
      gallery.map(({ imageUrl }, i) => (
        <div className="md:w-1/4 w-1/2" key={imageUrl}>
          <img className="w-full" alt={`gallery-${i}`} src={imageUrl} />
        </div>
      ))
    }

  </div>
);

export default Gallery;
