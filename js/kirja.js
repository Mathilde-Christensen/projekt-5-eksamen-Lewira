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
const totalItems = items.length;

function getItemWidth(){
    return items[0].getBoundingClientRect().width + gap;
}

function animateScroll(targetIndex) {
    const visibleItems = getImagesPerSlide();
    const itemWidth = getItemWidth();
    const currentScroll = index * visibleItems * itemWidth;
    const scrollDistance = targetIndex * visibleItems * itemWidth;
    const steps = 10;
    const stepSize = (scrollDistance - currentScroll) / steps;

    for (let i = 1; i <= steps; i++) {
        setTimeout(() => {
            track.style.transform = `translateX(-${currentScroll + stepSize * i}px)`;
        }, i * 40);
    }

    index = targetIndex;
}

function scrollGallery(direction) {
    const visibleItems = getImagesPerSlide();
    const maxIndex = Math.ceil(totalItems / visibleItems) - 1;
    let newIndex = index + direction;

    if (newIndex > maxIndex) newIndex = 0;
    if (newIndex < 0) newIndex = maxIndex;

    animateScroll(newIndex);
}

nextButton.addEventListener("click", () => scrollGallery(1));
prevButton.addEventListener("click", () => scrollGallery(-1));