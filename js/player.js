// Spieler-Position
var playerX = 0;
var playerY = 0;

// Canvas initialisieren
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Spiel-Loop starten
function gameLoop() {
    // Steuerung aktualisieren
    updatePlayerMovement();

    // Spielerposition auf Canvas-Grenzen begrenzen
    var pixelSize = 2;
    var playerSize = 14 * pixelSize; // Spielergröße basierend auf den gezeichneten Pixel
    playerX = Math.max(0, Math.min(playerX, canvas.width - playerSize));
    playerY = Math.max(0, Math.min(playerY, canvas.height - playerSize));

    // Gras zeichnen
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
    drawGrass();

    // Baum in der Mitte zeichnen
    drawTree();

    // Spieler zeichnen
    drawPlayer(playerX, playerY);

    // Loop
    requestAnimationFrame(gameLoop);
}

gameLoop();

// Spieler-Design zeichnen (relativ zum gegebenen Punkt)
function drawPlayer(px, py) {
    const pixelSize = 2;

    // --- Kopf / Helm ---
    // Helm mit Visier (ähnlich dem typischen Suikoden-Krieger-Helm)
    ctx.fillStyle = '#c0c0c0';
    ctx.fillRect(px + 7 * pixelSize, py + 4 * pixelSize, 18 * pixelSize, 9 * pixelSize);
    ctx.strokeStyle = '#a0a0a0';
    ctx.lineWidth = 1;
    ctx.strokeRect(px + 7 * pixelSize, py + 4 * pixelSize, 18 * pixelSize, 9 * pixelSize);

    // Visier
    ctx.fillStyle = '#333333';
    ctx.fillRect(px + 9 * pixelSize, py + 5 * pixelSize, 14 * pixelSize, 3 * pixelSize);
    ctx.fillStyle = '#666666';
    ctx.fillRect(px + 10 * pixelSize, py + 5 * pixelSize, 12 * pixelSize, 2 * pixelSize);

    // --- Rüstung / Torso ---
    // Rüstung mit Schulterpanzer
    ctx.fillStyle = '#8b0000';
    ctx.fillRect(px + 6 * pixelSize, py + 13 * pixelSize, 20 * pixelSize, 12 * pixelSize);
    ctx.strokeStyle = '#6b0000';
    ctx.lineWidth = 1;
    ctx.strokeRect(px + 6 * pixelSize, py + 13 * pixelSize, 20 * pixelSize, 12 * pixelSize);

    // Schulterpanzer links
    ctx.fillStyle = '#8b0000';
    ctx.fillRect(px + 3 * pixelSize, py + 13 * pixelSize, 3 * pixelSize, 4 * pixelSize);
    ctx.fillRect(px + 3 * pixelSize, py + 13 * pixelSize, 3 * pixelSize, 3 * pixelSize);
    ctx.fillStyle = '#6b0000';
    ctx.fillRect(px + 3 * pixelSize, py + 13 * pixelSize, 3 * pixelSize, 3 * pixelSize);

    // Schulterpanzer rechts
    ctx.fillStyle = '#8b0000';
    ctx.fillRect(px + 23 * pixelSize, py + 13 * pixelSize, 3 * pixelSize, 4 * pixelSize);
    ctx.fillRect(px + 23 * pixelSize, py + 13 * pixelSize, 3 * pixelSize, 3 * pixelSize);
    ctx.fillStyle = '#6b0000';
    ctx.fillRect(px + 23 * pixelSize, py + 13 * pixelSize, 3 * pixelSize, 3 * pixelSize);

    // --- Arme ---
    // Linker Arm
    ctx.fillStyle = '#8b0000';
    ctx.fillRect(px + 2 * pixelSize, py + 15 * pixelSize, 4 * pixelSize, 6 * pixelSize);
    ctx.strokeStyle = '#6b0000';
    ctx.lineWidth = 1;
    ctx.strokeRect(px + 2 * pixelSize, py + 15 * pixelSize, 4 * pixelSize, 6 * pixelSize);

    // Linker Arm - Handschuh
    ctx.fillStyle = '#c0c0c0';
    ctx.fillRect(px + 1 * pixelSize, py + 14 * pixelSize, 4 * pixelSize, 2 * pixelSize);
    ctx.strokeStyle = '#a0a0a0';
    ctx.lineWidth = 1;
    ctx.strokeRect(px + 1 * pixelSize, py + 14 * pixelSize, 4 * pixelSize, 2 * pixelSize);

    // Rechter Arm
    ctx.fillStyle = '#8b0000';
    ctx.fillRect(px + 22 * pixelSize, py + 15 * pixelSize, 4 * pixelSize, 6 * pixelSize);
    ctx.strokeStyle = '#6b0000';
    ctx.lineWidth = 1;
    ctx.strokeRect(px + 22 * pixelSize, py + 15 * pixelSize, 4 * pixelSize, 6 * pixelSize);

    // Rechter Arm - Handschuh
    ctx.fillStyle = '#c0c0c0';
    ctx.fillRect(px + 23 * pixelSize, py + 14 * pixelSize, 4 * pixelSize, 2 * pixelSize);
    ctx.strokeStyle = '#a0a0a0';
    ctx.lineWidth = 1;
    ctx.strokeRect(px + 23 * pixelSize, py + 14 * pixelSize, 4 * pixelSize, 2 * pixelSize);

    // --- Beine ---
    // linke Hose / Bein
    ctx.fillStyle = '#1a1a1a';
    ctx.fillRect(px + 8 * pixelSize, py + 25 * pixelSize, 4 * pixelSize, 6 * pixelSize);
    ctx.strokeStyle = '#0a0a0a';
    ctx.lineWidth = 1;
    ctx.strokeRect(px + 8 * pixelSize, py + 25 * pixelSize, 4 * pixelSize, 6 * pixelSize);

    // rechte Hose / Bein
    ctx.fillStyle = '#1a1a1a';
    ctx.fillRect(px + 18 * pixelSize, py + 25 * pixelSize, 4 * pixelSize, 6 * pixelSize);
    ctx.strokeStyle = '#0a0a0a';
    ctx.lineWidth = 1;
    ctx.strokeRect(px + 18 * pixelSize, py + 25 * pixelSize, 4 * pixelSize, 6 * pixelSize);

    // --- Stiefel ---
    // linker Stiefel
    ctx.fillStyle = '#222222';
    ctx.fillRect(px + 7 * pixelSize, py + 31 * pixelSize, 4 * pixelSize, 3 * pixelSize);
    ctx.strokeStyle = '#111111';
    ctx.lineWidth = 1;
    ctx.strokeRect(px + 7 * pixelSize, py + 31 * pixelSize, 4 * pixelSize, 3 * pixelSize);

    // rechter Stiefel
    ctx.fillStyle = '#222222';
    ctx.fillRect(px + 19 * pixelSize, py + 31 * pixelSize, 4 * pixelSize, 3 * pixelSize);
    ctx.strokeStyle = '#111111';
    ctx.lineWidth = 1;
    ctx.strokeRect(px + 19 * pixelSize, py + 31 * pixelSize, 4 * pixelSize, 3 * pixelSize);

    // --- Schwert (in der rechten Hand) ---
    // Klinge
    ctx.fillStyle = '#cccccc';
    ctx.fillRect(px + 22 * pixelSize, py + 13 * pixelSize, 2 * pixelSize, 10 * pixelSize);
    ctx.strokeStyle = '#aaaaaa';
    ctx.lineWidth = 1;
    ctx.strokeRect(px + 22 * pixelSize, py + 13 * pixelSize, 2 * pixelSize, 10 * pixelSize);

    // Klinge - Kante
    ctx.fillStyle = '#eeeeee';
    ctx.fillRect(px + 23 * pixelSize, py + 13 * pixelSize, 1 * pixelSize, 10 * pixelSize);
    ctx.strokeStyle = '#dddddd';
    ctx.lineWidth = 1;
    ctx.strokeRect(px + 23 * pixelSize, py + 13 * pixelSize, 1 * pixelSize, 10 * pixelSize);

    // Klinge - Griffe
    ctx.fillStyle = '#8b4513';
    ctx.fillRect(px + 20 * pixelSize, py + 13 * pixelSize, 6 * pixelSize, 2 * pixelSize);
    ctx.fillStyle = '#6b3513';
    ctx.fillRect(px + 20 * pixelSize, py + 13 * pixelSize, 6 * pixelSize, 2 * pixelSize);

    // --- Details: Helm-Plume / Feder ---
    // Feder auf dem Helm
    ctx.fillStyle = '#ff0000';
    ctx.fillRect(px + 14 * pixelSize, py + 3 * pixelSize, 2 * pixelSize, 3 * pixelSize);
    ctx.fillStyle = '#cc0000';
    ctx.fillRect(px + 14 * pixelSize, py + 3 * pixelSize, 2 * pixelSize, 2 * pixelSize);

    // --- Details: Visier-Reflex ---
    ctx.fillStyle = '#555555';
    ctx.fillRect(px + 10 * pixelSize, py + 6 * pixelSize, 12 * pixelSize, 1 * pixelSize);
}

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