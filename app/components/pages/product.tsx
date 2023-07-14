// Product.tsx
import React from "react";
import Sidebar from "../layout/sidebar";

const Product: React.FC = () => {
  const products = [
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
    { id: 3, name: "Product 3" },
    { id: 4, name: "Product 4" },
    // Add more products as needed
  ];

  return (
    <div className="flex flex-col lg:flex-row">
      <Sidebar />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 p-6 w-full">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow rounded-md p-4 flex flex-col items-center justify-center text-gray-800 hover:bg-gray-100 transition duration-300"
          >
            <h3 className="text-lg font-bold">{product.name}</h3>
            {/* Add product details */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
