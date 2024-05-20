import React from 'react'

export default function TaskCard({ title, description }) {
  return (
    <div className='flex flex-col w-full p-4 min-h-36 max-h-48 rounded-md shadow-md gap-y-8 hover:bg-azure-radiance-50'>
        <article className='text-md font-semibold text-center'>
            { title }
        </article>
        <p className='font-light '>{ description }</p>
    </div>
  )
}
