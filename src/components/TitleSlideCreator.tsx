"use client"
import Heading from '@/components/elements/Heading'
import TitleSlideCanvas from '@/components/TitleSlideCanvas';
import HorizontalRow from '@/components/elements/HorizontalRow';
import { useState, useEffect } from 'react';

export default function TitleSlideCreator() {
    const [formData, setFormData] = useState({
        title: '',
        year: '',
        rating: 0,
        imageUrl: ''
    })

    const generateCanvas = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const { title, year, rating, imageUrl } = event.currentTarget.elements as any;
        const titleValue = typeof title.value === 'string' ? title.value.toUpperCase() : ''; // Convert input title to uppercase

        // Update formData state
        setFormData({
            title: titleValue,
            year: year.value,
            rating: rating.value,
            imageUrl: imageUrl.value
        });
    }
    // Scroll to canvas
    useEffect(() => {
        if (formData.rating) {
            const canvas = document.getElementById('canvasWrapper');
            if (canvas) {
                canvas.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [formData]);
    const inputStyle = 'p-3 my-4 rounded-lg w-full sm:w-[500px] ease-in-out duration-200 bg-neutral-900 placeholder-neutral-700';
    return (
        <div className='flex flex-col mt-12'>
            <Heading text="TITLE SLIDE" size={3} />
            <p>Create the first slide of your slidepost.</p>
            <form onSubmit={generateCanvas} className='py-4 flex flex-col'>
                <label className='mt-12'><Heading text="Entry title" size={6} /></label>
                <p>Film or TV show title.</p>
                <input name="title" type="text" placeholder="Insert title..." className={inputStyle} />
                <label className='mt-4'><Heading text="Release year" size={6} /></label>
                <p>If your entry is a TV show, you can indicate the year it first aired and the year it concluded using the format: <code>YEAR-YEAR</code>. For films you may simply enter the release year.</p>
                <input name="year" type="text" placeholder="Release year..." className={inputStyle} />
                <label className='mt-4'><Heading text="Rating" size={6} /></label>
                <p>You are allowed to choose any number from <code>0.5</code> to <code>5</code>, with increments of <code>0.5</code> between each number.</p>
                <input name="rating" type="number" step="0.5" min="0.5" placeholder="Add rating..." className={inputStyle} />
                <label className='mt-4'><Heading text="Background image" size={6} /></label>
                <p>Write or paste the link of your background image.</p>
                <input name="imageUrl" type="text" placeholder="Background image URL..." className={inputStyle} />
                <button type="submit" className='mt-4 py-4 px-4 sm:w-[150px] rounded-lg bg-neutral-700 hover:bg-neutral-600 ease-in-out duration-200'>Generate</button>
            </form>

            { // Display canvas if formData has been submitted
                formData.rating ?
                    <>
                        <HorizontalRow />
                        <div className='flex flex-col self-center items-center justify-center my-12 sm:w-inherit' id='canvasWrapper'>
                            <Heading text={`Here's your title slide for '${formData.title}'!`} size={3} className='pb-10' />
                            <TitleSlideCanvas
                                title={formData.title}
                                year={formData.year}
                                score={formData.rating}
                                imageUrl={formData.imageUrl}
                                className='rounded-xl w-full sm:w-[405px]'
                            />
                        </div>
                    </> : null
            }
        </div>
    )
}