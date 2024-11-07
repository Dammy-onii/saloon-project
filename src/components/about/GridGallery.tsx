
import React from "react";

interface GalleryItem {
  image: string;
  imageHeader?: string;
  title?: string;
  description?: string;
}

interface GridGalleryProps {
  items: GalleryItem[];
}

const GridGallery: React.FC<GridGalleryProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
      {items.map((item, index) => (
        <div key={index} className=" ">
          <div className=" relative overflow-hidden group rounded-lg shadow-lg ">
            <img
              src={item.image}
              alt="De Blessings Salon"
              className="w-full h-80 object-cover transition-transform duration-300 transform group-hover:scale-110"
            />
            <div className="absolute inset-0 h-full bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-center text-white p-4">
                <h2 className="text-lg font-bold">{item.title}</h2>
                <p className="mt-2 text-sm">{item.description}</p>
              </div>
            </div>
          </div>
          <h2 className=" text-xl my-2 ">{item.imageHeader}</h2>
        </div>
      ))}
    </div>
  );
};

export default GridGallery;
