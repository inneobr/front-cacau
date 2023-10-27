'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Navbar from '../navbar';
import Social from '../social';

const Header = () => {
  const [active, setActive] = useState(false);

  useEffect(()=> {
    const handleScroll = () => {
      setActive(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
  },[]);

  return (
    <header className={`fixed w-full z-50 transition-all  ${active ? 'bg-[#030315] py-6' : 'bg=-transparent py-8'}`}>
      <div className="container mx-auto flex flex-col xl:flex-row items-center justify-between">
        <Link href={"#"} className='relative flex w-[226px] h-[37.64px] transition-all mb-4 xl:mb-0'>
            <Image src={'/assets/hero/hero-logo.svg'} 
            fill className='object-cntainer'/>
        </Link>

        <Navbar containerStyles='hidden xl:flex items-center gap-x-8'/>       
        <Social containerStyles='flex text-[24px] gap-x-4' iconStyles='hover:text-accent transition-all duration-300'/>
      </div>
    </header>
  )
}
export default Header  