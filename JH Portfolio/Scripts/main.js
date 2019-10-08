/*global $, jQuery, alert*/
$(document).ready(function() {

  'use strict';

  // ========================================================================= //
  //  //SMOOTH SCROLL
  // ========================================================================= //


  $(document).on("scroll", onScroll);

  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    $(document).off("scroll");

    $('a').each(function() {
      $(this).removeClass('active');
      if ($(window).width() < 768) {
        $('.nav-menu').slideUp();
      }
    });

    $(this).addClass('active');

    var target = this.hash,
        menu = target;

    target = $(target);
    $('html, body').stop().animate({
      'scrollTop': target.offset().top - 80
    }, 500, 'swing', function() {
      window.location.hash = target.selector;
      $(document).on("scroll", onScroll);
    });
  });


  function onScroll(event) {
    if ($('.home').length) {
      var scrollPos = $(document).scrollTop();
      $('nav ul li a').each(function() {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
      });
    }
  }

  // ========================================================================= //
  //  //NAVBAR SHOW - HIDE
  // ========================================================================= //


  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 200 ) {
      $("#main-nav, #main-nav-subpage").slideDown(700);
      $("#main-nav-subpage").removeClass('subpage-nav');
    } else {
      $("#main-nav").slideUp(700);
      $("#main-nav-subpage").hide();
      $("#main-nav-subpage").addClass('subpage-nav');
    }
  });

  // ========================================================================= //
  //  // RESPONSIVE MENU
  // ========================================================================= //

  $('.responsive').on('click', function(e) {
    $('.nav-menu').slideToggle();
  });

  // ========================================================================= //
  //  Typed Js
  // ========================================================================= //

  var typed = $(".typed");

  $(function() {
    typed.typed({
      strings: ["Jonathan Haynes.", "Designer.", "Freelancer.", "Photographer"],
      typeSpeed: 100,
      loop: true,
    });
  });


  // ========================================================================= //
  //  Owl Carousel Services
  // ========================================================================= //


  $('.services-carousel').owlCarousel({
      autoplay: true,
      loop: true,
      margin: 20,
      dots: true,
      nav: false,
      responsiveClass: true,
      responsive: { 0: { items: 1 }, 768: { items: 2 }, 900: { items: 4 } }
    });

  // ========================================================================= //
  //  magnificPopup
  // ========================================================================= //

  var magnifPopup = function() {
    $('.popup-img').magnificPopup({
      type: 'image',
      removalDelay: 300,
      mainClass: 'mfp-with-zoom',
      gallery: {
        enabled: true
      },
      zoom: {
        enabled: true, // By default it's false, so don't forget to enable it

        duration: 300, // duration of the effect, in milliseconds
        easing: 'ease-in-out', // CSS transition easing function

        // The "opener" function should return the element from which popup will be zoomed in
        // and to which popup will be scaled down
        // By defailt it looks for an image tag:
        opener: function(openerElement) {
          // openerElement is the element on which popup was initialized, in this case its <a> tag
          // you don't need to add "opener" option if this code matches your needs, it's defailt one.
          return openerElement.is('img') ? openerElement : openerElement.find('img');
        }
      }
    });
  };


  // Call the functions
  magnifPopup();

});

// ========================================================================= //
//  Porfolio isotope and filter
// ========================================================================= //
$(window).load(function(){

  var portfolioIsotope = $('.portfolio-container').isotope({
    itemSelector: '.portfolio-thumbnail',
    layoutMode: 'fitRows'
  });

  $('#portfolio-flters li').on( 'click', function() {
    $("#portfolio-flters li").removeClass('filter-active');
    $(this).addClass('filter-active');

    portfolioIsotope.isotope({ filter: $(this).data('filter') });
  });

})





