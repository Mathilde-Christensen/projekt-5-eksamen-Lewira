function getImagesPerSlide() {
    if (window.matchMedia("(max-width: 480px)").matches) {
        return 1;
    }
    if (window.matchMedia("(max-width: 1024px)").matches) {
        return 2;
    } else {
        return 3;
    }
}

const track = document.querySelector(".forside__find-gavekurv__liste");
const items = document.querySelectorAll(".forside__find-gavekurv__item");
const prevButton = document.getElementById("galleri__prevButton");
const nextButton = document.getElementById("galleri__nextButton");

let index = 0;
const gap = 16;
const itemWidth = items[0].getBoundingClientRect().width;
const scrollStep = itemWidth + gap;
const totalItems = items.length;
const visibleItems = getImagesPerSlide();


const maxIndex = totalItems - 1;

function animateScroll(targetIndex) {
    const start = index * scrollStep;
    const end = targetIndex * scrollStep;
    const steps = 10;
    const stepSize = (end - start) / steps;

    for (let i = 1; i <= steps; i++) {
        setTimeout(() => {
            track.style.transform = `translateX(-${start + stepSize * i}px)`;
        }, i * 40);
    }

    index = targetIndex;
}

function scrollGallery(direction) {
    let newIndex = index + direction;

    if (newIndex > maxIndex) newIndex = 0;
    if (newIndex < 0) newIndex = maxIndex;

    animateScroll(newIndex);
}

nextButton.addEventListener("click", () => scrollGallery(1));
prevButton.addEventListener("click", () => scrollGallery(-1));