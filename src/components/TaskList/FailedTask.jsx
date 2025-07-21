import React from 'react'

const FailedTask = ({data}) => {
  return (
        <div className='h-full flex-shrink-0 w-[300px] p-5 bg-yellow-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-green-400 px-3 py-1 rounded text-sm'>{data.category}</h3>
                <h4>{data.date}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
            <p className='text-m mt-3'>{data.description}</p>
            <div className='mt-4'>
                <button className='bg-red-500 py-1 px-2 text-sm w-full'>Failed</button>
            </div>
        </div>     
        
  )
}

export default FailedTask
