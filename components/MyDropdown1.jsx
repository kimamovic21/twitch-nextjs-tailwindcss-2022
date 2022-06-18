import React, {Fragment} from 'react';
import { Menu, Transition } from '@headlessui/react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import {useSession, signIn, signOut} from 'next-auth/react';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

const MyDropdown1 = () => {
  return (
    <div>

        <Menu as='div' className='relative text-left'>
            <div className='flex'>
                <Menu.Button>
                  <BsThreeDotsVertical size={20} />
                </Menu.Button>
            </div>

            <Transition
               as={Fragment}
               enter='transition ease-out duration-100'
               enterFrom='transform opacity-0 scale-95'
               enterTo='transform opacity-100 scale-100'
               leave='transition ease-in duration-75'
               leaveFrom='transform opacity-100 scale-100'
               leaveTo='transform opacity-0 scale-95'
            >

                 <Menu.Items className='origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg 
                                      bg-[#0e0e10] ring-1 ring-white ring-opacity-5 focus:outline-none'>
                   <div className='py-1'>
                     <Menu.Item>
                       {({ active }) => (
                        <a
                         href='/account'
                         className={classNames(
                          active
                            ? 'bg-gray-500 text-gray-100'
                            : 'text-gray-200',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Account
                      </a>
                    )}

                  </Menu.Item>
                 
                  <Menu.Item>
                    {({ active }) => (
                      <p onClick={()=>signOut()}
                         className={classNames(
                          active
                            ? 'bg-gray-500 text-gray-100 cursor-pointer'
                            : 'text-gray-200',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Logout
                      </p>
                    )}
                  </Menu.Item>
                   </div>

                    </Menu.Items>

                 </Transition>
                 
             </Menu>

    </div>
  )
}

export default MyDropdown1;