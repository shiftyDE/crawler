// Steuerung: W,A,S,D
let keys = {};

document.addEventListener('keydown', function(e) {
    keys[e.key] = true;
});

document.addEventListener('keyup', function(e) {
    keys[e.key] = false;
});

function updatePlayerMovement() {
    var speed = 2;
    if (keys['w'] || keys['W']) { playerY -= speed; }
    if (keys['s'] || keys['S']) { playerY += speed; }
    if (keys['a'] || keys['A']) { playerX -= speed; }
    if (keys['d'] || keys['D']) { playerX += speed; }
}

// Steuerung starten
updatePlayerMovement();
