import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

const slides = [
  {
    url: "https://cdn.pixabay.com/photo/2015/07/27/22/53/railroad-tracks-863675_1280.jpg",
  },
  {
    url: "https://cdn.pixabay.com/photo/2016/11/29/02/56/blonde-1866951_1280.jpg",
  },
  {
    url: "https://cdn.pixabay.com/photo/2016/11/21/14/04/woman-1845577_1280.jpg",
  },
];

const HeroSection = () => {
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

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="h-[500px] w-full relative  ">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full   bg-center bg-cover duration-500 object-cover"
      ></div>
      <FaSearch className="absolute right-32 top-1 text-lg text-white" />
      <FaShoppingCart className="absolute right-24 top-1 text-lg text-white" />
      <FaBars className="absolute right-16 top-1 text-lg text-white" />
      <div className=" absolute top-[50%] translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2  bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft size={30} onClick={prevSlide} />
      </div>
      <div className=" absolute top-[50%] translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2  bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight size={30} onClick={nextSlide} />
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 p-10 text-white text-center">
        <div className="text-2xl">The Best look</div>
        <div className="text-5xl py-2"> Anytime Anywhere</div>
        <div className="text-2xl">Start from 10,100 MMK</div>
        <button className="bg-black/70 px-4 py-2 rounded-xl">View</button>
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((_dot, i) => (
          <div
            key={i}
            className="text-2xl cursor-pointer "
            onClick={() => goToSlide(i)}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
