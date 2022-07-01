
let slideIndex = 0;
//showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");

    for (i = 0; i < slides.length; i++) {
        slides[i].className = "mySlides fade";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 1].className = "mySlides active fade";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
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

function openLanguageMenu() {
    if( document.getElementById("language-menu").style.display == 'block')
        document.getElementById("language-menu").style.display = 'none';
    else
        document.getElementById("language-menu").style.display = 'block';
}

function changeLanguage(current, location) {
    if(current == 'PT'){
        window.location.replace(`${location}pt`);
    }
    else{
        window.location.replace(`${location}en`);
    }
}