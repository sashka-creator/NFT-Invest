var swiper = new Swiper('.slider .swiper-container', {
    
    slidesPerView: 1,
    spaceBetween: 20,

    autoplay: {
        delay: 1000,
    },
  });

function plus() {
    var num1, result__plus, result;

    num1 = document.getElementById('input-1').value;
    num1 = parseInt(num1);

    result = num1;

    if (10000 <= result & result <= 20000) {
        result__plus = result * 1.05;
        document.getElementById('result').innerHTML = result__plus
    } else if (20000 <= result & result <= 50000) {
        result__plus = result * 1.1;
        result__plus = Math.round(result__plus)
        document.getElementById('result').innerHTML = result__plus
    } else if (50000 <= result & result <= 100000) {
        result__plus = result * 1.25;
        result__plus = Math.round(result__plus)
        document.getElementById('result').innerHTML = result__plus
    } else if (100000 <= result & result <= 500000) {
        result__plus = result * 1.35;
        result__plus = Math.round(result__plus)
        document.getElementById('result').innerHTML = result__plus
    } else if (1000000 <= result) {
        result__plus = result * 1.5;
        result__plus = Math.round(result__plus)
        document.getElementById('result').innerHTML = result__plus
    } else {
        alert("Please enter an amount greater than 10,000 $")
    }
}

$(document).ready(function() {
  $('.burger').click(function(event) {
    $('.header__inner-adaptive, .nav-adaptive, .close').toggleClass('active');
  });
});

$(document).ready(function() {
  $('.close, .nav__item-adaptive').click(function(event) {
    $('.header__inner-adaptive, .nav-adaptive, .close').toggleClass('active');
  });
});  

$(document).ready(function() {
  $("a.nav__item").click(function(){
    $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top + "px"
    }, {
      duration: 1000,
      easing: "swing"
    });
    return false;
  });
});