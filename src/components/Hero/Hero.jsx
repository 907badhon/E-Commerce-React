import HeroLeftMenu from "./HeroLeftMenu";
import HeroSlider from "./HeroSlider";

function Hero() {
  return (
    <div className=" container">
      <div className=" flex justify-between">
        <HeroLeftMenu />
        <div className="bg-black w-[892px] mt-10 text-white">
            <HeroSlider />
        </div>
      </div>
    </div>
  );
}

export default Hero;
