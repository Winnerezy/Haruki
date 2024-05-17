import React from 'react'
import { useState } from 'react';
import { BiSolidDownArrow, BiSolidRightArrow } from 'react-icons/bi';
import { Link } from 'react-router-dom';

export default function BarView({ title, icon, items }) {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="flex flex-col h-[250px] w-48 gap-y-4">
      <article className="flex items-center justify-between w-full">
        {icon}

        <p className="ml-4 cursor-pointer">{title}</p>
        <div onClick={() => setIsOpen((prev) => !prev)} className='cursor-pointer'>
          {isOpen ? <BiSolidDownArrow /> : <BiSolidRightArrow />}
        </div>
      </article>
      <div className={`${isOpen ? "translate-y-0" : "-translate-y-8 -z-10 opacity-0"} flex transition duration-500 flex-col gap-y-4`}>
        {items.map((item, index) => (
        <Link className={`text-[15px] font-light ml-4 hover:text-text-primary cursor-pointer`}  key={index} to={`/${item.toLowerCase().split(" ").join("-")}`}>{ item }</Link> ))}
      </div>
    </section>
  );
}
