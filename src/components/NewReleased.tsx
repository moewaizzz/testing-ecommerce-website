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
        <div
          style={{
            backgroundImage: `url(https://img.freepik.com/premium-photo/yellow-disposable-electronic-cigarette-bright-yellow-background-melon-pineapple-lemon-flavored-vape_126267-4202.jpg?w=360)`,
          }}
          className=" cursor-pointer bg-yellow-400 flex-1 h-[190px] relative rounded-lg "
        >
          <div className="absolute bottom-3 m-4">
            <div className="text-sm text-white">
              Citrus Mon <br /> 20,000 Puf <br />
              Disposable <br />3 Percent
              <div>30,000 MMK</div>
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundImage: `url(https://img.freepik.com/premium-photo/purple-disposable-electronic-cigarette-bright-background-berry-flavor-catalog-mockup_126267-4209.jpg?size=626&ext=jpg)`,
          }}
          className=" cursor-pointer bg-pink-400 flex-1 h-[190px] relative rounded-lg bg-cover "
        >
          <div className="absolute bottom-3 m-4">
            <div className="text-sm text-white">
              Strawberry <br /> Yogurt with <br />
              Refreshing Flavor <br />
              Nic 3 Percent
              <div>30,000 MMK</div>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(https://img.freepik.com/premium-photo/orange-disposable-electronic-cigarette-bright-background-orange-mango-tropical-flavor-catalog-mockup_126267-4207.jpg?size=626&ext=jpg)`,
          }}
          className=" cursor-pointer bg-blue-400 flex-1 h-[190px] relative rounded-lg bg-cover "
        >
          <div className="absolute bottom-3 m-4">
            <div className="text-sm text-white">
              Strawberry <br /> Yogurt with <br />
              Refreshing Flavor <br />
              Nic 3 Percent
              <div>30,000 MMK</div>
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundImage: `url(https://png.pngtree.com/thumb_back/fw800/background/20220528/pngtree-green-disposable-electronic-cigarette-on-bright-background-close-up-vaper-electronic-cigarette-photo-photo-image_36838198.jpg)`,
          }}
          className="cursor-pointer bg-contain bg-green-400 flex-1 h-[190px] relative rounded-lg "
        >
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
