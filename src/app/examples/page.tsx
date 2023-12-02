"use client";
import Heading from '@/components/elements/Heading'
import TitleSlideCanvas from '@/components/TitleSlideCanvas'
import StillsSlideCanvas from '@/components/StillsSlideCanvas'
import ContentSlideCanvas from '@/components/ContentSlideCanvas'
import type { Metadata } from 'next'
import HorizontalRow from '@/components/elements/HorizontalRow'
import { useRef } from 'react'

export default function Examples() {
  // Frequently reused style presets
  const scrollableDiv = 'flex flex-row overflow-auto xl:p-6';
  const canvasItem = 'xl:mr-5';

  // Template slides data
  const templates = require('@/components/globals/templates.json');

  return (
    <main className='flex flex-col h-full'>
      <div className='flex flex-col xl:justify-center xl:items-left xl:m-auto xl:w-5/8'>
        <div className='p-6 pt-14'>
          <Heading text="Examples" size={1} />
          <p>Each type of slide variant is provided with 3 examples.</p>
          <HorizontalRow />
        </div>
        <div className='p-6'>
          <Heading text="TITLES" size={3} />
          <p>Image used for the first {"'title'"} slide. On this slide the title, rating and release year are displayed.</p>
        </div>
        <div className={scrollableDiv}>
          <TitleSlideCanvas
            canvasRef={useRef<HTMLCanvasElement | null>(null)}
            title={templates[1].title}
            year={templates[1].year}
            score={templates[1].score}
            imageUrl={templates[1].titleSlideBg}
            fontSize={90}
            className={canvasItem}
          />
          <TitleSlideCanvas
            canvasRef={useRef<HTMLCanvasElement | null>(null)}
            title={templates[2].title}
            year={templates[2].year}
            score={templates[2].score}
            imageUrl={templates[2].titleSlideBg}
            fontSize={70}
            className={canvasItem}
          />
          <TitleSlideCanvas
            canvasRef={useRef<HTMLCanvasElement | null>(null)}
            title={templates[3].title}
            year={templates[3].year}
            score={templates[3].score}
            imageUrl={templates[3].titleSlideBg}
            fontSize={90}
          />
        </div>
        <div className='p-6'>
          <Heading text="STILLS" size={3} />
          <p>Image used for displaying 3 stills.</p>
        </div>
        <div className={scrollableDiv}>
          <StillsSlideCanvas
            canvasRef={useRef<HTMLCanvasElement | null>(null)}
            still1={templates[1].still1}
            still2={templates[1].still2}
            still3={templates[1].still3}
            className={canvasItem}
          />
          <StillsSlideCanvas
            canvasRef={useRef<HTMLCanvasElement | null>(null)}
            still1={templates[2].still1}
            still2={templates[2].still2}
            still3={templates[2].still3}
            className={canvasItem}
          />
          <StillsSlideCanvas
            canvasRef={useRef<HTMLCanvasElement | null>(null)}
            still1={templates[3].still1}
            still2={templates[3].still2}
            still3={templates[3].still3}
          />
        </div>
        <div className='p-6'>
          <Heading text="TEXT CONTENT" size={3} />
          <p>Image where text content is displayed. Along with the title and rating in the bottom of the image.</p>
        </div>
        <div className={scrollableDiv}>
          <ContentSlideCanvas
            canvasRef={useRef<HTMLCanvasElement | null>(null)}
            contentSlideBg={templates[1].contentSlideBg}
            contentSlideText={templates[1].contentSlideText}
            title={templates[1].title}
            score={templates[1].score}
            className={canvasItem}
          />
          <ContentSlideCanvas
            canvasRef={useRef<HTMLCanvasElement | null>(null)}
            contentSlideBg={templates[2].contentSlideBg}
            contentSlideText={templates[2].contentSlideText}
            title={templates[2].title}
            score={templates[2].score}
            className={canvasItem}
          />
          <ContentSlideCanvas
            canvasRef={useRef<HTMLCanvasElement | null>(null)}
            contentSlideBg={templates[3].contentSlideBg}
            contentSlideText={templates[3].contentSlideText}
            title={templates[3].title}
            score={templates[3].score}
          />
        </div>
      </div>
    </main>
  )
}