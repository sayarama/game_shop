import React from 'react'
import { BsCartFill } from "react-icons/bs";

function Card(props) {
  return (
    <div className='bg-indigo-600 hover:scale-110 duration-200 w-64 h-96 rounded-xl flex flex-col justify-center shadow-xl'>
        <div className='w-full h-96  flex items-center justify-center'><img className='w-52' src={props.images}/></div>
       <div className='p-3 font-bold'>
       <p>{props.title}</p>
        <span className='flex justify-between items-center text-center mt-2'>
            <p className='bg-white text-black p-1 rounded-lg hover:cursor-pointer hover:bg-slate-300'>Top Up</p>
            <BsCartFill/>
        </span>
       </div>
    </div>
  )
}

export default Card