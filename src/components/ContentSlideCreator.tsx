"use client";
import Heading from "@/components/elements/Heading";
import HorizontalRow from "@/components/elements/HorizontalRow";
import { randomJobDone } from "@/components/functions/randomJobDone";
import { getBase64 } from "@/components/functions/getBase64";
import { useState, useEffect, useRef } from "react";
import StillsSlideCanvas from "@/components/StillsSlideCanvas";
import { downloadCanvas } from "@/components/functions/downloadCanvas";
import ContentSlideCanvas from "./ContentSlideCanvas";

export default function ContentSlideCreator() {
    const [formData, setFormData] = useState({
        bgImage: '',
        textContent: '',
        title: '',
        rating: 0,
    })
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const inputStyle = 'p-3 my-4 rounded-lg w-full sm:w-[500px] ease-in-out duration-200 bg-neutral-900 placeholder-neutral-700'
    const buttonStyle = 'mt-4 py-4 px-4 sm:w-[150px] rounded-lg bg-neutral-700 hover:bg-neutral-600 ease-in-out duration-200'
    const generateCanvas = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const { bgImage, textContent, title, rating } = event.currentTarget.elements as any;
        const titleValue = typeof title.value === 'string' ? title.value.toUpperCase() : ''; // Convert input title to uppercase
        // Update formData state
        setFormData({
            bgImage: formData.bgImage,
            textContent: textContent.value,
            title: titleValue,
            rating: rating.value,
        });
        console.log(formData)
    }
    // Scroll to canvas when form is submitted
    useEffect(() => {
        if (formData.rating) {
            const canvas = document.getElementById('canvasWrapper');
            if (canvas) {
                canvas.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [formData]);
    const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const base64 = await getBase64(file);
            setFormData(prevState => ({ ...prevState, bgImage: base64 }));
        }
    };
    return (
        <div className='flex flex-col mt-12'>
            <Heading text="CONTENT SLIDE" size={3} />
            <p>Create a content slide for your slidepost review.</p>
            <form onSubmit={generateCanvas} className='py-4 flex flex-col'>
                <label className='mt-4'><Heading text="Title" size={6} /></label>
                <p>Film or TV show title.</p>
                <input name="title" type="text" placeholder="Insert title..." className={inputStyle} required />
                <label className='mt-4'><Heading text="Background image" size={6} /></label>
                <p>Please upload an image from your device.</p>
                <input name="bgImage" type="file" accept="image/*" onChange={handleImageUpload} className={inputStyle} required />
                <label className='mt-4'><Heading text="Rating" size={6} /></label>
                <p>You are allowed to choose any number from <code>0.5</code> to <code>5</code>, with increments of <code>0.5</code> between each number.</p>
                <input name="rating" type="number" step="0.5" min="0.5" placeholder="Add rating..." className={inputStyle} required />
                <label className='mt-4'><Heading text="Review content" size={6} /></label>
                <p>Write your review here. (max 706 characters)</p>
                <textarea maxLength={706} name="textContent" placeholder="Write your review here..." className='p-3 my-4 rounded-lg w-full sm:w-[500px] ease-in-out duration-200 bg-neutral-900 placeholder-neutral-700' required />
                <button type="submit" className={buttonStyle}>Generate</button>
            </form>
            { // Display canvas if formData has been submitted
                formData.rating ?
                    <>
                        <HorizontalRow />
                        <div className='flex flex-col self-center items-center justify-center my-12 sm:w-inherit' id='canvasWrapper'>
                            <Heading text={randomJobDone()} size={2} className='pb-4' />
                            <p className='pb-10'>{"Here's"} your newly generated content slide.</p>
                            <ContentSlideCanvas
                                canvasRef={canvasRef}
                                contentSlideBg={formData.bgImage}
                                contentSlideText={formData.textContent}
                                title={formData.title}
                                score={formData.rating}
                                className='rounded-xl w-full sm:w-[405px]'
                            />
                            <button onClick={() => downloadCanvas(canvasRef.current, 'stills')} className={buttonStyle}>Download</button>
                        </div>
                    </> : null
            }
        </div>

    )
}