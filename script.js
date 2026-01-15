// Parallax Effect for Landing Page
document.addEventListener('DOMContentLoaded', () => {
    // Check if we are on the landing page
    const heroVisual = document.querySelector('.hero-visual');
    if (heroVisual) {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            const rates = {
                back: 0.2,
                mid: 0.5,
                front: 0.8
            };

            const back = document.querySelector('.layer-back');
            const mid = document.querySelector('.layer-mid');
            const front = document.querySelector('.layer-front');

            if (back) back.style.transform = `translateY(${scrolled * rates.back}px)`;
            if (mid) mid.style.transform = `translateZ(50px) translateY(${scrolled * rates.mid}px)`;
            if (front) front.style.transform = `translateZ(120px) translateY(${scrolled * rates.front}px)`;
        });

        // Mouse Move interactions for 3D tilt
        document.addEventListener('mousemove', (e) => {
            const x = (window.innerWidth / 2 - e.clientX) / 50;
            const y = (window.innerHeight / 2 - e.clientY) / 50;
            const stage = document.querySelector('.visual-stage');
            if (stage) {
                stage.style.transform = `rotateY(${-10 + x}deg) rotateX(${5 + y}deg)`;
            }
        });
    }

    // Character Animation for Login Page
    const passwordInput = document.getElementById('password');
    const hands = document.getElementById('hands');
    const pupils = document.querySelectorAll('.pupil');

    // Covering Eyes Logic
    if (passwordInput && hands) {
        passwordInput.addEventListener('focus', () => {
            hands.classList.add('covering');
        });

        passwordInput.addEventListener('blur', () => {
            hands.classList.remove('covering');
        });
    }

    // Eye Tracking Logic
    if (pupils.length > 0) {
        document.addEventListener('mousemove', (e) => {
            // Don't track if eyes are covered
            if (hands && hands.classList.contains('covering')) return;

            pupils.forEach(pupil => {
                const rect = pupil.getBoundingClientRect();
                const x = (rect.left + rect.width / 2);
                const y = (rect.top + rect.height / 2);

                const rad = Math.atan2(e.clientX - x, e.clientY - y);
                const rot = (rad * (180 / Math.PI) * -1) + 180;

                // Limit movement
                const dist = Math.min(5, Math.hypot(e.clientX - x, e.clientY - y) / 10);

                const moveX = Math.sin(rad) * dist;
                const moveY = Math.cos(rad) * dist;

                pupil.style.transform = `translate(${moveX}px, ${moveY}px)`;
            });
        });
    }

    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(10, 15, 13, 0.95)';
                navbar.style.boxShadow = '0 10px 30px -10px rgba(0,0,0,0.5)';
            } else {
                navbar.style.background = 'rgba(10, 15, 13, 0.8)';
                navbar.style.boxShadow = 'none';
            }
        });
    }
});

