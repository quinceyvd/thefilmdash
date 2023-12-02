export const downloadCanvas = (canvas: any, slideType: string) => {
    if (!canvas) {
        alert('Canvas not found');
        return;
    }
    const link = document.createElement('a');
    link.download = `${slideType}.png`;
    link.href = canvas.toDataURL();
    link.click();
};