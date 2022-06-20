import React from 'react';
import { rec_channels, top_channels } from '../data/mock-data';
import { RiMovieLine } from 'react-icons/ri'
import Image from 'next/image';
import { BsDot} from 'react-icons/bs'

const SideMenu = () => {
  return (
    <div className='fixed w-14 h-screen sm:w-16 xl:w-[15rem] p-2 bg-[#0e0e10]'>

        <div>
            <p className='hidden xl:flex uppercase font-bold text-sm pb-4'>
                Recommended channels
            </p>
            <p><RiMovieLine className='xl:hidden justify-center w-full'
                            size={20}
                />
            </p>
        </div>
        {rec_channels.map((item, index) => (
            <div className='inline-flex items-center w-full py-[2px]'
                 key={index}>
                <div>
                    <Image src={item.avatar} 
                           width='23' 
                           height='23'
                           alt={item.username}
                    />
                </div>
                <div className='hidden xl:flex justify-between w-full'>
                    <div>
                        <p>{item.username}</p>
                        <p className='text-gray-400'>
                            {item.game_name}
                        </p>
                    </div>
                    <p className='flex items-center'>
                        <BsDot color='red'
                               size={30}/>
                        {item.rank}
                    </p>
                </div>
            </div>
        ))}

        <div>
            <p className='hidden xl:flex uppercase font-bold text-sm py-4'>
                Top channels
            </p>
            <p><RiMovieLine className='xl:hidden justify-center w-full'
                            size={20}
                />
            </p>
        </div>
        {top_channels.map((item, index) => (
            <div className='inline-flex items-center w-full py-[2px]'
                 key={index}>
              <div>
                    <Image src={item.avatar} 
                           width='30' 
                           height='30'
                           alt={item.username}
                    />
                </div>
                <div className='hidden xl:flex justify-between w-full'>
                    <div>
                        <p>{item.username}</p>
                        <p className='text-gray-400'>
                            {item.game_name}
                        </p>
                    </div>
                    <p className='flex items-center'>
                        <BsDot color='red'
                               size={30}/>
                        {item.rank}
                    </p>
                </div>
            </div>
        ))}

    </div>
  )
}

export default SideMenu;


// 1. dodajemo map metodu