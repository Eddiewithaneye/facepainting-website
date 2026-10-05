const prevButton = document.getElementById("prev-button"); 
const nextButton = document.getElementById("next-button");
const carouselImgs = document.querySelectorAll(".carousel img");
let activeIndex = 2;
updateVisibleImages();
prevButton.addEventListener("click", prevImg);
nextButton.addEventListener("click", nextImg);

function prevImg(){
    activeIndex--;

    if (activeIndex < 0){
        activeIndex = carouselImgs.length -1;
    }

    updateVisibleImages();
}

function nextImg(){
    activeIndex++;

    if (activeIndex >= carouselImgs.length){
        activeIndex = 0;
    }

    updateVisibleImages();
}

function updateVisibleImages(){
    console.log("activeIndex:", activeIndex);

    let outerLeft = (activeIndex - 2 + carouselImgs.length) % carouselImgs.length;
    let innerLeft = (activeIndex - 1 + carouselImgs.length) % carouselImgs.length;
    let center = activeIndex;
    let innerRight = (activeIndex + 1 + carouselImgs.length) % carouselImgs.length;
    let outerRight = (activeIndex + 2 + carouselImgs.length) % carouselImgs.length;

    console.log(
    "left:", outerLeft,
    "innerLeft:", innerLeft,
    "center:", center,
    "innerRight:", innerRight,
    "right:", outerRight
    );

    for (let i = 0; i < carouselImgs.length; i++){
        carouselImgs[i].classList.add("hidden");
        carouselImgs[i].classList.remove("leftSmall");
        carouselImgs[i].classList.remove("leftInner");
        carouselImgs[i].classList.remove("active");
        carouselImgs[i].classList.remove("rightInner");
        carouselImgs[i].classList.remove("rightSmall");
    }

    carouselImgs[outerLeft].classList.remove("hidden");
    carouselImgs[innerLeft].classList.remove("hidden");
    carouselImgs[center].classList.remove("hidden");
    carouselImgs[innerRight].classList.remove("hidden");
    carouselImgs[outerRight].classList.remove("hidden");

    carouselImgs[outerLeft].classList.add("leftSmall");
    carouselImgs[innerLeft].classList.add("leftInner");
    carouselImgs[center].classList.add("active");
    carouselImgs[innerRight].classList.add("rightInner");
    carouselImgs[outerRight].classList.add("rightSmall");

    console.log(
    carouselImgs[center].className,
    carouselImgs[innerLeft].className,
    carouselImgs[innerRight].className
);

}
