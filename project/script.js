// Sound Effects Setup
const sounds = {
    ambient: new Audio('sounds/space-ambience.mp3'),
    hover: new Audio('sounds/hover.mp3'),
    click: new Audio('sounds/click.mp3')
};

// Initialize sounds
function initSounds() {
    sounds.ambient.loop = true;
    sounds.ambient.volume = 0.3;
    sounds.hover.volume = 0.2;
    sounds.click.volume = 0.2;
    
    // Preload sounds
    Object.values(sounds).forEach(sound => {
        sound.load();
    });
}

// Sound Controls
document.getElementById('sound-toggle').addEventListener('click', function() {
    const icon = this.querySelector('i');
    
    if (sounds.ambient.paused) {
        sounds.ambient.play();
        icon.className = 'fas fa-volume-up sound-icon';
        this.classList.remove('muted');
    } else {
        sounds.ambient.pause();
        icon.className = 'fas fa-volume-mute sound-icon';
        this.classList.add('muted');
    }
});

// Add hover sound effects
document.querySelectorAll('a, button, .portfolio-item').forEach(element => {
    element.addEventListener('mouseenter', () => {
        if (!sounds.ambient.paused) {
            sounds.hover.currentTime = 0;
            sounds.hover.play().catch(() => {});
        }
    });
    
    element.addEventListener('click', () => {
        if (!sounds.ambient.paused) {
            sounds.click.currentTime = 0;
            sounds.click.play().catch(() => {});
        }
    });
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', initSounds);