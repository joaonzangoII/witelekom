
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 8000); // Change image every 2 seconds
}

function showChoosedSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
  }

function plusSlides(n) {
    showChoosedSlides(slideIndex += n);
}

function currentSlide(n) {
    showChoosedSlides(slideIndex = n);
}

function hideMenu(){
    document.getElementById("menu").style.display = 'none';
}
function showMenu(){
    document.getElementById("menu").style.display = 'block';
}