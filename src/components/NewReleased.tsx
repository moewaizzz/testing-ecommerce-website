import ViewMore from "./ViewMore";

const NewReleased = () => {
  return (
    <div className="flex flex-col my-5 mx-8 ">
      <div className="text-center">
        <div className="font-bold text-5xl">
          <span className="text-red-500">New</span> Released
        </div>
        <div className="text-xl">Try Out Lastest Flavors Here </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mt-5">
        <div className=" bg-yellow-400 flex-1 h-[190px] relative rounded-lg ">
          <div className="absolute bottom-3 m-4">
            <div className="text-sm text-white">
              Citrus Mon <br /> 20,000 Puf <br />
              Disposable <br />3 Percent
              <div>30,000 MMK</div>
            </div>
          </div>
        </div>

        <div className=" bg-pink-400 flex-1 h-[190px] relative rounded-lg ">
          <div className="absolute bottom-3 m-4">
            <div className="text-sm text-white">
              Strawberry <br /> Yogurt with <br />
              Refreshing Flavor <br />
              Nic 3 Percent
              <div>30,000 MMK</div>
            </div>
          </div>
        </div>
        <div className=" bg-blue-400 flex-1 h-[190px] relative rounded-lg ">
          <div className="absolute bottom-3 m-4">
            <div className="text-sm text-white">
              Strawberry <br /> Yogurt with <br />
              Refreshing Flavor <br />
              Nic 3 Percent
              <div>30,000 MMK</div>
            </div>
          </div>
        </div>

        <div className=" bg-green-400 flex-1 h-[190px] relative rounded-lg ">
          <div className="absolute bottom-3 m-4">
            <div className="text-sm text-white">
              Strawberry <br /> Yogurt with <br />
              Refreshing Flavor <br />
              Nic 3 Percent
              <div>30,000 MMK</div>
            </div>
          </div>
        </div>
      </div>

      <ViewMore />
    </div>
  );
};

export default NewReleased;
