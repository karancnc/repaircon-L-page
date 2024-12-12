jQuery(window).on('load', function() {
  setTimeout(function() {
    jQuery('.banner .animation_sec').addClass('come-in');
    setTimeout(function() {
      jQuery('.countdown.animation_sec').addClass('come-in');
    }, 300); // Delay for the second animation
  }, 300); // Initial delay before first animation
});

jQuery(document).ready(function($){

    /* megnify */
    $('[data-pop="megnify"]').each(function(){
        var _this = $(this);
        console.log("Processing element:", _this); // Debugging log
        _this.find('.image-popup-vertical-fit').magnificPopup({
            type: 'image',
              mainClass: 'mfp-with-zoom', 
              gallery:{
                        enabled:true
                    },
            
              zoom: {
                enabled: true, 
                duration: 300, // duration of the effect, in milliseconds
                easing: 'ease-in-out', // CSS transition easing function
                opener: function(openerElement) {
                  console.log("Opener element:", openerElement); // Debugging log
                  return openerElement.is('img') ? openerElement : openerElement.find('img');
              }
            }        
        });

    });
/* megnify */

function startCountdown(targetDate) {
  const updateTimer = () => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      document.getElementById('days').textContent = '00';
      document.getElementById('hours').textContent = '00';
      document.getElementById('minutes').textContent = '00';
      document.getElementById('seconds').textContent = '00';
      clearInterval(timer);
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
  };

  const timer = setInterval(updateTimer, 1000);
  updateTimer(); // Run once to avoid delay
}

// Set the target date for the countdown
const targetDate = new Date('2024-12-31T23:59:59').getTime();
startCountdown(targetDate);

/* popup video */

$('.playicon').click(function(){
  $('.popup').addClass('visible');
  var _url = $(this).attr('data-url');
console.log(_url);  
$('#popupVideo').attr('src', _url);

});
$('.close-btn').click(function(){
  $('.popup').removeClass('visible');
  $('#popupVideo').attr('src','');
});

});

const parallax = document.getElementById("parallax");

// Parallax Effect for DIV 1
window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * 0.7 + "px";
  // DIV 1 background will move slower than other elements on scroll.
});


(function($)
 {
  $.fn.visible = function(partial) {

      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          bottom       = _top + $t.height(),
          compareTop    = partial === true ? bottom : _top,
          compareBottom = partial === true ? _top : bottom;

      return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
  };
})(jQuery);
var win = $(window);
var allMods = $(".animation_sec");
win.scroll(function(event) {
  allMods.each(function(i, el) {
      var el = $(el);
      if (el.visible(true)) {
          setTimeout(function(){
              el.addClass("come-in"); 
          },i*50);
      } 
  });
});