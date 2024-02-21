export function carousel() {

    new Glider(document.querySelector('.glider-list'), {
        slidesToShow: 3,
        slidesToScroll: 3,
        draggable: true,
        dots: '.glider-indicators',
        arrows: {
            prev: '.glider-prev',
            next: '.glider-next'
        }
    });

}