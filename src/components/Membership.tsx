const Membership = () => {
  return (
    <div className="flex  flex-col md:flex-row mx-8 gap-1 ">
      {/* First div (takes 60% of the screen) */}
      <div className="w-full md:w-3/5 relative">
        <img
          src="https://cdn.pixabay.com/photo/2016/11/23/15/31/man-1853545_1280.jpg"
          alt=""
          className="transform scale-x-[-1] h-[400px] w-full rounded-lg  "
        />
        <div className="absolute top-1/2 text-white m-5">
          <div className="text-3xl">Membership Program</div>
          <div>Be a Vape Pi member and get our </div>
          <div>special exclusive offers</div>
          <button className="bg-black/70 px-4 py-2 rounded-xl">View</button>
        </div>
      </div>

      {/* Second div (takes the remaining space) */}
      <div className="hidden md:block bg-black text-white w-[250px] relative rounded-lg">
        <div className="absolute bottom-3 m-4">
          <div className="text-xl">Device</div>
          <div>Find the best for you here!</div>
          <div>you here!</div>
        </div>
      </div>

      <div>
        <div className="flex-col w-full md:w-[250px] ">
          <div className="bg-slate-200 h-[190px] mb-5 relative rounded-lg ">
            <div className="absolute bottom-3 m-4  ">
              <div className="text-xl ">Pods</div>
              <div>Variety of choices</div>
              <div>available</div>
            </div>
          </div>
          <div className="bg-red-500 flex-1 h-[190px] relative rounded-lg ">
            <div className="absolute bottom-3 m-4">
              <div className="text-xl">Disposable</div>
              <div>Easy, clean &</div>
              <div>superb flaovr</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;
