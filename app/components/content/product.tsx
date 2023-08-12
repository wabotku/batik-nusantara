import React from "react";
import { imageUrl } from "../constant";
import Carousel from "../parts/Carousel";

const Product: React.FC = () => {
  return (
    <div className="flex justify-center items-center " id="product">
      <Carousel items={imageUrl} />

      {/* {imageUrl.map((image) => (
        <div key={image.id} className="h-72 w-72 md:h-72 md:w-72">
          <Image
            src={image.url}
            alt={`Image ${image.id}`}
            layout="responsive" // Use responsive layout
            width={400} // Set a default width
            height={400} // Set a default height
            className="rounded-md"
          />
        </div>
      ))} */}
    </div>
  );
};

export default Product;
