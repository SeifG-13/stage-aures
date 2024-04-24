import  React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import "./slider.css";
import zIndex from '@mui/material/styles/zIndex';
function Slider() {
  const slides = [
    {
        url: "./assert/chef1.png",
        star:"./assert/sliderstar.png",
        name:"Alamin Hasan",
        job:"Food Specialist",
        para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.",
    },
    {
      url: "./assert/chef2.png",
      star:"./assert/sliderstar.png",
        name:"Alamin Hasan",
        job:"Food Specialist",
      para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.",

    },
    {
      url: "./assert/chef3.png",
      star:"./assert/sliderstar.png",
        name:"Alamin Hasan",
        job:"Food Specialist",
      para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.",

    },
    {
      url: "./assert/chef4.png",
      star:"./assert/sliderstar.png",
        name:"Alamin Hasan",
        job:"Food Specialist",
      para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.",

    },
    {
      url: "./assert/F1.png",
      star:"./assert/sliderstar.png",
        name:"Alamin Hasan",
        job:"Food Specialist",
      para:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.",

    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex:any) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div style={{background:"black"}}>
    <div className='slidertitre'>Testimonials</div>
    <div className='slidersoustitre'>What our client are saying</div>
    <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>
      <div className='sliderimage'>
        <img src={slides[currentIndex].url} alt="" />
      </div>
      <div
        style={{ background:"white" , height:"85%"}} //backgroundImage: `url(${slides[currentIndex].url})`
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500 slidercontent' >
      <div className='sliderpara' >{slides[currentIndex].para}</div>
      <img className="sliderstar" src={slides[currentIndex].star} alt="" />
      <span className="slidername">{slides[currentIndex].name}</span>
      <span className='sliderjob'>{slides[currentIndex].job}</span>
      </div>
      </div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} style={{zIndex:"3"}} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} style={{zIndex:"3"}}/>
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    
    </div>
  );
}

export default Slider;