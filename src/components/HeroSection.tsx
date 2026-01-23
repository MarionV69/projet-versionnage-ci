import React, { useState } from 'react';

interface slides {
  imageUrl: string;
  text ?: string;
}
interface CarouselProps {
  images: string[];
}

const HeroSection: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <section className="hero-section">
    <div className="carousel" style={{ backgroundImage: `url(${images[currentIndex]})` }}>
      <div className="overlay">
        <button onClick={prevSlide}>Previous</button>
        <button onClick={nextSlide}>Next</button>
      </div>
      

    </div>
  </section>
  );
};

export default HeroSection;