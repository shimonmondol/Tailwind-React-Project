import React from 'react'

const Impact = () => {
  return (
    <div>
        <div className='text-center'>
          <h1 className='font-opensans font-bold text-3xl text-[#141135] mt-10'>We create real impact</h1>
          <p className='font-paprika font-regular text-[#726E9E] text-xs mt-4 leading-relaxed'>We design, build and support websites and apps for <br /> clients worldwide. Create beautiful, eye-catching on-page <br /> messages without the need for a developer.
          </p>
        </div>
        <div className='flex'>
          <div>
            <div className='flex'>
              <div>
              <img className='mt-20 ml-48' src="images/icon1.png" alt="" />
            </div>
            <div>
              <h1 className='font-opensans font-bold text-lg text-[#141135] mt-20 ml-5'>Competitive Analysis</h1>
              <p className='font-paprika font-regular text-[#726E9E] leading-relaxed text-xs ml-5 mt-2'>With an all-new look and powerful <br /> features, Ekko is the best way to <br /> ensure success for your business.</p>
            </div>
          </div>
          <div className='flex'>
            <div>
              <img className='mt-16 ml-48' src="images/icon2.png" alt="" />
            </div>
            <div>
              <h1 className='font-opensans font-bold text-lg text-[#141135] mt-16 ml-5'>Strategy And research</h1>
              <p className='font-paprika font-regular text-[#726E9E] leading-relaxed text-xs ml-5 mt-2'>Save money and start building <br /> your website using the best <br /> tools available on the market <br /> today.</p>
            </div>
          </div>
        </div>
        <div>
          <img className='w-[450px] h-[360px] mt-16 ml-16' src="images/Group3.png" alt="" />
        </div>
        </div>
    </div>
  )
}

export default Impact