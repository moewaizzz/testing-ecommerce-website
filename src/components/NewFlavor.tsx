import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const NewFlavor = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
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
    <Carousel responsive={responsive}>
      <div className="flex items-center justify-center bg-gradient-to-r from-black to-gray-600 h-[250px] relative rounded-md mx-8">
        <img
          className="absolute left-0"
          src="https://img.freepik.com/free-vector/realistic-foggy-background_52683-73669.jpg?w=1800&t=st=1706101894~exp=1706102494~hmac=adf2a690d8295fe22b39423ab40ed83946738d401e43d095c6bf4e3585e9bd09"
        />
        <div className="text-center absolute text-white md:right-[100px] ">
          <div className=" font-bold text-4xl">Try New Flavor</div>
          <div>Citrus Monster</div>
          <button className="bg-black/70 px-4 py-1 rounded-xl">View</button>
        </div>
      </div>
      <div className="flex items-center justify-center bg-gradient-to-r from-pink-900 to-gray-600 h-[250px] relative rounded-md mx-8">
        <img
          className="absolute left-0"
          src="https://img.freepik.com/free-photo/dense-pink-cloud-haze_23-2148102175.jpg?w=1800&t=st=1706102004~exp=1706102604~hmac=8e6a6167950d27c3d2b1ca1542365a1ef768277c6cfbea4cf0a9012eb398f8df"
        />
        <div className="text-center absolute text-white md:right-[100px] ">
          <div className=" font-bold text-4xl">Try New Flavor</div>
          <div>Citrus Monster</div>
          <button className="bg-black/70 px-4 py-1 rounded-xl">View</button>
        </div>
      </div>
      <div className="flex items-center justify-center bg-gradient-to-r from-blue-900 to-gray-600 h-[250px] relative rounded-md mx-8">
        <img
          className="absolute left-0"
          src="https://img.freepik.com/free-photo/abstract-cloud-blue-haze_23-2148102041.jpg?w=1380&t=st=1706102086~exp=1706102686~hmac=59807f408723c0e5d833d86f62d973e655fba8bac45108c8e7fc61543936e636"
        />
        <div className="text-center absolute text-white md:right-[100px] ">
          <div className=" font-bold text-4xl">Try New Flavor</div>
          <div>Citrus Monster</div>
          <button className="bg-black/70 px-4 py-1 rounded-xl">View</button>
        </div>
      </div>
    </Carousel>
  );
};

export default NewFlavor;
