import { IoIosSearch } from "react-icons/io";

function InputBox() {
  return (
    <div className="flex-center relative ">
      <input
        type="text"
        placeholder="What are you looking for?"
        className="px-5 py-2 w-[243px] mr-2 bg-[#F5F5F5] text-xs outline-[#b3b3b3]"
      />
      <button className="mr-2 absolute right-3">
        <IoIosSearch className="h-6 w-6 cursor-pointer" />
      </button>
    </div>
  );
}

export default InputBox;
