// Change slideshow images for mobile view
function changeSlideshowImages(x) {

    var activeSlide = document.getElementsByClassName('carousel-item active');
    var slides = document.getElementsByClassName('carousel-item');

    if (x.matches) {
        activeSlide.item(0).innerHTML = '<img class="d-block w-100" src="assets/homeslidemob.png" alt="First slide">'

        for (var i=1; i<slides.length; i++) {
            slides.item(i).innerHTML = '<img class="d-block w-100" src="assets/Slide'+(i+1)+
            'mobileview1.png">';
        }
    }
    else {
        activeSlide.item(0).innerHTML = '<img class="d-block w-100" src="assets/newHomeslide.png" alt="First slide">'

        for (var i=1; i<slides.length; i++) {
            slides.item(i).innerHTML = '<img class="d-block w-100" src="assets/Slide'+(i+1)+
            '_1.png">';
        }
    }
}

// Event listener for screen size change
var x = window.matchMedia("(max-width: 576px)");
changeSlideshowImages(x);
x.addListener(changeSlideshowImages);