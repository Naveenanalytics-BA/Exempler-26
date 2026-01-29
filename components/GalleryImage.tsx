
import React from 'react';

interface GalleryImageProps {
  src: string;
  alt: string;
}

const GalleryImage: React.FC<GalleryImageProps> = ({ src, alt }) => {
  return (
    <div className="overflow-hidden rounded-xl shadow-lg group bg-gray-800 border border-gray-700 relative aspect-[4/3]">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full h-full object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-110 opacity-90 group-hover:opacity-100"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
};

export default GalleryImage;
