
import React from 'react';

interface GalleryImageProps {
  src: string;
  alt: string;
}

const GalleryImage: React.FC<GalleryImageProps> = ({ src, alt }) => {
  return (
    <div className="overflow-hidden rounded-lg shadow-lg group">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110"
      />
    </div>
  );
};

export default GalleryImage;
