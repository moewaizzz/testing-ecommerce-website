import { FaStar } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const MultipleCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel responsive={responsive} className="gap-1">
      <div className="p-4">
        <div
          style={{
            backgroundImage: `url(https://cdn.pixabay.com/photo/2018/07/30/04/09/vape-3571748_1280.jpg)`,
          }}
          className="h-[200px] lg:h-[200px] w-[200px] mx-auto bg-cover bg-center rounded-md"
        ></div>
        {/* text */}
        <div className="text-center mt-2 text-white">
          <div className="text-lg ">Refreshing mint</div>
          <div className="text-sm ">30000 MMK</div>

          <div className="text-sm text-yellow-400 flex justify-center">
            <div>
              <FaStar className="mt-1" />
            </div>
            <div className="ml-1">600 points</div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div
          style={{
            backgroundImage: `url(https://cdn.pixabay.com/photo/2018/07/30/04/09/vape-3571748_1280.jpg)`,
          }}
          className="h-[200px] lg:h-[200px] w-[200px] mx-auto bg-cover bg-center rounded-md"
        ></div>
        {/* text */}
        <div className="text-center mt-2 text-white">
          <div className="text-lg ">Refreshing mint</div>
          <div className="text-sm ">30000 MMK</div>

          <div className="text-sm text-yellow-400 flex justify-center">
            <div>
              <FaStar className="mt-1" />
            </div>
            <div className="ml-1">600 points</div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div
          style={{
            backgroundImage: `url(https://cdn.pixabay.com/photo/2018/07/30/04/09/vape-3571748_1280.jpg)`,
          }}
          className="h-[200px] lg:h-[200px] w-[200px] mx-auto bg-cover bg-center rounded-md"
        ></div>
        {/* text */}
        <div className="text-center mt-2 text-white">
          <div className="text-lg ">Refreshing mint</div>
          <div className="text-sm ">30000 MMK</div>

          <div className="text-sm text-yellow-400 flex justify-center">
            <div>
              <FaStar className="mt-1" />
            </div>
            <div className="ml-1">600 points</div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div
          style={{
            backgroundImage: `url(https://cdn.pixabay.com/photo/2018/07/30/04/09/vape-3571748_1280.jpg)`,
          }}
          className="h-[200px] lg:h-[200px] w-[200px] mx-auto bg-cover bg-center rounded-md"
        ></div>
        {/* text */}
        <div className="text-center mt-2 text-white">
          <div className="text-lg ">Refreshing mint</div>
          <div className="text-sm ">30000 MMK</div>

          <div className="text-sm text-yellow-400 flex justify-center">
            <div>
              <FaStar className="mt-1" />
            </div>
            <div className="ml-1">600 points</div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div
          style={{
            backgroundImage: `url(https://cdn.pixabay.com/photo/2018/07/30/04/09/vape-3571748_1280.jpg)`,
          }}
          className="h-[200px] lg:h-[200px] w-[200px] mx-auto bg-cover bg-center rounded-md"
        ></div>
        {/* text */}
        <div className="text-center mt-2 text-white">
          <div className="text-lg ">Refreshing mint</div>
          <div className="text-sm ">30000 MMK</div>

          <div className="text-sm text-yellow-400 flex justify-center">
            <div>
              <FaStar className="mt-1" />
            </div>
            <div className="ml-1">600 points</div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div
          style={{
            backgroundImage: `url(https://cdn.pixabay.com/photo/2018/07/30/04/09/vape-3571748_1280.jpg)`,
          }}
          className="h-[200px] lg:h-[200px] w-[200px] mx-auto bg-cover bg-center rounded-md"
        ></div>
        {/* text */}
        <div className="text-center mt-2 text-white">
          <div className="text-lg ">Refreshing mint</div>
          <div className="text-sm ">30000 MMK</div>

          <div className="text-sm text-yellow-400 flex justify-center">
            <div>
              <FaStar className="mt-1" />
            </div>
            <div className="ml-1">600 points</div>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default MultipleCarousel;
