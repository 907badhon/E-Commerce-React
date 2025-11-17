import React from 'react'

function NewArrivalDetails({ title, description, children }) {
return (
    <div className="absolute bottom-8 left-8">
      <div className='text-white'>
        <h3 className="text-2xl  mb-2">{title}</h3>
        <p className="text-sm w-[242px] text-[#FAFAFA] mb-2">{description}</p>
      </div>
      {children}
      <button className="text-white border-b">
        Shop Now
      </button>
    </div>
  );
}
export default NewArrivalDetails