const slider = document.querySelector(".slider");
let slides = Array.from(document.querySelectorAll(".slide"));

let intervalTime = 2500;
let index = 1;
let autoSlide;
let isMoving = false; // ⛔ evita que se haga spam de clics

// Crear clones reales
const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

firstClone.classList.add("clone");
lastClone.classList.add("clone");

// Insertar clones
slider.appendChild(firstClone);
slider.insertBefore(lastClone, slides[0]);

// Actualizar lista de slides
slides = Array.from(document.querySelectorAll(".slide"));

// Posición inicial EXACTA
slider.style.transform = `translateX(-100%)`;


// =============================
//      FUNCIONES
// =============================
function goToSlide() {
    if (isMoving) return;   // 🔒 bloqueo si ya está en transición
    isMoving = true;

    slider.style.transition = "transform 0.5s ease-in-out";
    slider.style.transform = `translateX(${-index * 100}%)`;
}

function nextSlide() {
    if (isMoving) return;
    index++;
    goToSlide();
    resetAutoSlide();
}

function prevSlide() {
    if (isMoving) return;
    index--;
    goToSlide();
    resetAutoSlide();
}


// =============================
//        LOOP PERFECTO
// =============================
slider.addEventListener("transitionend", () => {

    // Cuando toca un clon → reajusta sin animación
    if (slides[index].classList.contains("clone")) {
        slider.style.transition = "none";

        if (index === slides.length - 1) {
            // Del último clon → al primer real
            index = 1;
        } else if (index === 0) {
            // Del primer clon → al último real
            index = slides.length - 2;
        }

        slider.style.transform = `translateX(${-index * 100}%)`;
    }

    // 🔓 desbloquear movimiento tras la transición
    setTimeout(() => {
        isMoving = false;
    }, 20);
});


// =============================
//     AUTO SLIDE CONTROL
// =============================
function startAutoSlide() {
    autoSlide = setInterval(nextSlide, intervalTime);
}

function resetAutoSlide() {
    clearInterval(autoSlide);
    startAutoSlide();
}

// Iniciar
startAutoSlide();

// Botones
document.querySelector(".next").addEventListener("click", nextSlide);
document.querySelector(".prev").addEventListener("click", prevSlide);



//Circulares //
const circSlider = document.querySelector(".circulares-slider");
let circSlides = Array.from(document.querySelectorAll(".circulares-slide"));

let circIndex = 1;
let circInterval = 2800;
let circAuto;
let moving = false;

// Crear clones
const firstCircClone = circSlides[0].cloneNode(true);
const lastCircClone = circSlides[circSlides.length - 1].cloneNode(true);

firstCircClone.classList.add("clone");
lastCircClone.classList.add("clone");

// Insertar clones
circSlider.appendChild(firstCircClone);
circSlider.insertBefore(lastCircClone, circSlides[0]);

// Actualizar lista
circSlides = Array.from(document.querySelectorAll(".circulares-slide"));

// Posición inicial
circSlider.style.transform = `translateX(-100%)`;

// ===== FUNCIONES =====
function goToCirc() {
    if (moving) return;
    moving = true;

    circSlider.style.transition = "transform 0.5s ease-in-out";
    circSlider.style.transform = `translateX(-${circIndex * 100}%)`;
}

function nextCirc() {
    if (moving) return;
    circIndex++;
    goToCirc();
    resetCircAuto();
}

function prevCirc() {
    if (moving) return;
    circIndex--;
    goToCirc();
    resetCircAuto();
}

// ===== LOOP PERFECTO =====
circSlider.addEventListener("transitionend", () => {

    if (circSlides[circIndex].classList.contains("clone")) {
        circSlider.style.transition = "none";

        if (circIndex === circSlides.length - 1) {
            circIndex = 1;
        } else if (circIndex === 0) {
            circIndex = circSlides.length - 2;
        }

        circSlider.style.transform = `translateX(-${circIndex * 100}%)`;
    }

    setTimeout(() => moving = false, 20);
});

// ===== AUTO =====
function startCircAuto() {
    circAuto = setInterval(nextCirc, circInterval);
}

function resetCircAuto() {
    clearInterval(circAuto);
    startCircAuto();
}

// Iniciar
startCircAuto();

// Botones
document.querySelector(".next-circ").addEventListener("click", nextCirc);
document.querySelector(".prev-circ").addEventListener("click", prevCirc);
