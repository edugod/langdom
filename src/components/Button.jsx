import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-secondary text-white font-[Poppins] py-2 px-6 md:ml-8 hover:bg-red-400 duration-500 text-base rounded-full'>

      {props.children}
    </button>
  )
}

export default Button