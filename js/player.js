// Spieler-Design zeichnen (relativ zum gegebenen Punkt)
function drawPlayer(px, py) {
    const pixelSize = 2;

    // Körper
    ctx.fillStyle = '#3a7bd5';
    ctx.fillRect(px + 8 * pixelSize, py + 8 * pixelSize, 16 * pixelSize, 16 * pixelSize);
    ctx.strokeStyle = '#2a5f9e';
    ctx.lineWidth = 1;
    ctx.strokeRect(px + 8 * pixelSize, py + 8 * pixelSize, 16 * pixelSize, 16 * pixelSize);

    // Kopf
    ctx.fillStyle = '#f5a623';
    ctx.fillRect(px + 10 * pixelSize, py + 5 * pixelSize, 8 * pixelSize, 8 * pixelSize);
    ctx.strokeStyle = '#d4880f';
    ctx.lineWidth = 1;
    ctx.strokeRect(px + 10 * pixelSize, py + 5 * pixelSize, 8 * pixelSize, 8 * pixelSize);

    // Augen
    ctx.fillStyle = '#1a1a1a';
    ctx.fillRect(px + 11 * pixelSize, py + 6 * pixelSize, 2 * pixelSize, 2 * pixelSize);
    ctx.fillRect(px + 15 * pixelSize, py + 6 * pixelSize, 2 * pixelSize, 2 * pixelSize);

    // Mund
    ctx.fillStyle = '#8b0000';
    ctx.fillRect(px + 12 * pixelSize, py + 12 * pixelSize, 2 * pixelSize, 1 * pixelSize);

    // Arme
    ctx.fillStyle = '#3a7bd5';
    ctx.fillRect(px + 5 * pixelSize, py + 10 * pixelSize, 3 * pixelSize, 2 * pixelSize);
    ctx.fillRect(px + 21 * pixelSize, py + 10 * pixelSize, 3 * pixelSize, 2 * pixelSize);
    ctx.strokeStyle = '#2a5f9e';
    ctx.lineWidth = 1;
    ctx.strokeRect(px + 5 * pixelSize, py + 10 * pixelSize, 3 * pixelSize, 2 * pixelSize);
    ctx.strokeRect(px + 21 * pixelSize, py + 10 * pixelSize, 3 * pixelSize, 2 * pixelSize);

    // Beine
    ctx.fillStyle = '#3a7bd5';
    ctx.fillRect(px + 9 * pixelSize, py + 20 * pixelSize, 3 * pixelSize, 4 * pixelSize);
    ctx.fillRect(px + 19 * pixelSize, py + 20 * pixelSize, 3 * pixelSize, 4 * pixelSize);
    ctx.strokeStyle = '#2a5f9e';
    ctx.lineWidth = 1;
    ctx.strokeRect(px + 9 * pixelSize, py + 20 * pixelSize, 3 * pixelSize, 4 * pixelSize);
    ctx.strokeRect(px + 19 * pixelSize, py + 20 * pixelSize, 3 * pixelSize, 4 * pixelSize);
}