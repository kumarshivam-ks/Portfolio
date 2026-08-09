import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <div className='text-white bg-black p-3 flex justify-center align-middle grid grid-cols-3'>
                <div className='flex justify-center'> <Link to="/">Instagram</Link></div>
                <div className='flex justify-center'><Link to="/">Facebook</Link></div>
                <div className='flex justify-center'><Link to="/">Linkedin</Link></div>
            </div>
        </>
    )
}

export default Footer