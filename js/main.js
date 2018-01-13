;(function(){

	$('.team_slider').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
  dots: true,
  arrows: false,
});
$('.testimonials_slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
  dots: true,
	autoplaySpeed: 4000,
  arrows: false,
});


// ##############################################
// 
//                ISOTOPE
// 
// ##############################################

/* ISOTOPE AND MASONRY */

function useIsotope(event) {
    var isotopeGrid = new Isotope( '.portfolio_grid', {

        itemSelector: '.portfolio_item',

        masonry: {

            // use element for option

            columnWidth: '.portfolio_item',

            itemSelector: '.portfolio_item',

            transitionDuration: '0.5s',

            gutter: 8,

            horizontalOrder: true,

        }

    });



    let applyFilterFromLink = (linkObject) => {

        let filterValue = linkObject.dataset.filter;

        isotopeGrid.arrange({ filter: filterValue });

    };



    let filterGrid = function( event ) {

        event.preventDefault();

        applyFilterFromLink(this);

        let activeBtn = document.querySelector('.filter-btn--active');

        if (activeBtn) {

            activeBtn.classList.remove('filter-btn--active');

        }

        this.classList.add('filter-btn--active');

    };



    document.querySelectorAll('.filter-btn').forEach(filterBtn => {

        filterBtn.addEventListener( 'click', filterGrid);

    });



    let activeBtn = document.querySelector('.filter-btn--active');

    applyFilterFromLink(activeBtn);

}

document.addEventListener('DOMContentLoaded', useIsotope);



/* END ISOTOPE */


// ##############################################
// 
//                Google MAP
// 
// ##############################################

var directionsService = new google.maps.DirectionsService;
var directionsDisplay = new google.maps.DirectionsRenderer;
var startPoint;
var endPoint;
var travelType;


var map = new google.maps.Map(document.getElementById('map'), {
	center: {lat: 47.825, lng: 35.170},
	zoom: 14,
  unitSystem: google.maps.UnitSystem.METRIC,
});

var markerBeetroot = new google.maps.Marker({
  position: {lat: 47.816150, lng: 35.170192},
  map: map, // or use marker.setMap(map)
  title: 'Beetroot',
  animation: google.maps.Animation.BOUNCE,
});


// Scroll to specific values
// scrollTo is the same
window.scroll({
  top: 2500, 
  left: 0, 
  behavior: 'smooth' 
});

// Scroll certain amounts from current position 
window.scrollBy({ 
  top: 100, // could be negative value
  left: 0, 
  behavior: 'smooth' 
});

// Scroll to a certain element
document.querySelector('.hello').scrollIntoView({ 
  behavior: 'smooth' 
});

})();