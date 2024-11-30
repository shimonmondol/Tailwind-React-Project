import React from 'react'

const Banner = () => {
  return (
    <div>
        <div class="relative">
        <img src="images/bg.png" alt="" />
        <div class="absolute inset-0 items-center justify-center bg-black bg-opacity-20">
            <h2 class="text-white text-center font-opensans text-4xl font-bold leading-snug mt-16 pt-6 mb-6">
                You’re Unique. Your <br /> Website Should be too
            </h2>
            <h2 class="text-white text-center font-paprika text-lg mb-6 ">A beautiful website passionately crafted for your small <br />business.  Our Digital Agency development has changed <br /> the way brands and businesses use technology for <br /> growing business. </h2>
            <img class="h-10 mt-3 pl-96 ml-12" src="images/btn-2.png" alt="" />
        </div>
    </div>
    </div>   
  )
}

export default Banner