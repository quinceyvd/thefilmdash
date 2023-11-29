"use client";
import Heading from '@/components/elements/Heading'
import HorizontalRow from '@/components/elements/HorizontalRow';
import TitleSlideCreator from '@/components/TitleSlideCreator';
import StillsSlideCreator from '@/components/StillsSlideCreator';
import ContentSlideCreator from '@/components/ContentSlideCreator';
import { useState } from 'react';

export default function Home() {
  const [activeSlide, setActiveSlide] = useState('');
  const updateSlideState = (slide: string) => {
    if (slide === activeSlide) {
      setActiveSlide('');
    } else {
      setActiveSlide(slide);
    }
  }
  return (
    <main className='flex flex-col h-full p-6 pt-14'>
      <div className='flex flex-col xl:justify-center lg:mx-auto lg:w-1/3'>
        <Heading text="Home" size={1} />
        <p>Create a new slidepost presentation.</p>
        <HorizontalRow />
        <div className='flex flex-row space-between justify-between my-4'>
          <button className={activeSlide === 'title' ? 'mt-4 py-4 px-4 sm:w-[150px] border-b-4 border-rose-600 hover:bg-neutral-800 ease-in-out duration-200' : 'mt-4 py-4 px-4 sm:w-[150px] border-b-4 border-neutral-900 hover:border-neutral-400 hover:bg-neutral-800 ease-in-out duration-200'} onClick={() => updateSlideState('title')}>Title</button>
          <button className={activeSlide === 'stills' ? 'mt-4 py-4 px-4 sm:w-[150px] border-b-4 border-rose-600 hover:bg-neutral-800 ease-in-out duration-200' : 'mt-4 py-4 px-4 sm:w-[150px] border-b-4 border-neutral-900 hover:border-neutral-400 hover:bg-neutral-800 ease-in-out duration-200'} onClick={() => updateSlideState('stills')}>Stills</button>
          <button className={activeSlide === 'content' ? 'mt-4 py-4 px-4 sm:w-[150px] border-b-4 border-rose-600 hover:bg-neutral-800 ease-in-out duration-200' : 'mt-4 py-4 px-4 sm:w-[150px] border-b-4 border-neutral-900 hover:border-neutral-400 hover:bg-neutral-800 ease-in-out duration-200'} onClick={() => updateSlideState('content')}>Content</button>
        </div>
        <div className={activeSlide !== 'title' ? 'h-[70vh]' : ''}>
          {
            activeSlide === 'title' ?
              <TitleSlideCreator />
              : activeSlide === 'stills' ?
                <Heading text="Not yet available." size={3} className='text-neutral-600 font-normal pt-20 text-center' />
                : activeSlide === 'content' ?
                  <Heading text="Not yet available." size={3} className='text-neutral-600 font-normal pt-20 text-center' />
                  : <Heading text="Select a slide type..." size={3} className='text-neutral-600 font-normal pt-20 text-center' />
          }
        </div>
      </div>
    </main>
  )
}