// Gras-Muster zeichnen
function drawGrass() {
    const tileSize = 20;
    for (let x = 0; x < canvas.width; x += tileSize) {
        for (let y = 0; y < canvas.height; y += tileSize) {
            if ((x / tileSize + y / tileSize) % 2 === 0) {
                ctx.fillStyle = '#2d5016';
            } else {
                ctx.fillStyle = '#3a7a26';
            }
            ctx.fillRect(x, y, tileSize, tileSize);
        }
    }
}