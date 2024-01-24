import { FaStar } from "react-icons/fa";
import ViewMore from "./ViewMore";

const BestDeals = () => {
  const BestDeals = [
    {
      url: "https://cdn.pixabay.com/photo/2018/07/30/04/09/vape-3571748_1280.jpg",
      discount: 25,
      name: "Refreshing mint",
      price: 3000,
      points: 600,
    },
    {
      url: "https://cdn.pixabay.com/photo/2018/07/30/04/09/vape-3571748_1280.jpg",
      discount: 25,
      name: "Refreshing mint",
      price: 3000,
      points: 600,
    },
    {
      url: "https://cdn.pixabay.com/photo/2018/07/30/04/09/vape-3571748_1280.jpg",
      discount: 25,
      name: "Refreshing mint",
      price: 3000,
      points: 600,
    },
    {
      url: "https://cdn.pixabay.com/photo/2018/07/30/04/09/vape-3571748_1280.jpg",
      discount: 25,
      name: "Refreshing mint",
      price: 3000,
      points: 600,
    },
    {
      url: "https://cdn.pixabay.com/photo/2018/07/30/04/09/vape-3571748_1280.jpg",
      discount: 25,
      name: "Refreshing mint",
      price: 3000,
      points: 600,
    },
    {
      url: "https://cdn.pixabay.com/photo/2018/07/30/04/09/vape-3571748_1280.jpg",
      discount: 25,
      name: "Refreshing mint",
      price: 3000,
      points: 600,
    },
  ];

  return (
    <div className="mt-7 mx-4">
      <div className="text-3xl md:text-5xl font-bold text-center">
        Best Deals
      </div>
      <div className="text-lg md:text-xl text-center">Just for you</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 ">
        {BestDeals.map((bestDeal, i) => (
          <div className="p-4" key={i}>
            <div
              style={{ backgroundImage: `url(${bestDeal.url})` }}
              className="h-[200px] lg:h-[250px] bg-cover bg-center "
            >
              <div className="text-white bg-red-500 text-center w-[80px] mx-auto">
                {bestDeal.discount}% Off
              </div>
            </div>
            {/* text */}
            <div className="text-center mt-2">
              <div className="text-lg md:text-xl">{bestDeal.name}</div>
              <div className="text-lg md:text-xl">{bestDeal.price} MMK</div>
              <div className="text-sm line-through">{bestDeal.price} MMK</div>
              <div className="text-lg text-yellow-400 flex justify-center">
                <div>
                  <FaStar className="mt-1" />
                </div>
                <div className="ml-1">{bestDeal.points} points</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ViewMore />
    </div>
  );
};

export default BestDeals;
