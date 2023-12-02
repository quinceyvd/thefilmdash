"use client";
import { useEffect, useRef } from 'react';

interface CanvasProps {
    still1: string;
    still2: string;
    still3: string;
    className?: string;
    canvasRef?: any;
}

export default function StillsSlideCanvas({ still1, still2, still3, className, canvasRef }: CanvasProps) {
    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            const ctx = canvas.getContext('2d');
            if (ctx) {
                // Set canvas resolution
                canvas.width = 1080;
                canvas.height = 1350;

                // Load images
                const image1 = new Image();
                const image2 = new Image();
                const image3 = new Image();
                const logo = new Image();

                let imagesLoaded = 0;

                const drawImageToCanvas = (image: HTMLImageElement, index: number) => {
                    const canvasWidth = canvas.width;
                    const canvasHeight = canvas.height / 3;
                    const imageAspectRatio = image.width / image.height;
                    let sx, sy, sWidth, sHeight;

                    if (imageAspectRatio > canvasWidth / canvasHeight) {
                        sWidth = image.height * (canvasWidth / canvasHeight);
                        sHeight = image.height;
                        sx = (image.width - sWidth) / 2;
                        sy = 0;
                    } else {
                        sWidth = image.width;
                        sHeight = image.width / (canvasWidth / canvasHeight);
                        sx = 0;
                        sy = (image.height - sHeight) / 2;
                    }

                    ctx.drawImage(image, sx, sy, sWidth, sHeight, 0, index * canvasHeight, canvasWidth, canvasHeight);
                };

                const checkImagesAndDraw = () => {
                    imagesLoaded++;
                    if (imagesLoaded === 3) {
                        drawImageToCanvas(image1, 0);
                        drawImageToCanvas(image2, 1);
                        drawImageToCanvas(image3, 2);
                        const logoWidth = 150;
                        const logoHeight = 150;
                        const logoX = (canvas.width / 2 - 400) - (logoWidth / 2);
                        const logoY = canvas.height - logoHeight - 60;
                        ctx.drawImage(logo, logoX, logoY, logoWidth, logoHeight);
                    }
                };

                image1.onload = checkImagesAndDraw;
                image2.onload = checkImagesAndDraw;
                image3.onload = checkImagesAndDraw;

                image1.src = still1;
                image2.src = still2;
                image3.src = still3;
                logo.src = '/logo-sm.png';
            }
        }
    }, [still1, still2, still3]);

    return <canvas ref={canvasRef} className={'w-full md:w-[405px] lg:w-1/3 xl:w-[405px] xl:rounded-xl ' + className } />;
}