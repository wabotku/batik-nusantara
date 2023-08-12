// CustomCarousel.tsx
import React from "react";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { CarouselItem } from "./typesCarousel";

interface CustomCarouselProps {
  items: CarouselItem[];
}

const CustomCarousel: React.FC<CustomCarouselProps> = ({ items }) => {
  var isMobileView = window.innerWidth <= 768 ? 100 : 33.33;
  return (
    <Carousel
      showStatus={false}
      showThumbs={false}
      infiniteLoop={true}
      centerMode={true}
      centerSlidePercentage={isMobileView}
      autoPlay={true}
      interval={3000}
    >
      {items.map((image) => (
        <div key={image.id} className="mx-2">
          <Image
            src={image.imageUrl}
            width={400}
            height={400}
            alt={`Carousel Image ${image.alt}`}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default CustomCarousel;
