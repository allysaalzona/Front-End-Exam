// Change slideshow images for mobile view
function changeSlideshowImages(x) {
    if (x.matches) {
        var activeSlide = document.getElementsByClassName('carousel-item active');
        activeSlide.item(0).innerHTML = '<img class="d-block w-100" src="assets/homeslidemob.png" alt="First slide">'

       
        var slides = document.getElementsByClassName('carousel-item');
        for (var i=1; i<slides.length; i++) {
            slides.item(i).innerHTML = '<img class="d-block w-100" src="assets/Slide'+(i+1)+
            'mobileview1.png">';
        }
    }
}

var x = window.matchMedia("(max-width: 576px)");
changeSlideshowImages(x);