//Traditonal solve for Fizz Buzz loop
function FizzBuzzA(value1, value2){
    let returnValue = "";
    for (let i = 1; i <= 100; i++){
        if (i % value1 == 0 && i % value2 == 0) {
            returnValue += 'FizzBuzz';

        }
        else if (i % value1 == 0) {
            returnValue += 'Fizz ';
        }
        else if (i % value2 == 0) {
            returnValue += 'Buzz';
        }
        else {
            returnValue += i +' ';
        }
    }
   // return returnValue;
    document.getElementById('fbResults').innerHTML = returnValue;

}

$("#fizzClear").click(function () {
    $("#num1").val(" ");
    $("#num2").val(" ");
    $("#fbResults").text(" ");
});


//Math exercise
$("#mathexer").click(function () {

    var number1 = Number($("#input1").val());
    var number2 = Number($("#input2").val());
    var number3 = Number($("#input3").val());
    var number4 = Number($("#input4").val());
    var number5 = Number($("#input5").val());

//calculations
    var sum = number1 + number2 + number3 + number4 + number5;
    var smallest = Math.min(number1, number2, number3, number4, number5);
    var largest = Math.max(number1, number2, number3, number4, number5);
    var product = number1 * number2 * number3 * number4 * number5;
    var average = sum / 5;

//out results
    var sumOutput = ("The sum of your number is " + sum);
    $("#results").text(sumOutput);
    var smallestOutput = ("The smallest number is " + smallest);
    $("#resultsSmallest").text(smallestOutput);
    var largestOutput = ("The largest number is " + largest);
    $("#resultsLargest").text(largestOutput);
    var productOutput = ("The product of your number is " + product);
    $("#resultsProduct").text(productOutput);
    var averageOutput = ("The average of your number is " + average);
    $("#resultsAverage").text(averageOutput);
});
$("#btnClear").click(function () {
    $("#input1").val("  ");
    $("#input2").val(" ");
    $("#input3").val(" ");
    $("#input4").val(" ");
    $("#input5").val(" ");
    $("#resultsSmallest").text(" ");
    $("#resultsLargest").text(" ");
    $("#resultsProduct").text(" ");
    $("#resultsAverage").text(" ");
    $("#results").text(" ");
});


//Factorial
//Step 1: Get the user data
$("#btnFact").click(function () {
    var number = Number($("#fact").val());

    //I am using an If statement to evaluate something
    if (number > 170) {
        swal.fire("Please enter positive numbers less than 171!");
        $("#fact").val("");
        return;
    }

    //Step 2: Perform the algorithm
    for (var foo = number - 1; foo > 1; foo--) {
        //How do we calculate the factorial
        number *= foo;
    }


    //Step 3: Show the result
    $("#factOut").text(number);
    //Clear button
});
$("#factbtnClear").click(function () {
    $("#fact").val("");
    $("#factOut").text("");
});


//palindrone
$("#palindrone").click(function () {
    var ogWord = String($("#inputPal").val());
    var word = ogWord.toLowerCase().replace(/\s/g, '');
    for (var n = word.length - 1, revWord = ""; n >= 0; n--) {
        revWord += word.substr(n, 1);
    }
    revWord = revWord.toLowerCase().replace(/\s/g, '');
    var message = "";
    if (revWord == word) {
        var outPal = (ogWord + " Is a palindrome :D!!!");
        $("#resultsPal").text(outPal);
    } else {
        var outPal = (ogWord + " is not a palindrome :(");
        $("#resultsPal").text(outPal);
    }
})

$("#palbtnClear").click(function () {
    $("#inputPal").val("");
    $("#resultsPal").text("");
});

//toggle popover
$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

//Show code
$("#mathCode").hide()
$("#btnMathCode").click(function () {
    $("#mathCode").toggle()
})
$("#fizzCode").hide()
$("#btnfizzCode").click(function () {
    $("#fizzCode").toggle()
})
$("#factCode").hide()
$("#btnfactCode").click(function () {
    $("#factCode").toggle()
})
$("#palCode").hide()
$("#btnpalCode").click(function () {
    $("#palCode").toggle()
})
