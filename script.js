document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 1;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    // Show the first slide by default(slide show idea came from w3schools)
    showSlides(slideIndex);

    // Automatic slideshow
    let slideInterval = setInterval(() => plusSlides(1), 3000); // Change slide every 3 seconds

    // Next/Previous controls
    function plusSlides(n) {
        clearInterval(slideInterval); // Stop automatic slideshow when manually navigating
        showSlides(slideIndex += n);
        slideInterval = setInterval(() => plusSlides(1), 3000); // Restart automatic slideshow
    }

    // dot controls(user can choose between dots or arrows will be highlighten when hovering over them)
    function currentSlide(n) {
        clearInterval(slideInterval); // 
        showSlides(slideIndex = n);
        slideInterval = setInterval(() => plusSlides(1), 3000); 
    }

    function showSlides(n) {
        // Wrap around if slide index is out of bounds
        if (n > slides.length) { slideIndex = 1; }
        if (n < 1) { slideIndex = slides.length; }

        // Hide all slides
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        // Show the current slide and activate the corresponding dot
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }

    // Attach event listeners to dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].addEventListener("click", () => currentSlide(i + 1));
    }

    // Attach event listeners to next/prev buttons
    document.querySelector(".prev").addEventListener("click", () => plusSlides(-1));
    document.querySelector(".next").addEventListener("click", () => plusSlides(1)); 
    
});