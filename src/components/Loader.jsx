import { FaInstagram } from "react-icons/fa";
import React from 'react'

function Loader() {
  return (
    <div className='w-full h-full fixed top-0 flex-col left-0 bg-black text-white flex items-center justify-center text-2xl'>
      <FaInstagram size={100} />
      <h6>Instagram</h6>
    </div>
  )
}

export default Loader