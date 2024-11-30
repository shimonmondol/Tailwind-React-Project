import React from 'react'

const About = () => {
  return (
    <div className='w-[1170px] bg-[#F9F9FB]'>
        <div>
            <h1 className='font-opensans font-bold text-center text-3xl pt-24'>What The People Thinks About Us </h1>
        </div>
        <div className='relative'>
            <img className='ml-[520px] w-[120px] h-[120px] absolute mt-28' src="images/About.png" alt="" />
            <div className='pt-20'>
                  <div className='bg-[#FFFFFF] w-[720px] h-[200px] ml-56 mt-20 pt-[100px]'>
                  <img className='ml-[320px] w-[80px] mb-[500px]' src="images/star.png" alt="" />
            </div>
            </div>
        </div>
    </div>
  )
}

export default About