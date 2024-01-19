import React from 'react';
import { Carousel } from 'antd';
import './ImageCarousel.css';  // Import your CSS file
import image1 from '../../../backend/screenshots/naturaldisaster_0.png'
import image2 from '../../../backend/screenshots/naturaldisaster_1.png'
import image3 from '../../../backend/screenshots/naturaldisaster_2.png'
import image4 from '../../../backend/screenshots/naturaldisaster_3.png'
import image5 from '../../../backend/screenshots/naturaldisaster_4.png'
import image6 from '../../../backend/screenshots/naturaldisaster_5.png'
import image7 from '../../../backend/screenshots/naturaldisaster_6.png'
import image8 from '../../../backend/screenshots/naturaldisaster_7.png'

const ImageCarousel = () => {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
  ];

  return (
    <div className="carousel-container">
      <Carousel autoplay dots={false} slidesToShow={4} align='center'>
        {images.map((image, index) => (
          <div key={index} className="carousel-item" style={{align: 'center', marginTop: 'auto'}}>
            <img src={image} alt={`Image ${index + 1}`} style={{align: 'center', marginTop: 'auto'}}/>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
