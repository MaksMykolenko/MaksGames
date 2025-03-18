//navbar menu for mobile version
document.getElementById("menu-toggle").addEventListener("click", function () {
    document.getElementById("nav-menu").classList.toggle("active");
});

//button flip-back
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".team-card").forEach((card) => {
        const moreBtn = card.querySelector(".card-front .button");
        const backBtn = card.querySelector(".card-back .button");

        if (moreBtn && backBtn) {
            moreBtn.addEventListener("click", () => {
                console.log("Картка перевертається вперед");
                card.classList.add("flipped");
            });

            backBtn.addEventListener("click", () => {
                console.log("Картка перевертається назад");
                card.classList.remove("flipped");
            });
        } else {
            console.error("Кнопки не знайдено в картці:", card);
        }
    });
});

const container = document.querySelector('.team-container');

let isDragging = false;
let startX;
let scrollLeft;

// Додаємо анімацію для плавного переміщення карток
container.style.scrollBehavior = 'smooth'; // плавна прокрутка при використанні скролу

// Коли натискаєш на контейнер
container.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
    container.style.cursor = 'grabbing';  // Змінюємо вигляд курсору
});

// Коли рухаєш мишкою
container.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 2;  // Множимо для швидкості
    container.scrollLeft = scrollLeft - walk;
});

// Коли відпускаєш мишку
container.addEventListener('mouseup', () => {
    isDragging = false;
    container.style.cursor = 'grab';  // Відновлюємо вигляд курсору
});

// Якщо мишка залишає область контейнера
container.addEventListener('mouseleave', () => {
    isDragging = false;
    container.style.cursor = 'grab';  // Відновлюємо вигляд курсору
});

// Підтримка свайпів (тачскріни)
container.addEventListener('touchstart', (event) => {
    startX = event.touches[0].clientX;
});

container.addEventListener('touchmove', (event) => {
    let moveX = event.touches[0].clientX;
    let diff = startX - moveX;

    container.scrollLeft += diff;
    startX = moveX;
});


//scroll
document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    // Ініціалізація ScrollSmoother
    ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.5,
        effects: false,
        normalizeScroll: true,
    });
});



