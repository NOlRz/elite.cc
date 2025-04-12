function removeOverlay() {
    var overlay = document.getElementById('overlay');
    var userpage = document.getElementById('user-page');
    var audio = document.getElementById('backgroundsong')
    var video = document.getElementById('backgroundvideo')
    var volumeControl = document.getElementById('volume-control');

    overlay.style.opacity = '0';
    userpage.style.display = 'flex';
    audio.volume = 0.3;
    audio.play();
    video.play();
    volumeControl.classList.add('visible');

    setTimeout(function() { 
        overlay.style.display = 'none';
    }, 2000);
}

document.addEventListener("DOMContentLoaded", () => {
    const prefix = "⠐ ";
    const titleText = "Irmandade";
    let index = 0;
    let isDeleting = false;

function typeWriter() {
    document.title = prefix + titleText.substring(0, index);

    if (!isDeleting && index < titleText.length) {
        index++;
    setTimeout(typeWriter, 200);

    } else if (isDeleting && index > 0) {
        index--;
    setTimeout(typeWriter, 200);

    } else {
        isDeleting = !isDeleting;
    setTimeout(typeWriter, 1000);
    }
}

typeWriter();
});

// Enhanced cursor effect
let trail = [];
const trailLength = 20;

document.addEventListener("mousemove", (event) => {
    // Create main cursor particle
    const particle = document.createElement("div");
    particle.className = "cursor-particle";
    particle.style.left = `${event.pageX}px`;
    particle.style.top = `${event.pageY}px`;
    document.body.appendChild(particle);

    // Add to trail array
    trail.push({
        element: particle,
        x: event.pageX,
        y: event.pageY,
        age: 0
    });

    // Create smaller trailing particles
    for (let i = 0; i < 3; i++) {
        const trailParticle = document.createElement("div");
        trailParticle.className = "cursor-trail";
        
        // Random offset for more organic feel
        const dx = (Math.random() - 0.5) * 30;
        const dy = (Math.random() - 0.5) * 30;
        
        trailParticle.style.left = `${event.pageX + dx}px`;
        trailParticle.style.top = `${event.pageY + dy}px`;
        
        // Random size for variety
        const size = Math.random() * 10 + 5;
        trailParticle.style.width = `${size}px`;
        trailParticle.style.height = `${size}px`;
        
        document.body.appendChild(trailParticle);
        
        // Remove trail particle after animation
        setTimeout(() => {
            trailParticle.remove();
        }, 800);
    }

    // Remove old trail particles
    while (trail.length > trailLength) {
        const oldest = trail.shift();
        oldest.element.remove();
    }
});

// Monitorar eventos para manter sincronização
const videoElement = document.querySelector('.background');
const audioElement = document.getElementById('backgroundsong');

videoElement.addEventListener('play', () => {
    audioElement.play();
});

videoElement.addEventListener('pause', () => {
    audioElement.pause();
});

videoElement.addEventListener('ended', () => {
    audioElement.pause();
});

// volume
const audio = document.getElementById('backgroundsong');
const volumeSlider = document.getElementById('volume-slider');
const volumeIcon = document.getElementById('volume-icon');

audio.volume = 0.5;
updateVolumeIcon(audio.volume);

volumeSlider.addEventListener('input', (event) => {
  const volume = event.target.value / 100;
  audio.volume = volume;
  audio.muted = false;
  updateVolumeIcon(volume);
});

volumeIcon.addEventListener('click', () => {
  audio.muted = !audio.muted;
  updateVolumeIcon(audio.muted ? 0 : audio.volume);
});

function updateVolumeIcon(volume) {
  if (volume === 0 || audio.muted) {
    volumeIcon.className = 'fas fa-volume-mute';
  } else if (volume < 0.5) {
    volumeIcon.className = 'fas fa-volume-down';
  } else {
    volumeIcon.className = 'fas fa-volume-up';
  }
}