document.addEventListener('DOMContentLoaded', () => {
    const arrow = document.getElementById('arrow-user');
    const wall = document.getElementById('wall-of-fluff');
    const deflected = document.getElementById('deflected-point');
    const animationContainer = document.getElementById('animation-container');

    // We'll use CSS classes to trigger transitions.
    // First, let's add them to the CSS.
    const style = document.createElement('style');
    style.innerHTML = `
        #arrow-user, #wall-of-fluff, #deflected-point {
            transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
        }

        #arrow-user.move {
            transform: translateX(20px);
        }

        #arrow-user.deflected {
            transform: translate(30px, -30px) rotate(-30deg);
            opacity: 0.5;
        }

        #wall-of-fluff {
            opacity: 0;
        }

        #wall-of-fluff.visible {
            opacity: 1;
        }

        #deflected-point.visible {
            opacity: 1;
        }
    `;
    document.head.appendChild(style);

    // Animation sequence
    const startAnimation = () => {
        // Reset animation
        arrow.className = '';
        wall.className = '';
        deflected.className = '';

        setTimeout(() => {
            // 1. Wall of fluff appears
            wall.classList.add('visible');
        }, 500); // 0.5s after page load

        setTimeout(() => {
            // 2. Arrow tries to move
            arrow.classList.add('move');
        }, 1200); // 1.2s

        setTimeout(() => {
            // 3. Arrow gets deflected
            arrow.classList.remove('move');
            arrow.classList.add('deflected');
        }, 1800); // 1.8s

        setTimeout(() => {
            // 4. Deflected answer appears
            deflected.classList.add('visible');
        }, 2200); // 2.2s

        // Restart animation every 6 seconds
        setTimeout(startAnimation, 6000);
    };

    // Start the animation when the element is in view
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            startAnimation();
            observer.disconnect(); // Run it once and then let it loop
        }
    });

    observer.observe(animationContainer);
});
