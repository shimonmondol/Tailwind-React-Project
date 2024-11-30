import React from 'react'

const Choose = () => {
  return (
    <div className='flex w-[1170px] mx-auto mt-40'>
        <div>
        <div className='flex bg-red-100 w-[368px] h-[84px] ml-36'>
            <div className='flex pl-30 font-paprika text-[#726E9E]'>
                <img className='w-[25px] h-[15px] mt-10 ml-8' src="images/Group.png" alt="" />
                <h1 className='mt-6 ml-8 text-xs leading-relaxed'>We solve real-world problems <br /> through people and the web.</h1>
            </div>
        </div>
        <div className='flex w-[368px] h-[84px] ml-36'>
            <div className='flex pl-30 font-paprika text-[#726E9E]'>
                <img className='w-[25px] h-[15px] mt-8 ml-8' src="images/Group.png" alt="" />
                <h1 className='mt-6 ml-8 text-xs leading-relaxed'>We make processes and technology <br /> work efficiently together.</h1>
            </div>
        </div>
        <div className='flex w-[368px] h-[84px] ml-36'>
            <div className='flex pl-30 font-paprika text-[#726E9E]'>
                <img className='w-[25px] h-[15px] ml-8' src="images/Group.png" alt="" />
                <h1 className='ml-8 text-xs leading-relaxed'>We advance improve existing <br /> technology through research and <br /> development.</h1>
            </div>
        </div>
        <div className='flex w-[368px] h-[84px] ml-36'>
            <div className='flex pl-30 font-paprika text-[#726E9E]'>
                <img className='w-[25px] h-[15px] ml-8 mb-2' src="images/Group.png" alt="" />
                <h1 className='ml-8 text-xs leading-relaxed'>We develop long-lasting and <br /> scalable solutions, relationships <br /> partnerships.</h1>
            </div>
        </div>
        </div>
        <div>
            <h1 className='font-opensans font-bold text-3xl ml-48'>Why Choose Us</h1>
            <p className='font-paprika text-xs mt-4 ml-48 text-[#726E9E] leading-relaxed'>We are now a team of strategists, <br /> engineers, designers, and marketers who <br /> both use and develop technology for a <br /> variety of client needs.</p>
            <img className='mt-4 ml-48 w-[120px] h-[44px]' src="images/BTN.png" alt="" />
        </div>
    </div>
  )
}

export default Choose