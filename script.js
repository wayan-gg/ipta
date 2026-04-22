// ==================== MENÚ HAMBURGUESA ====================
const burger = document.getElementById("burger");
const navLinks = document.getElementById("nav-links");

if (burger) {
    burger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// ==================== SUBMENÚS ====================
document.addEventListener('DOMContentLoaded', () => {
    const toggles = document.querySelectorAll(".submenu > .toggle");

    toggles.forEach(toggle => {
        toggle.addEventListener("click", (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                e.stopPropagation();
                const parent = toggle.parentElement;
                parent.classList.toggle("open");
            }
        });
    });

    // Cerrar submenús al hacer clic fuera (solo desktop)
    document.addEventListener("click", (e) => {
        if (window.innerWidth > 768) {
            document.querySelectorAll(".submenu").forEach(sub => {
                if (!sub.contains(e.target)) {
                    sub.classList.remove("open");
                }
            });
        }
    });
});

// ==================== CARRUSEL LÓGICA (Loop Infinito) ====================
const slider = document.querySelector(".slider");
const prevBtn = document.querySelector(".btn.prev");
const nextBtn = document.querySelector(".btn.next");
const slides = document.querySelectorAll(".slide");

if (slider && prevBtn && nextBtn && slides.length > 0) {
    let currentIndex = 0;

    // Clonar primer y último slide para el loop infinito
    const firstClone = slides[0].cloneNode(true);
    const lastClone = slides[slides.length - 1].cloneNode(true);
    
    slider.appendChild(firstClone);
    slider.prepend(lastClone);

    // Ajustar posición inicial
    currentIndex = 1;
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;

    function updateSlider(transition = true) {
        slider.style.transition = transition ? 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)' : 'none';
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    nextBtn.addEventListener("click", () => {
        currentIndex++;
        updateSlider();
        if (currentIndex === slides.length + 1) {
            setTimeout(() => {
                currentIndex = 1;
                updateSlider(false);
            }, 500);
        }
    });

    prevBtn.addEventListener("click", () => {
        currentIndex--;
        updateSlider();
        if (currentIndex === 0) {
            setTimeout(() => {
                currentIndex = slides.length;
                updateSlider(false);
            }, 500);
        }
    });

    // Auto-play
    setInterval(() => {
        currentIndex++;
        updateSlider();
        if (currentIndex === slides.length + 1) {
            setTimeout(() => {
                currentIndex = 1;
                updateSlider(false);
            }, 500);
        }
    }, 5000);
}

// ==================== INSTAGRAM BUTTON ====================
const btnInsta = document.getElementById("btnInsta");
if (btnInsta) {
    btnInsta.addEventListener("click", function() {
        window.location.href = "https://www.instagram.com/ipt_donbosco?igsh=bDZrYzR1NWt5ZHUz";
    });
}
