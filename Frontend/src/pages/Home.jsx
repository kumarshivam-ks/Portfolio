import React from 'react'
import HomeImg from '../images/HomeImg.png';
function Home() {
    return (

        <div className="bg-black min-h-screen relative">

            {/* Image Section */}
            <div className="flex justify-end">
                <div className="w-4/5 h-[700px] bg-amber-50">
                     <img
                        src={HomeImg}
                        alt="Profile"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* White Card */}
            <div className="absolute top-1/2 left-12 -translate-y-1/2 bg-white w-[700px] h-[380px] shadow-lg flex flex-col items-center justify-center">
                <h2>Kumar Shivam</h2>
                <h1 className='text-3xl'>SDE-1 DotNet Developer</h1>
            </div>
        </div>

    )
}

export default Home