const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 m-4 md:m-8 gap-4">
      <div>
        <div className="text-xl mb-5">Customer Service</div>
        <div className="mb-2">Terms & Privacy Policy</div>
        <div>Return Policy</div>
      </div>

      <div>
        <div className="text-xl mb-5">Language</div>
        <div className="flex flex-col space-y-2">
          <div className="flex items-center">
            <input
              type="radio"
              id="option1"
              name="options"
              className="form-radio text-blue-500 h-5 w-5"
              style={{ "--tw-ring-color": "#3b82f6" }}
            />
            <label htmlFor="option1" className="ml-2">
              Myanmar (Unicode)
            </label>
          </div>
          {/* Add similar input groups for other language options */}
        </div>
      </div>

      <div>
        <div className="text-xl mb-5">Contact Us</div>
        <div className="">
          Lay Daunt Kan Main Road, Cashmere Stop, Near Zawana Thingangyn Tsp,
          Yangon{" "}
        </div>
        <div>09458489458</div>
      </div>

      <div>
        <div className="text-xl">Download Our App</div>
        <img
          src="https://www.qr-generator.nu/qrcode.svg?download=1"
          className="h-32"
          alt="App QR Code"
        />
      </div>

      <div>
        <div className="mb-5 mt-3 text-xl">Payment</div>
        <div className="flex space-x-2">
          <img
            src="https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/75/b2/f0/75b2f0ee-c25d-d057-8392-56801d19476c/AppIcon-0-1x_U007emarketing-0-5-0-85-220.png/1200x600wa.png"
            alt="Payment Logo 1"
            className="h-10"
          />
          <img
            src="https://yt3.googleusercontent.com/ytc/AIf8zZT_Qgly_olXJImM_uvkGfqxSL_k7RQIjCV6fbKN1A=s900-c-k-c0x00ffffff-no-rj"
            className="h-10 w-20"
            alt="Payment Logo 2"
          />
        </div>
      </div>

      <div>
        <div className="mb-5 mt-3 text-xl">Follow Us On</div>
        <div className="flex space-x-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png"
            alt="Facebook Logo"
            className="h-8"
          />
          {/* Add similar img tags for other social media icons */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
