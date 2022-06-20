import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import Logo from '../public/assets/logo.png';
import MyDropdown from './MyDropdown';
import MyDropdown1 from './MyDropdown1';
import {BsSearch, BsPerson} from 'react-icons/bs';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import {useSession, signIn, signOut} from 'next-auth/react';

const Navbar = () => {

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav)
  };

  const { data: session } = useSession();

  return (
    <div className='fixed h-14 w-full flex flex-nowrap items-center p-4 bg-[#080808] mb-2 z-10'>

        {/* Left side */}
            <div className='flex grow items-center justify-start'>
                <Link href='/'>
                    <a className='flex'>
                        <Image src={Logo} 
                               alt='Logo image' 
                               width={36}
                               height={36} 
                               className='cursor-pointer z-10'
                        />
                    </a>
                </Link>
                <p className='p-4'>Browse</p>

                <div className='p-4'>
                  <MyDropdown />
                </div>
            </div>


        {/* Middle */}
            <div className='hidden md:flex grow-[2] items-center justify-center'>
              <div className='bg-gray-500 text-[#fff] flex justify-between items-center 
                                max-w-[400px] w-full m-auto p-2 rounded-2xl'>
                  <div>
                      <input type="text" 
                             className='bg-transparent border-none text-[#fff] focus:outline-none'
                             placeholder='Search'/>
                  </div>
                  <div>
                    <BsSearch />
                  </div>
              </div>
            </div>


        {/* Right side */}

        <div className='hidden md:flex grow items-center justify-end'>
          {session ? (
          <div className='flex items-center'>
            <Link href='/account'>
              <div className='flex items-center'>
                <p className='pr-4 cursor-pointer'>
                  Welcome, {session.user.name}
                </p>
              </div>
            </Link>
            <MyDropdown1 />
          </div>
          ) : (
          <div className='flex items-center'>
            <Link href='/account'>
              <button className='px-4 py-[16px] rounded-lg font-bold bg-[#9147ff]'>
                 Account
              </button>
            </Link>
            <BsPerson size={30}/>
          </div>
          )}
        </div>


        {/* Hamburger Menu */}

        <div onClick={handleNav}
             className='block md:hidden z-10 cursor-pointer'>
            {nav ? 
              (<AiOutlineClose size={25}/>) :
              (<AiOutlineMenu size={25}/>)
            }
        </div>


        {/* Mobile Menu */}

        <div className={
          nav ? 
            'md:hidden fixed top-0 left-0 w-full h-screen bg-[#0e0e10] flex justify-center items-center ease-in duration-300' : 
            'md:hidden fixed top-[-100%] left-0 w-full h-screen bg-[#0e0e10] flex justify-center items-center ease-in duration-300'
          }
        >
          <ul className='text-center'>
            <li onClick={() => setNav(false)}
                className='p-4 text-3xl font-bold'>
              <Link href='/'>Home</Link>
            </li>
            <li onClick={() => setNav(false)}
                className='p-4 text-3xl font-bold'>
              <Link href='/#live'>Live channels</Link>
            </li>
            <li onClick={() => setNav(false)}
                className='p-4 text-3xl font-bold'>
              <Link href='/#categories'>Top categories</Link>
            </li>
            <li onClick={() => setNav(false)}
                className='p-4 text-3xl font-bold'>
              <Link href='/account'>Account</Link>
            </li>
          </ul>
        </div>

    </div>
  )
}

export default Navbar;



// 1. dodajemo i uredujemo elemente
// 2. dodajemo Link element
// 3. dodajemo Image element
// 4. dodajemo headless ui
// 5. dodajemo MyDropDown komponentu
// 6. dodajemo div za Mobile menu
// 7. dodajemo div za Hamburger menu
// 8. dodajemo useState
// 9. u divu za Hamburger menu dodajemo onClick dogadaj
// 10. dodajemo ternarni operator za nav
// 11. u divu za Mobile menu dodajemo ternarni operator za nav
// 12. u divu za desno dodajemo ternarni operator
