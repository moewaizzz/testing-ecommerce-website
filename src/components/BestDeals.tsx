import { FaStar } from "react-icons/fa";
import ViewMore from "./ViewMore";

const BestDeals = () => {
  const BestDeals = [
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgRtU2aTWl859KmiFC4qDo_vq5QrDiOOpzsFGmI6izX2348Y1n7lDCa70zWSOtGDBP5FY&usqp=CAU",
      discount: 25,
      name: "Refreshing mint",
      price: 3000,
      points: 600,
    },
    {
      url: "https://i0.wp.com/www.vapourdays.co.uk/wp-content/uploads/2023/06/Blue-Geek-Vape-Wenax-Q-Pod-Kit.jpg?fit=1600%2C1600&ssl=1",
      discount: 25,
      name: "Refreshing mint",
      price: 3000,
      points: 600,
    },
    {
      url: "https://www.vapebazaar.pk/wp-content/uploads/2023/05/lost-vape-ursa-mini-30-w-crystal-cream.webp",
      discount: 25,
      name: "Refreshing mint",
      price: 3000,
      points: 600,
    },
    {
      url: "https://www.vapebazaar.pk/wp-content/uploads/2023/05/lost-vape-ursa-mini-30-w-glitter-ocean.webp",
      discount: 25,
      name: "Refreshing mint",
      price: 3000,
      points: 600,
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlB3yh_WN6BFoQsLYaZFrtM2vN-8Y2-s1A-1OC6NGOWdwycU14BqzapUqCD-U_tJ9xPZw&usqp=CAU",
      discount: 25,
      name: "Refreshing mint",
      price: 3000,
      points: 600,
    },
    {
      url: "https://vape.co.uk/wp-content/uploads/2021/08/JWN20mgSmokVVOWBar14_86.jpg",
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
          <div className="p-4 cursor-pointer" key={i}>
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
