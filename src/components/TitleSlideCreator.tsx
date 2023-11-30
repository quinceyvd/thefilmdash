"use client"
import Heading from '@/components/elements/Heading'
import TitleSlideCanvas from '@/components/TitleSlideCanvas';
import HorizontalRow from '@/components/elements/HorizontalRow';
import { randomJobDone } from '@/components/functions/randomJobDone'
import { getBase64 } from '@/components/functions/getBase64';
import { useState, useEffect, useRef } from 'react';

export default function TitleSlideCreator() {
    const [formData, setFormData] = useState({
        title: '',
        year: '',
        rating: 0,
        imageUrl: '',
        fontSize: 90
    })
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    const generateCanvas = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const { title, year, rating, imageUrl, fontSize } = event.currentTarget.elements as any;
        const titleValue = typeof title.value === 'string' ? title.value.toUpperCase() : ''; // Convert input title to uppercase
        const FontSizeValue = fontSize.value ? fontSize.value : 90; // Set default font size to 90px
        // Update formData state
        setFormData({
            title: titleValue,
            year: year.value,
            rating: rating.value,
            imageUrl: formData.imageUrl,
            fontSize: FontSizeValue,
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
    
    const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const base64 = await getBase64(file);
            setFormData(prevState => ({ ...prevState, imageUrl: base64 }));
        }
    };

    const downloadImage = () => {
        const canvas = canvasRef.current;
        if (!canvas) {
            alert('Canvas not found');
            return;
        }
        const link = document.createElement('a');
        link.download = 'title.png';
        link.href = canvas.toDataURL();
        link.click();
    };
    return (
        <div className='flex flex-col mt-12'>
            <Heading text="TITLE SLIDE" size={3} />
            <p>Create the first slide of your slidepost.</p>
            <form onSubmit={generateCanvas} className='py-4 flex flex-col'>
                <label className='mt-12'><Heading text="Entry title" size={6} /></label>
                <p>Film or TV show title.</p>
                <input name="title" type="text" placeholder="Insert title..." className={inputStyle} />
                <label className='mt-12'><Heading text="Font size*" size={6} /></label>
                <p>(Optional) - You can specify the font size, in case your entry has a long title. Normal font size: 90px.</p>
                <input name="fontSize" type="number" placeholder="Specify font size..." className={inputStyle} />
                <label className='mt-4'><Heading text="Release year" size={6} /></label>
                <p>If your entry is a TV show, you can indicate the year it first aired and the year it concluded using the format: <code>YEAR-YEAR</code>. For films you may simply enter the release year.</p>
                <input name="year" type="text" placeholder="Release year..." className={inputStyle} />
                <label className='mt-4'><Heading text="Rating" size={6} /></label>
                <p>You are allowed to choose any number from <code>0.5</code> to <code>5</code>, with increments of <code>0.5</code> between each number.</p>
                <input name="rating" type="number" step="0.5" min="0.5" placeholder="Add rating..." className={inputStyle} />
                <label className='mt-4'><Heading text="Background image" size={6} /></label>
                {/* <p>Write or paste the link of your background image.</p> */}
                {/* <input name="imageUrl" type="text" placeholder="Background image URL..." className={inputStyle} /> */}
                <p>Please upload an image from your device.</p>
                <input type="file" accept="image/*" onChange={handleImageUpload} className='my-6' />
                <button type="submit" className='mt-4 py-4 px-4 sm:w-[150px] rounded-lg bg-neutral-700 hover:bg-neutral-600 ease-in-out duration-200'>Generate</button>
            </form>

            { // Display canvas if formData has been submitted
                formData.rating ?
                    <>
                        <HorizontalRow />
                        <div className='flex flex-col self-center items-center justify-center my-12 sm:w-inherit' id='canvasWrapper'>
                            <Heading text={randomJobDone()} size={2} className='pb-4' />
                            <p className='pb-10'>{"Here's"} your title card for {formData.title}.</p>
                            <TitleSlideCanvas
                                canvasRef={canvasRef}
                                title={formData.title}
                                year={formData.year}
                                score={formData.rating}
                                imageUrl={formData.imageUrl}
                                fontSize={formData.fontSize}
                                className='rounded-xl w-full sm:w-[405px]'
                            />
                            <button onClick={downloadImage} className='mt-8 py-4 px-4 sm:w-[150px] rounded-lg bg-neutral-700 hover:bg-neutral-600 ease-in-out duration-200'>Download</button>
                        </div>
                    </> : null
            }
        </div>
    )
}