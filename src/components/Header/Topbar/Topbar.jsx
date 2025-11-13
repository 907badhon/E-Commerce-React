import LanguageSelector from "./LanguageSelector ";

function Topbar() {
  return (
    <div className="bg-black h-12">
      <div className="bg-black h-12 container flex-center relative">
        <div className=" flex-center text-white ">
          <p className="font-poppins text-sm">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
            <a className="ml-2 border-b font-semibold text-sm" href="">ShopNow</a>
          </p>
        </div>
        <div className="text-white  right-0 absolute ">
          <LanguageSelector />
        </div>
      </div>
    </div>
  );
}

export default Topbar;
