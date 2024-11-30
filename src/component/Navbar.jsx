import React from 'react'

const Navbar = () => {
  return (
    <nav>
        <div>
              <div class="text-center bg-blue-900 w-100 h-16 flex">
                <img className="pl-16 m-16 mt-3 mr-16 h-10 pr-16" src="images/Logo.png" alt="" />
                <div className="flex pt-5 font-opensans text-stone-200">
                    <p className="pr-12">Home</p>
                    <p className="pr-12 text-lime-500">About</p>
                    <p className="pr-12">Service</p>
                    <p className="pr-12">Portfolio</p>
                    <p className="pr-12">Price</p>
                    <p className="pr-12">Blog</p>
                </div>
                <img className="h-10 mt-3 pl-12" src="images/BTN.png" alt="" />
              </div>
        </div>
    </nav>
  )
}

export default Navbar