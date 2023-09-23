// Import React and other necessary modules
import React from 'react';

import ItemCard from './utils/ItemCard';
import { StaticImageData } from 'next/image';
import TitleText from './utils/TitleText';

// Define the interface for SaleItem and SalesProps (same as your previous code)
interface SaleItem {
  id: string;
  title: string;
  text: string;
  rating: string;
  btn: string;
  img: StaticImageData;
  price: string;
  color: string;
  shadow: string;
}

interface SalesProps {
  title: string;
  items: SaleItem[];
  ifExists: boolean;
}

// Define the Sales component
const Sales: React.FC<SalesProps> = ({ title, items, ifExists }) => {
  return (
    <div>
      <div className="nike-container">
        <TitleText title={title} />
        <div
          className={`grid items-center justify-items-center  gap-7 lg:gap-5 mt-7 ${
            ifExists
              ? 'grid-cols-3  md:grid-cols-1 xl:grid-cols-2 sm:grid-cols-1'
              : 'grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'
          }`}
        >
          {items?.map((item, index) => {
            return <ItemCard item={item} key={index} ifExists={ifExists} />;
          })}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Sales;
