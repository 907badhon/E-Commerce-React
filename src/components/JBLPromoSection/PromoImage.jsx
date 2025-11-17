import React from 'react';

function PromoImage() {
  return (
    <div className="relative ">
      
      <img
        src="/assets/JBL.svg"
        alt="JBL Portable Speaker"
        className="relative z-20 w-[568px] h-[330px] "
      />

      <img className='absolute  -top-32 h-[620px] w-[600px] right-5' src="/assets/bg.svg" alt="" />
      
    </div>
  );
}

export default PromoImage;