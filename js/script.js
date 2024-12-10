/* Window Load functions */

jQuery(window).load(function($){
    
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


});

jQuery(window).resize(function($){

});
const parallax = document.getElementById("parallax");

// Parallax Effect for DIV 1
window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * 0.7 + "px";
  // DIV 1 background will move slower than other elements on scroll.
});
