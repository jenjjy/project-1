console.log('Stop peaking!');

$(document).ready(function() {
  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') ==
          this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        let target = $(this.hash);
        target = target.length
          ? target
          : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate(
            {
              scrollTop: target.offset().top
            },
            1000,
            function() {
              // Callback after animation
              // Must change focus!
              let $target = $(target);
              $target.focus();
              if ($target.is(':focus')) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    }); //end of smooth scroll

  /*
    Flickity Carousel 
    */
  $('.main-carousel').flickity({
    // options
    cellAlign: 'left',
    contain: true,
    prevNextButtons: false,
    autoPlay: true
  }); //end of flickity carousel

  //subscribe form
  $('.subscribe-form').submit(function() {
    event.preventDefault();
    if ($('.subscribe').val() == '') {
      alert('Please submit a valid email address.');
    } else {
      alert('Thanks for subscribing!');
    }
  });

  // Cart button counter
  let count = 0;
  $('.shop').on('click', function(event) {
    event.preventDefault();

    count++;
    $('.counter').html(count);
    console.log(count);
  }); // end of cart button counter

  $(function() {
    $("a[href^='#']")
      .not("a[href='#']")
      .click(function() {
        $(
          '#' +
            $(this)
              .attr('href')
              .slice(1) +
            ''
        ).focus();
      });
  }); // skip link bug fix
}); //end of doc ready
