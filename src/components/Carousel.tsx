import MultipleCarousel from "./MultipleCarousel";

const Carousel = () => {
  return (
    <div className="flex h-[300px] m-8 mt-5 ">
      <div className="bg-black rounded-md relative w-full">
        <div className="absolute   text-white top-28 start-28">
          <div className="font-bold text-4xl">Devices</div>
          <div>
            Find the best for <br /> your here!
          </div>
        </div>
        <div className="h-[200px] md:ps-80">
          <MultipleCarousel />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
