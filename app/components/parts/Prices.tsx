// priceList.tsx
import React from "react";
import { PricesListItem } from "./typesPrices";

interface priceListProps {
  items: PricesListItem[];
  opt: string;
}

const priceList: React.FC<priceListProps> = ({ items, opt }) => {
  return (
    <div className={`grid grid-cols-1 pt-6 lg:pl-16 lg:pr-16 ${opt}`}>
      {items.map((item) => (
        <>
          <div className="font-bold text-center mb-5">
            <h1>{item.head}</h1>
          </div>
          <div className="text-lg mb-10 lg:mr-48 lg:ml-48">
            {item.list.map((subitem) => (
              <h2>{subitem}</h2>
            ))}
          </div>
        </>
      ))}
    </div>
  );
};

export default priceList;
