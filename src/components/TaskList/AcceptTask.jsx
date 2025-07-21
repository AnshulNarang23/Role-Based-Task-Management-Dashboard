import React from 'react'

const AcceptTask = ({data}) => {
    console.log()
  return (
      <div className='h-full flex-shrink-0 w-[300px] p-5 bg-amber-800 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>{data.category}</h3>
                <h4>{data.date}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
            <p className='text-m mt-3'>{data.description}</p>
            <div className='flex justify-between mt-4 '>
                <button className='bg-green-500 py-1 px-2 text-sm'>Mark As Complete</button>
                <button className='bg-red-500 py-1 px-2 text-sm'>Mark As Failed</button>
            </div>
        </div>   
  )
}

export default AcceptTask
