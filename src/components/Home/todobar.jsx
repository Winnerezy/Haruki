import React from 'react'

export default function Todobar({ title, total }) {
  return (
    <article className='relative max-w-60 min-w-48 flex-grow h-8 rounded-[10px] p-2 bg-azure-radiance-200 flex flex-fol items-center justify-center'>
        <p className='font-semibold tracking-wide'>{ title }</p>
        <div className='w-6 h-6 rounded-full bg-white absolute right-4 font-bold text-sm text-center'>5</div>
    </article>
  )
}
