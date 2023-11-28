"use client";
import { useEffect, useRef } from 'react';
import { Inter } from 'next/font/google';

interface CanvasProps {
    contentSlideBg: string;
    contentSlideText: string;
    title: string;
    score: number;
}
// Font
const inter = Inter({ subsets: ['latin'] })

export default function ContentSlideCanvas({ contentSlideBg, contentSlideText, title, score }: CanvasProps) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            const ctx = canvas.getContext('2d');
            if (ctx) {
                const image = new Image();
                image.src = contentSlideBg;
                image.onload = () => {
                    canvas.width = 1080;
                    canvas.height = 1350;

                    const imageAspectRatio = image.width / image.height;
                    const canvasAspectRatio = canvas.width / canvas.height;
                    let renderableWidth, renderableHeight, xStart, yStart;

                    if (imageAspectRatio < canvasAspectRatio) {
                        renderableWidth = canvas.width;
                        renderableHeight = renderableWidth / imageAspectRatio;
                        xStart = 0;
                        yStart = (canvas.height - renderableHeight) / 2;
                    } else {
                        renderableHeight = canvas.height;
                        renderableWidth = renderableHeight * imageAspectRatio;
                        xStart = (canvas.width - renderableWidth) / 2;
                        yStart = 0;
                    }

                    ctx.drawImage(image, xStart, yStart, renderableWidth, renderableHeight);

                    // Apply a opaque black fill
                    ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
                    ctx.fillRect(0, 0, canvas.width, canvas.height);

                    // Setup background gradient
                    let gradient = ctx.createLinearGradient(0, canvas.height, 0, 0);
                    gradient.addColorStop(0, 'rgba(0, 0, 0, 0.5)'); // 80% opaque
                    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)'); // completely transparent
                    ctx.fillStyle = gradient;
                    ctx.fillRect(0, 0, canvas.width, canvas.height);

                    // Add text to canvas
                    ctx.fillStyle = 'white';
                    ctx.textAlign = 'left';
                    ctx.font = '45px ' + inter.style.fontFamily;

                    const wrapText = (context: any, text: any, x: any, y: any, maxWidth: any, lineHeight: any) => {
                        const words = text.split(' ');
                        let line = '';

                        for (let n = 0; n < words.length; n++) {
                            const testLine = line + words[n] + ' ';
                            const metrics = context.measureText(testLine);
                            const testWidth = metrics.width;
                            if (testWidth > maxWidth && n > 0) {
                                context.fillText(line, x, y);
                                line = words[n] + ' ';
                                y += lineHeight - 30;
                            }
                            else {
                                line = testLine;
                            }
                        }
                        context.fillText(line, x, y);
                    };

                    wrapText(ctx, contentSlideText, 30, 130, canvas.width - 20, 90);

                    const logo = new Image();
                    logo.src = '/logo-sm.png';
                    logo.onload = () => {
                        const logoWidth = 80;
                        const logoHeight = 80;
                        const logoX = (canvas.width / 2 - 450) - (logoWidth / 2);
                        const logoY = canvas.height - logoHeight - 60;
                        ctx.drawImage(logo, logoX, logoY, logoWidth, logoHeight);

                        // Add text next to the logo
                        ctx.fillStyle = 'white';
                        ctx.font = 'bold 30px ' + inter.style.fontFamily;
                        ctx.textAlign = 'left';
                        ctx.fillText(title, logoX + logoWidth + 20, logoY + logoHeight / 2 - 5);

                        // Construct path to star image
                        const starImageSrc = `/stars/${score}.png`;
                        const starImage = new Image();
                        starImage.src = starImageSrc;
                        starImage.onload = () => {
                            // Draw star image onto canvas
                            const starImageWidth = 607;
                            const starImageHeight = 607;
                            const starImageX = -84;
                            const starImageY = 860;
                            ctx.drawImage(starImage, starImageX, starImageY, starImageWidth, starImageHeight);
                        };
                    };
                };
            }
        }
    }, [contentSlideBg, contentSlideText, title, score]);

    return <canvas ref={canvasRef} className='w-[405px] h-[506px]' />;
}