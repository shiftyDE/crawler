// Baum zeichnen (in der Mitte der Map)
function drawTree() {
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    // Baumstamm
    ctx.fillStyle = '#8B4513';
    ctx.fillRect(centerX - 5, centerY - 40, 10, 40);

    // Baumkronen (mehrere Kreise für einen natürlichen Look)
    ctx.fillStyle = '#228B22';
    ctx.beginPath();
    ctx.arc(centerX - 8, centerY - 55, 18, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(centerX + 8, centerY - 55, 18, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(centerX, centerY - 70, 20, 0, Math.PI * 2);
    ctx.fill();

    // Dunklere Blätter für Tiefe
    ctx.fillStyle = '#1a6b1a';
    ctx.beginPath();
    ctx.arc(centerX - 10, centerY - 52, 15, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(centerX + 10, centerY - 52, 15, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(centerX, centerY - 67, 17, 0, Math.PI * 2);
    ctx.fill();
}
