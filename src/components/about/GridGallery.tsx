
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

interface GalleryItem {
  image: StaticImport;
  imageHeader?: string;
  title?: string;
  description?: string;
}

interface GridGalleryProps {
  items: GalleryItem[];
}

const GridGallery: React.FC<GridGalleryProps> = ({ items }) => {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 p-4">
      {items.map((item, index) => (
        <div key={index} className="mb-4 break-inside-avoid">
          <div className="relative overflow-hidden group rounded-lg shadow-lg">
            <Image
              src={item.image}
              alt="De Blessings Salon"
              className="w-full h-auto object-cover transition-transform duration-300 transform group-hover:scale-110"
              layout="responsive"
              width={500}
              height={320}
            />
            <div className="absolute inset-0 h-full bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-center text-white p-4 flex flex-col gap-6">
                <h2 className="text-lg font-bold hover:text-orange-600">{item.title}</h2>
                <p className="mt-2 text-sm">{item.description}</p>
              </div>
            </div>
          </div>
          {item.imageHeader && <h2 className="text-xl my-2">{item.imageHeader}</h2>}
        </div>
      ))}
    </div>
  );
};

export default GridGallery;
