import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

function ArrowNavigation({ onLeftClick, onRightClick, className = "" }) {
  return (
    <div className={`flex space-x-2 items-center w-full px-4 ${className}`}>
      <button
        onClick={onLeftClick}
        className="bg-[#f5f5f5] text-black p-3 rounded-full hover:bg-gray-500 transition duration-200"
      >
        <FaArrowLeft size={20} />
      </button>
      <button
        onClick={onRightClick}
        className="bg-[#f5f5f5] text-black p-3 rounded-full hover:bg-gray-500 transition duration-200"
      >
        <FaArrowRight size={20} />
      </button>
    </div>
  );
}

export default ArrowNavigation;
