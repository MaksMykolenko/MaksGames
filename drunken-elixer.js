//navbar menu for mobile version
document.getElementById("menu-toggle").addEventListener("click", function () {
    document.getElementById("nav-menu").classList.toggle("active");
});

//button flip-back
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".character-card").forEach((card) => {
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

const container = document.querySelector('.character-container');

// Прокрутка мишею
container.addEventListener('wheel', (event) => {
    event.preventDefault();
    container.scrollLeft += event.deltaY;
});

// Підтримка свайпів (тачскріни)
let startX = 0;

container.addEventListener('touchstart', (event) => {
    startX = event.touches[0].clientX;
});

container.addEventListener('touchmove', (event) => {
    let moveX = event.touches[0].clientX;
    let diff = startX - moveX;

    container.scrollLeft += diff;
    startX = moveX;
});

