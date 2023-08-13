import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { CarouselItem } from "./typesCarousel";

interface CustomCarouselProps {
  items: CarouselItem[];
}

const CustomCarousel: React.FC<CustomCarouselProps> = ({ items }) => {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    // Initial check
    checkIsMobile();

    // Attach an event listener to update isMobileView on window resize
    window.addEventListener("resize", checkIsMobile);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  return (
    <Carousel
      showStatus={false}
      showThumbs={false}
      infiniteLoop={true}
      centerMode={true}
      centerSlidePercentage={isMobileView ? 100 : 33.33}
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
