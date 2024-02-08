import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const EventCarousel = ({ images }) => {
  const [imageList, setImageList] = useState([]);
 

  useEffect(() => {
    const fetchImages = async () => {
      try {
       
          
       
        setImageList(images);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };
    fetchImages();
  }, [images]);

  // useEffect(() => {
  //   console.log(images)
  //   console.log(imageList);
  // }, [imageList]);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {imageList.map((imageName, index) => (
        <img key={index} className='card-img' src={imageName} alt={`Event Image ${index + 1}`} />
      ))}
    </Slider>
  );
};

export default EventCarousel;
