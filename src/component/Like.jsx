import React from 'react'

const Like = () => {
  return (
    <div className='w-[1170px] h-[600px] bg-[#F9F9FB]'>
        <h1 className='font-opensans font-bold text-3xl mt-24 pt-20 ml-40 text-[#030314]'>You May Also Like </h1>
        <div>
            <div className='flex'>
                <img className='mt-20 ml-40 w-[250px] h-[150px]' src="images/blank.png" alt="" />
                <ul className='flex mt-20 ml-12 text-[#726E9E]'>
                    <li className='font-quicksand text-xs'>News</li>
                    <li className='font-quicksand text-xs ml-4'>By</li>
                    <li className='font-quicksand text-xs ml-2'>Tomas Nikelson </li>
                    <li className='font-quicksand text-xs ml-4'>Posted</li>
                    <li className='font-quicksand text-xs ml-3'>5 Hours Ago </li>
                </ul>
                <div>
                    <h1>Punto Pago Allows Quick And Secure 
                    Payments For Services In Panama</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Like