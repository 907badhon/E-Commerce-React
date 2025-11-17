import React from "react";

function SupportFeaturedCard({ icon, title, text }) {
  return (
      <div className="w-[249px] text-center">
        <div className="flex items-center  justify-center text-white text-xl">
          <span className="size-20 bg-black rounded-full flex items-center justify-center">{icon}</span>
        </div>
        <div className="flex-1 mt-6">
          <h4 className="text-xl font-semibold  uppercase">
            {title}
          </h4>
          <p className="text-sm text-gray-600 mt-1">{text}</p>
        </div>
      </div>
  );
}

export default SupportFeaturedCard;
