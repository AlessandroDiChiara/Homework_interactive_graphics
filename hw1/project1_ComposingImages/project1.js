// bgImg is the background image to be modified.
// fgImg is the foreground image.
// fgOpac is the opacity of the foreground image.
// fgPos is the position of the foreground image in pixels. It can be negative and (0,0) means the top-left pixels of the foreground and background are aligned.

function composite(bgImg, fgImg, fgOpac, fgPos) {
    const bgWidth = bgImg.width;
    const bgHeight = bgImg.height;

    const fgWidth = fgImg.width;

    const fgHeight = fgImg.height;

    for (let y = 0; y < fgHeight; y++) {
        for (let x = 0; x < fgWidth; x++) {
            const fgX = fgPos.x + x;
            const fgY = fgPos.y + y;

          
            if (fgX >= 0 && fgX < bgWidth && fgY >= 0 && fgY < bgHeight) {
                const bgIndex = (fgY * bgWidth + fgX) * 4;
                const fgIndex = (y * fgWidth + x) * 4;
                const fgAlpha = (fgImg.data[fgIndex + 3] / 255) * fgOpac;
                const invAlpha = 1 - fgAlpha;

              
                for (let i = 0; i < 3; i++) {
                    bgImg.data[bgIndex + i] = fgImg.data[fgIndex + i] * fgAlpha + bgImg.data[bgIndex + i] * invAlpha;
                }
                
               
                bgImg.data[bgIndex + 3] = 255; 
            }
        }
    }
}