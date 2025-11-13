import { useEffect, useState } from "react";
import { FaApple, FaWindows, FaHeadphones, FaArrowRight } from "react-icons/fa";

const slides = [
  {
    image: "src/assets/HeroImg/hero_endframe__cvklg0xk3w6e_large 2.png", // 📱 iPhone image
    icon: FaApple, 
    title: "iPhone 14 Series",
    subtitle: "Up to 10% off Voucher",
    button: "Shop iPhones",
  },
  {
    image: "src/assets/HeroImg/photo-1531297484001-80022131f5a1.jpeg", // 💻 Laptop image
    icon: FaWindows, 
    title: "Powerful Laptops",
    subtitle: "Save big on performance",
    button: "Shop Laptops",
  },
  {
    image: "src/assets/HeroImg/Dark Photo Ideas.jpeg", // 🎧 Headphone image
    icon: FaHeadphones, 
    title: "Wireless Headphones",
    subtitle: "Feel the beat, wire‑free",
    button: "Shop Audio",
  },
];

function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((newValue) =>
        newValue === slides.length - 1 ? 0 : newValue + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const { image, icon: Icon, title, subtitle, button } = slides[currentIndex];

  return (
    <div className="flex justify-between relative transition-all duration-700 ease-in-out">
      <div className="ml-16 mt-14">
        <div className="flex items-center space-x-6">
          <Icon className="w-10 h-12 text-white" />
          <h2>{title}</h2>
        </div>
        <p className="text-5xl font-semibold leading-15 tracking-[4%] mt-5">
          {subtitle}
        </p>
        <div className="flex items-center gap-x-2 mt-6">
          <span className="border-b">{button}</span>
          <FaArrowRight className="w-4 h-4" />
        </div>
      </div>
      <div className="absolute bottom-3 left-[420px]">
        <div className="space-x-2">
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`size-4 rounded-full cursor-pointer ${
                currentIndex === index ? "bg-red-600" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>
      <div>
        <img className="w-[475px] h-[344px]" src={image} alt={title} />
      </div>
    </div>
  );
}

export default HeroSlider;
