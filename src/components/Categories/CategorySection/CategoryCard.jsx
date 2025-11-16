function CategoryCard({ name, icon, active }) {
  const Icon = icon;
  return (
    <div
      className={`group w-[170px] h-[145px] border border-gray-200 rounded-xl shadow-[0_4px_10px_rgba(0,0,0,0.10)]
        flex flex-col items-center justify-center text-center space-y-4
        ${active ? "bg-[#DB4444]" : "hover:bg-[#DB5555]"} duration-300`}
    >
      <Icon
        className={`size-14 ${
          active ? "text-white" : "text-[#353434] group-hover:text-white"
        } duration-300`}
      />
      <p
        className={`${active ? "text-white" : "text-[#353434] group-hover:text-white"} duration-300`}
      >
        {name}
      </p>
    </div>
  );
}

export default CategoryCard;


