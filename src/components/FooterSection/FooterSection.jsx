import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function FooterSection() {
  return (
    <footer className="bg-black mt-[140px] h-[440px]">
      <div className="container text-white ">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 pt-20">
          {/* Subscribe */}
          <div>
            <h3 className="text-lg font-semibold">Exclusive</h3>
            <button className="mt-6 bg-primary px-4 py-2 rounded">
              Subscribe
            </button>
            <p className="text-sm mt-6">Get 10% off your first order</p>
            <input
              type="email"
              placeholder="Enter your email"
              className="mt-6 p-2 w-full rounded text-black bg-white/90"
            />
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold">Support</h3>
            <p className="text-sm mt-6">111 Bijoy sarani, Dhaka...</p>
            <p className="text-sm mt-4">exclusive@gmail.com</p>
            <p className="text-sm mt-4">+88015-88888-9999</p>
          </div>

          {/* Account */}
          <div>
            <h3 className="text-lg font-semibold">Account</h3>
            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a href="">My Account</a>
              </li>
              <li>
                <a href="">Login / Register</a>
              </li>
              <li>
                <a href="">Cart</a>
              </li>
              <li>
                <a href="">Wishlist</a>
              </li>
              <li>
                <a href="">Shop</a>
              </li>
            </ul>
          </div>

          {/* Quick Link */}
          <div>
            <h3 className="text-lg font-semibold">Quick Link</h3>
            <ul className="mt-6 text-sm space-y-4">
              <li>
                <a href="">Privacy Policy</a>
              </li>
              <li>
                <a href="">Terms Of Use</a>
              </li>
              <li>
                <a href="">FAQ</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Download App</h3>
            <p className="text-sm mt-6">Save $3 with App New User Only</p>
            <div className="flex gap-2 items-center justify-center mt-3">
              <img src="/assets/qrcode.svg" className=" mt-2 2" />
              <div className="mt-2">
                <a href="">
                  <img src="/assets/googleplay.svg" className="" />
                </a>
                <a href="">
                  <img src="/assets/appstore.svg" className="" />
                </a>
              </div>
            </div>
            <div className="flex mt-7 gap-8 text-xl text-gray-700">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom line */}
      </div>
      <div className="mt-15 border-t border-white/20 pt-4 flex flex-col md:flex-row justify-between items-center text-sm">
        <div className="flex items-center mx-auto">
          <p className="text-white/20  ">
            © Copyright Rimel 2022. All right reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
