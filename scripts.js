/* document.addEventListener('DOMContentLoaded', function() {
    var myCarousel1 = document.getElementById('carouselTechnologies1');
    myCarousel1.addEventListener('slide.bs.carousel', function() {
        // Deslizar las imágenes hacia la izquierda (aparecer desde la izquierda)
        var slides1 = this.querySelectorAll('.carousel-item');
        slides1.forEach(function(slide) {
            slide.style.transform = 'translateX(-100%)';
        });
    });

    myCarousel1.addEventListener('slid.bs.carousel', function() {
        // Reiniciar la posición de las diapositivas después de la transición
        var slides1 = this.querySelectorAll('.carousel-item');
        slides1.forEach(function(slide) {
            slide.style.transform = '';
        });
    });

    var myCarousel2 = document.getElementById('carouselTechnologies2');
    myCarousel2.addEventListener('slide.bs.carousel', function() {
        // Deslizar las imágenes hacia la derecha (desaparecer hacia la derecha)
        var slides2 = this.querySelectorAll('.carousel-item');
        slides2.forEach(function(slide) {
            slide.style.transform = 'translateX(100%)';
        });
    });

    myCarousel2.addEventListener('slid.bs.carousel', function() {
        // Reiniciar la posición de las diapositivas después de la transición
        var slides2 = this.querySelectorAll('.carousel-item');
        slides2.forEach(function(slide) {
            slide.style.transform = '';
        });
    });
}); */