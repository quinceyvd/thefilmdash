"use client";
import { useEffect, useRef } from 'react';
import { Inter } from 'next/font/google';

// Types for props
interface CanvasProps {
    title: string;
    year: string;
    score: number;
    imageUrl: string;
    className?: string;
    fontSize?: number;
    canvasRef?: any;
}

// Font
const inter = Inter({ subsets: ['latin'] })

export default function TitleSlideCanvas({ title, year, score, imageUrl, fontSize, className, canvasRef }: CanvasProps) {
    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            const ctx = canvas.getContext('2d');
            if (ctx) {
                // Setup canvas and draw background image
                const image = new Image();
                image.src = imageUrl;
                image.onload = () => {
                    // Set canvas resolution
                    canvas.width = 1080;
                    canvas.height = 1350;

                    const imageAspectRatio = image.width / image.height;
                    const canvasAspectRatio = canvas.width / canvas.height;
                    let renderableHeight, renderableWidth, xStart, yStart;

                    // Fit background image onto canvas
                    if (imageAspectRatio < canvasAspectRatio) {
                        renderableWidth = image.width;
                        renderableHeight = image.width / canvasAspectRatio;
                        xStart = 0;
                        yStart = (image.height - renderableHeight) / 2;
                    } else if (imageAspectRatio > canvasAspectRatio) {
                        renderableHeight = image.height;
                        renderableWidth = image.height * canvasAspectRatio;
                        xStart = (image.width - renderableWidth) / 2;
                        yStart = 0;
                    } else {
                        renderableHeight = image.height;
                        renderableWidth = image.width;
                        xStart = 0;
                        yStart = 0;
                    }
                    ctx.drawImage(image, xStart, yStart, renderableWidth, renderableHeight, 0, 0, canvas.width, canvas.height);

                    // Setup background gradient
                    let gradient = ctx.createLinearGradient(0, canvas.height, 0, 0);
                    gradient.addColorStop(0, 'rgba(0, 0, 0, 0.8)'); // 80% opaque
                    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)'); // completely transparent
                    ctx.fillStyle = gradient;
                    ctx.fillRect(0, 0, canvas.width, canvas.height);

                    // Wait for logo asset to load in
                    const logo = new Image();
                    logo.src = '/logo-sm.png';

                    function wrapText(context: any, text: any, x: any, y: any, maxWidth: any, lineHeight: any) {
                        const words = text.split(' ');
                        let line = '';

                        for (let n = 0; n < words.length; n++) {
                            const testLine = line + words[n] + ' ';
                            const metrics = context.measureText(testLine);
                            const testWidth = metrics.width;
                            if (testWidth > maxWidth && n > 0) {
                                context.fillText(line, x, y);
                                line = words[n] + ' ';
                                y += lineHeight;
                            }
                            else {
                                line = testLine;
                            }
                        }
                        context.fillText(line, x, y);
                    }

                    // When logo is loaded, render it on the canvas together with the text
                    logo.onload = () => {
                        // Add title and year to canvas
                        ctx.fillStyle = 'white';
                        ctx.textAlign = 'center';
                        ctx.font = `bold ${fontSize}px ` + inter.style.fontFamily;
                        wrapText(ctx, title, canvas.width / 2, canvas.height * 0.75, canvas.width - 20, 90);
                        ctx.font = '40px ' + inter.style.fontFamily;
                        ctx.fillText(year, canvas.width / 2, canvas.height * 0.75 + 50);

                        // Add logo to canvas
                        const logoWidth = 150;
                        const logoHeight = 150;
                        const logoX = (canvas.width / 2) - (logoWidth / 2);
                        const logoY = canvas.height - logoHeight - 60;
                        ctx.drawImage(logo, logoX, logoY, logoWidth, logoHeight);

                        // Construct path to star image
                        const starImageSrc = `/stars/${score}.png`;

                        // Load star image
                        const starImage = new Image();
                        starImage.src = starImageSrc;
                        starImage.onload = () => {
                            // Draw star image onto canvas
                            const starImageWidth = 1080;
                            const starImageHeight = 1080;
                            const starImageX = (canvas.width / 2) - (starImageWidth / 2);
                            const starImageY = canvas.height - starImageHeight - 100; // 20px space from the bottom
                            ctx.drawImage(starImage, starImageX, starImageY, starImageWidth, starImageHeight);
                        };
                    };
                };
            }
        }
    }, [title, year, score, imageUrl, fontSize]);

    return <canvas ref={canvasRef} className={'w-full md:w-[405px] xl:w-[405px] xl:rounded-xl ' + className } />;
}