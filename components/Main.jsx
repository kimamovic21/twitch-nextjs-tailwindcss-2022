import React from 'react';
import Categories from './Categories';
import Hero from './Hero';
import IconBar from './IconBar';
import LiveChannels from './LiveChannels';

const Main = () => {
  return (
    <div className='absolute left-[64px] lg:left-[200px] p-2'>
        <Hero />
        <LiveChannels />
        <IconBar />
        <Categories />
    </div>
  )
}

export default Main;



// 1. importujemo LiveChannels.jsx komponentu
// 2. importujemo Hero.jsx komponentu
// 3. importujemo IconBar.jsx komponentu
// 4. importujemo Categories.jsx komponentu