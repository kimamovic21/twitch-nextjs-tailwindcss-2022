import Image from 'next/image';
import React from 'react';

const CategoriesItem = ({img, title, viewers, tag1, tag2}) => {
  return (
    <div className=''>
        <Image src={img} 
               width='260'
               height='350'
               alt='/'
        />
        <div>
            <p className='font-bold'>{title}</p>
            <p className='text-sm text-gray-500 py-[2px]'>
                {viewers}
            </p>
           <div className='flex gap-1'>
             <div>
                <p className='text-sm bg-gray-700 rounded-full inline-block p-[2px] px-3'>{tag1}</p> 
             </div>
             <div>
                {tag2 ? (
                 <p className='text-sm bg-gray-700 rounded-full inline-block p-[2px] px-3'>
                    {tag2}
                 </p>
                ) : null}
             </div>
           </div>
       </div>
    </div>
  )
}

export default CategoriesItem;


// 1. dodajemo react props
// 2. dodajemo ternarni operator za tag2