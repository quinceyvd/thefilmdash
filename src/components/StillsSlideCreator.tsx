"use client";
import Heading from "@/components/elements/Heading";
import HorizontalRow from "@/components/elements/HorizontalRow";
import { randomJobDone } from "@/components/functions/randomJobDone";
import { getBase64 } from "@/components/functions/getBase64";
import { useState, useEffect, useRef } from "react";
import StillsSlideCanvas from "@/components/StillsSlideCanvas";
import { downloadCanvas } from "@/components/functions/downloadCanvas";

export default function StillsSlideCreator() {
    const [formData, setFormData] = useState({
        image1: '',
        image2: '',
        image3: '',
        submitted: false,
    })
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const globalStyles = require('@/components/globals/styles.json');

    const generateCanvas = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const { image1, image2, image3 } = event.currentTarget.elements as any;
        // Update formData state
        setFormData({
            image1: formData.image1,
            image2: formData.image2,
            image3: formData.image3,
            submitted: true,
        });
    }
    // Scroll to canvas when form is submitted
    useEffect(() => {
        if (formData.submitted) {
            const canvas = document.getElementById('canvasWrapper');
            if (canvas) {
                canvas.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [formData]);
    const handleImage1Upload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const base64 = await getBase64(file);
            setFormData(prevState => ({ ...prevState, image1: base64 }));
        }
    };
    const handleImage2Upload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const base64 = await getBase64(file);
            setFormData(prevState => ({ ...prevState, image2: base64 }));
        }
    };
    const handleImage3Upload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const base64 = await getBase64(file);
            setFormData(prevState => ({ ...prevState, image3: base64 }));
        }
    };
    return (
        <div className='flex flex-col mt-12'>
            <Heading text="STILLS SLIDE" size={3} />
            <p>Create a stills slide of your slidepost.</p>
            <form onSubmit={generateCanvas} className='py-4 flex flex-col'>
                <label className='mt-4'><Heading text="Image 1" size={6} /></label>
                <p>This still will be placed highest in the image.</p>
                <input name="image1" type="file" accept="image/*" onChange={handleImage1Upload} className='my-6' required />
                <label className='mt-4'><Heading text="Image 2" size={6} /></label>
                <p>This still will be placed in the middle of the image.</p>
                <input name="image2" type="file" accept="image/*" onChange={handleImage2Upload} className='my-6' required />
                <label className='mt-4'><Heading text="Image 3" size={6} /></label>
                <p>This still will be placed at the bottom of the image.</p>
                <input name="image3" type="file" accept="image/*" onChange={handleImage3Upload} className='my-6' required />
                <button type="submit" className={globalStyles.standardButton}>Generate</button>
            </form>
            { // Display canvas if formData has been submitted
                formData.submitted ?
                    <>
                        <HorizontalRow />
                        <div className='flex flex-col self-center items-center justify-center my-12 sm:w-inherit' id='canvasWrapper'>
                            <Heading text={randomJobDone()} size={2} className='pb-4' />
                            <p className='pb-10'>{"Here's"} your newly generated stills slide.</p>
                            <StillsSlideCanvas
                                canvasRef={canvasRef}
                                still1={formData.image1}
                                still2={formData.image2}
                                still3={formData.image3}
                                className='rounded-xl w-full sm:w-[405px]'
                            />
                            <button onClick={() => downloadCanvas(canvasRef.current, 'stills')} className={globalStyles.standardButton}>Download</button>
                        </div>
                    </> : null
            }
        </div>

    )
}