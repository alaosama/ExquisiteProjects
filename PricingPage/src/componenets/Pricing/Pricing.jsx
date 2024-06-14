import React, { useState } from 'react'

const Pricing = () => {

    const [isYearly, setIsYearly] = useState(false);
    const packages = [
        {name: "Start", monthlyPrice: 19, yearlyPrice: 199, description: "A common from of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
        {name: "Adavnce", monthlyPrice: 39, yearlyPrice: 399, description: "A common from of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
        {name: "Start", monthlyPrice: 59, yearlyPrice: 599, description: "A common from of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    ]

  return (
    <div className='md:px-14 p-4 max-w-s mx-auto py-10'>
        <div className='text-center'>
            <h2 className='md:text-5x1 text-3x1 font-extrabold text-primary mb-2'>Here are all our plans</h2>
            <p className='text-tartiary md:w-1/3 mx-auto px-4'>
                A simple paragraph is comprised of three major components. 
                The which is often
                a declarative sentence.
            </p>

            {/* toggle pricing */}
            <div className='mt-16'>
                <label htmlFor="toggle" className='inline-flex items-center cursor-pointer'>
                <span className='mr-8 text-2x1 font-semibold'>Monthly</span>
                <div className='w-14 h-6 bg-gray-300 rounded-full'>
                    <div className={`w-6 h-6 rounded-full transition duration-200 ease-in-out
                     ${isYearly ? "bg-primary ml-8" : 
                        "bg-gray-500"}`}>
                    </div>
                </div>
                <span className='ml-8 text-2x1 font-semibold'>Yearly</span>
                </label>
                <input type="checkbox" id="toggle" className='hidden' checked={isYearly} onChange={() =>
                    setIsYearly(!isYearly)
                }/>
            </div>


        </div>
    </div>
  )
}

export default Pricing
