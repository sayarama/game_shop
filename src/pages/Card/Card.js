import React from 'react'
import { BsCartFill } from "react-icons/bs";

function Card(props) {
  return (
    <div className='bg-indigo-600 w-64 rounded-xl flex flex-col justify-center p-3'>
        <img className='w-60' src={props.images}/>
        <p>{props.title}</p>
        <span className='flex justify-between items-center'>
            <p className='bg-white text-black p-1 rounded-lg'>Top Up</p>
            <BsCartFill/>
        </span>
    </div>
  )
}

export default Card