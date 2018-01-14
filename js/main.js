// ##############################################
// 
//               Slick Slider
// 
// ##############################################

$('.team_slider').slick({
  dots: true,
  arrows: false,
});

$('.testimonials_slider').slick({
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 4000,
});


// ##############################################
// 
//                ISOTOPE
// external js: isotope.pkgd.js
// ##############################################

var $grid = $('.isotope_grid');

// init isotope
$(function() {
  $grid.isotope({
      itemSelector: '.isotope_item',
    });
});

// bind filter button click
$('.isotope_filter').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');

  $grid.isotope({ filter: filterValue });
});

// change _filter class on buttons
$('.isotope_filter').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('._filter').removeClass('_filter');
    $( this ).addClass('_filter');
  });
});


// ##############################################
// 
//                Google MAP
// 
// ##############################################

var beetrootCoord = {lat: 47.816150, lng: 35.170192};

var map = new google.maps.Map($('#map')[0], {
	center: beetrootCoord,
	zoom: 14,
  disableDefaultUI: true,
});

var markerBeetroot = new google.maps.Marker({
  position: beetrootCoord,
  map: map, // or use marker.setMap(map)
  title: 'Beetroot',
  icon: '../img/marker.png',
  // animation: google.maps.Animation.BOUNCE,
});

// ##############################################
// 
//                SCROLL
// 
// ##############################################

 $(function(){
// Cache selectors
var lastId,
    topMenu = $(".navbar_nav"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    // menuItems = topMenu.find("a"),
    menuItems = $("a"),
    // Anchors corresponding to menu items
    // scrollItems = menuItems.map(function(){
      scrollItems = topMenu.find("a").map(function(){
      var id = $(this).attr("href");
      var item = $(id);
      if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = (href === "#") ? 0 : $(href).offset().top;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 300);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .removeClass("_isActive")
         .filter("[href='#"+id+"']").addClass("_isActive");
   }                   
});  
})
