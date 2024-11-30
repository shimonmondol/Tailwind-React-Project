import React from 'react'

const Plan = () => {
  return (
    <div className='w-[1170px] bg-[#F9F9FB]'>
        <div>
            <h1 className='font-opensans font-bold text-2xl text-center text-[#141135] pt-12'>Choose The Right Plan</h1>
        </div>
        <div className='flex gap-8 pt-10 ml-40'>
            <div className='bg-[#FFFFFF] w-[250px] h-[330px] text-center rounded-lg'>
                <h1 className='text-center font-opensans font-bold mt-10'>Basic</h1>
                <img className='mt-4' src="images/Plan1.png" alt="" />
                <h1 className='text-[#1BBF00] font-opensans font-bold text-2xl text-center pt-3'>$160</h1>
                <p className='font-paprika font-regular text-[#726E9E] text-xs mt-2 leading-relaxed'> Responsive Design <br /> Dynamic Elements <br /> Service Pages <br /> Custom Design & Features</p>
            </div>
            <div className='bg-[#6B62C5] w-[250px] h-[330px] text-center rounded-lg'>
                <h1 className='text-center font-opensans font-bold text-[#FAFAFE] mt-10'>Profeesional</h1>
                <img className='mt-4' src="images/Plan2.png" alt="" />
                <h1 className='text-[#1BBF00] font-opensans font-bold text-2xl text-center pt-3'>$240</h1>
                <p className='font-paprika font-regular text-[#E6E5F3] text-xs mt-2 leading-relaxed'> Responsive Design <br /> Dynamic Elements <br /> Service Pages <br /> Custom Design & Features</p>
            </div>
            <div className='bg-[#FFFFFF] w-[250px] h-[330px] text-center rounded-lg'>
                <h1 className='text-center font-opensans font-bold mt-10'>Exclusive</h1>
                <img className='mt-4' src="images/Plan3.png" alt="" />
                <h1 className='text-[#1BBF00] font-opensans font-bold text-2xl text-center pt-3'>$325</h1>
                <p className='font-paprika font-regular text-[#726E9E] text-xs mt-2 leading-relaxed'> Responsive Design <br /> Dynamic Elements <br /> Service Pages <br /> Custom Design & Features</p>
            </div>
        </div>
    </div>
  )
}

export default Plan