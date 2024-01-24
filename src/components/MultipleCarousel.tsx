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
            backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgRtU2aTWl859KmiFC4qDo_vq5QrDiOOpzsFGmI6izX2348Y1n7lDCa70zWSOtGDBP5FY&usqp=CAU)`,
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
            backgroundImage: `url(https://i0.wp.com/www.vapourdays.co.uk/wp-content/uploads/2023/06/Blue-Geek-Vape-Wenax-Q-Pod-Kit.jpg?fit=1600%2C1600&ssl=1)`,
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
            backgroundImage: `url(https://www.vapebazaar.pk/wp-content/uploads/2023/05/lost-vape-ursa-mini-30-w-crystal-cream.webp)`,
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
            backgroundImage: `url(https://img.freepik.com/free-photo/still-life-cosmetic-products_23-2149163123.jpg?size=626&ext=jpg)`,
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
            backgroundImage: `url(https://vape.co.uk/wp-content/uploads/2021/08/JWN20mgSmokVVOWBar14_86.jpg)`,
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
