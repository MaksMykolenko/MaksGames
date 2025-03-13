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
