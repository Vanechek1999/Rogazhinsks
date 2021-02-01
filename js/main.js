$('.block2_slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 3,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 321,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });
  $('.block5_slider').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: '0px', 
    variableWidth: true
  });
  $('.big_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.small_slider',
    responsive: [
        {
          breakpoint: 1537,
          settings: {
            initialSlide: 0,     
        }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
});
$('.small_slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.big_slider',
    dots: false,
    centerMode: true,
    arrows: false,
    focusOnSelect: true,
    responsive: [
        {
          breakpoint: 1537,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            initialSlide: -1,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
});
$(function() {
  $(".footer_phone").mask("+7 (999) 999 99 99", {placeholder: "+7 (___) ___ __ __" });
});
let styleIcon = $('.block4_form .icon')
$('.block4_form #blck4_1').mouseover( function(){
    styleIcon.css('top', '348px'),
    styleIcon.css('right', '335px'),
    styleIcon.css('filter', 'blur(0px)')
})
$('.block4_form #blck4_1').mouseout( function(){
    styleIcon.css('filter', 'blur(20px)')
})
$('.block4_form #blck4_2').mouseover( function(){
    styleIcon.css('top', '280px'),
    styleIcon.css('right', '335px'),
    styleIcon.css('filter', 'blur(0px)')
})
$('.block4_form #blck4_2').mouseout( function(){
    styleIcon.css('filter', 'blur(20px)')
})
$('.block4_form #blck4_3').mouseover( function(){
    styleIcon.css('top', '280px'),
    styleIcon.css('right', '230px'),
    styleIcon.css('filter', 'blur(0px)')
})
$('.block4_form #blck4_3').mouseout( function(){
    styleIcon.css('filter', 'blur(20px)')
})
$('.block4_form #blck4_4').mouseover( function(){
    styleIcon.css('top', '215px'),
    styleIcon.css('right', '275px'),
    styleIcon.css('filter', 'blur(0px)')
})
$('.block4_form #blck4_4').mouseout( function(){
    styleIcon.css('filter', 'blur(20px)')
})
$('.block4_form #blck4_5').mouseover( function(){
    styleIcon.css('top', '305px'),
    styleIcon.css('right', '290px'),
    styleIcon.css('filter', 'blur(0px)')
})
$('.block4_form #blck4_5').mouseout( function(){
    styleIcon.css('filter', 'blur(20px)')
})
$('.block4_form #blck4_6').mouseover( function(){
    styleIcon.css('top', '330px'),
    styleIcon.css('right', '430px'),
    styleIcon.css('filter', 'blur(0px)')
})
$('.block4_form #blck4_6').mouseout( function(){
    styleIcon.css('filter', 'blur(20px)')
})
$('.block4_form #blck4_7').mouseover( function(){
    styleIcon.css('top', '233px'),
    styleIcon.css('right', '450px'),
    styleIcon.css('filter', 'blur(0px)')
})
$('.block4_form #blck4_7').mouseout( function(){
    styleIcon.css('filter', 'blur(20px)')
})
$('.block4_form #blck4_8').mouseover( function(){
    styleIcon.css('top', '160px'),
    styleIcon.css('right', '400px'),
    styleIcon.css('filter', 'blur(0px)')
})
$('.block4_form #blck4_8').mouseout( function(){
    styleIcon.css('filter', 'blur(20px)')
})
$('.block4_form #blck4_9').mouseover( function(){
    styleIcon.css('top', '380px'),
    styleIcon.css('right', '330px'),
    styleIcon.css('filter', 'blur(0px)')
})
$('.block4_form #blck4_9').mouseout( function(){
    styleIcon.css('filter', 'blur(20px)')
});
$('.block4_form #blck4_10').mouseover( function(){
  styleIcon.css('top', '380px'),
  styleIcon.css('right', '330px'),
  styleIcon.css('filter', 'blur(0px)')
})
$('.block4_form #blck4_10').mouseout( function(){
  styleIcon.css('filter', 'blur(20px)')
});
$('.block4_form #blck4_11').mouseover( function(){
  styleIcon.css('top', '380px'),
  styleIcon.css('right', '330px'),
  styleIcon.css('filter', 'blur(0px)')
})
$('.block4_form #blck4_11').mouseout( function(){
  styleIcon.css('filter', 'blur(20px)')
});
$('.block4_form #blck4_12').mouseover( function(){
  styleIcon.css('top', '380px'),
  styleIcon.css('right', '330px'),
  styleIcon.css('filter', 'blur(0px)')
})
$('.block4_form #blck4_12').mouseout( function(){
  styleIcon.css('filter', 'blur(20px)')
});
$('.block4_form #blck4_13').mouseover( function(){
  styleIcon.css('top', '380px'),
  styleIcon.css('right', '330px'),
  styleIcon.css('filter', 'blur(0px)')
})
$('.block4_form #blck4_13').mouseout( function(){
  styleIcon.css('filter', 'blur(20px)')
});
$('.block4_form #blck4_14').mouseover( function(){
  styleIcon.css('top', '380px'),
  styleIcon.css('right', '330px'),
  styleIcon.css('filter', 'blur(0px)')
})
$('.block4_form #blck4_14').mouseout( function(){
  styleIcon.css('filter', 'blur(20px)')
});
$('.block4_form #blck4_15').mouseover( function(){
  styleIcon.css('top', '380px'),
  styleIcon.css('right', '330px'),
  styleIcon.css('filter', 'blur(0px)')
})
$('.block4_form #blck4_15').mouseout( function(){
  styleIcon.css('filter', 'blur(20px)')
});
$('.block4_form #blck4_16').mouseover( function(){
  styleIcon.css('top', '180px'),
  styleIcon.css('right', '335px'),
  styleIcon.css('filter', 'blur(0px)')
})
$('.block4_form #blck4_16').mouseout( function(){
  styleIcon.css('filter', 'blur(20px)')
})
$('.block4_form #blck4_17').mouseover( function(){
  styleIcon.css('top', '180px'),
  styleIcon.css('right', '335px'),
  styleIcon.css('filter', 'blur(0px)')
})
$('.block4_form #blck4_17').mouseout( function(){
  styleIcon.css('filter', 'blur(20px)')
})
$('.block4_form #blck4_18').mouseover( function(){
  styleIcon.css('top', '430px'),
  styleIcon.css('right', '370px'),
  styleIcon.css('filter', 'blur(0px)')
})
$('.block4_form #blck4_18').mouseout( function(){
  styleIcon.css('filter', 'blur(20px)')
})
$('.block4_form #blck4_19').mouseover( function(){
  styleIcon.css('top', '215px'),
  styleIcon.css('right', '275px'),
  styleIcon.css('filter', 'blur(0px)')
})
$('.block4_form #blck4_19').mouseout( function(){
  styleIcon.css('filter', 'blur(20px)')
})
$('.block4_form #blck4_20').mouseover( function(){
  styleIcon.css('top', '305px'),
  styleIcon.css('right', '290px'),
  styleIcon.css('filter', 'blur(0px)')
})
$('.block4_form #blck4_20').mouseout( function(){
  styleIcon.css('filter', 'blur(20px)')
})
$('.block4_form #blck4_21').mouseover( function(){
  styleIcon.css('top', '330px'),
  styleIcon.css('right', '430px'),
  styleIcon.css('filter', 'blur(0px)')
})
$('.block4_form #blck4_21').mouseout( function(){
  styleIcon.css('filter', 'blur(20px)')
})
$('.block4_form #blck4_22').mouseover( function(){
  styleIcon.css('top', '233px'),
  styleIcon.css('right', '450px'),
  styleIcon.css('filter', 'blur(0px)')
})
$('.block4_form #blck4_22').mouseout( function(){
  styleIcon.css('filter', 'blur(20px)')
})
$('.block4_form #blck4_23').mouseover( function(){
  styleIcon.css('top', '160px'),
  styleIcon.css('right', '400px'),
  styleIcon.css('filter', 'blur(0px)')
})
$('.block4_form #blck4_23').mouseout( function(){
  styleIcon.css('filter', 'blur(20px)')
})
$('.block4_form #blck4_24').mouseover( function(){
  styleIcon.css('top', '380px'),
  styleIcon.css('right', '330px'),
  styleIcon.css('filter', 'blur(0px)')
})
$('.block4_form #blck4_24').mouseout( function(){
  styleIcon.css('filter', 'blur(20px)')
});
$('.block4_form #blck4_25').mouseover( function(){
styleIcon.css('top', '380px'),
styleIcon.css('right', '330px'),
styleIcon.css('filter', 'blur(0px)')
})
$('.block4_form #blck4_25').mouseout( function(){
styleIcon.css('filter', 'blur(20px)')
});
$('.block4_form #blck4_26').mouseover( function(){
styleIcon.css('top', '380px'),
styleIcon.css('right', '330px'),
styleIcon.css('filter', 'blur(0px)')
})
$('.block4_form #blck4_26').mouseout( function(){
styleIcon.css('filter', 'blur(20px)')
});
$('.block4_form #blck4_27').mouseover( function(){
styleIcon.css('top', '380px'),
styleIcon.css('right', '330px'),
styleIcon.css('filter', 'blur(0px)')
})
$('.block4_form #blck4_27').mouseout( function(){
styleIcon.css('filter', 'blur(20px)')
});
$('.block4_form #blck4_28').mouseover( function(){
styleIcon.css('top', '380px'),
styleIcon.css('right', '330px'),
styleIcon.css('filter', 'blur(0px)')
})
$('.block4_form #blck4_28').mouseout( function(){
styleIcon.css('filter', 'blur(20px)')
});
$('.block4_form #blck4_29').mouseover( function(){
styleIcon.css('top', '380px'),
styleIcon.css('right', '330px'),
styleIcon.css('filter', 'blur(0px)')
})
$('.block4_form #blck4_29').mouseout( function(){
styleIcon.css('filter', 'blur(20px)')
});
$('.block4_form #blck4_30').mouseover( function(){
styleIcon.css('top', '380px'),
styleIcon.css('right', '330px'),
styleIcon.css('filter', 'blur(0px)')
})
$('.block4_form #blck4_30').mouseout( function(){
styleIcon.css('filter', 'blur(20px)')
});
$(document).ready(function(){
    var window_width = $(window).width();
    if (window_width < 1151) {
      $(".block3_form .content").removeClass("col-6"),
      $(".block3_form-img ").removeClass("col-6");
    }else{
      $(".block3_form .content").addClass("col-6"),
      $(".block3_form-img ").addClass("col-6");
    }
})
$(document).ready(function(){
  $('#price').click(function(){
    $('html, body').animate({
      scrollTop: $('.block6').offset().top
    }, 2000)
  })
})
$(document).ready(function(){
  $('#services').click(function(){
    $('html, body').animate({
      scrollTop: $('.block2_head').offset().top
    }, 2000)
  })
})
$(document).ready(function(){
  $('#before_after').click(function(){
    $('html, body').animate({
      scrollTop: $('.block5_slider').offset().top
    }, 2000)
  })
})
$(document).ready(function(){
  $('#specialist').click(function(){
    $('html, body').animate({
      scrollTop: $('.block7').offset().top
    }, 2000)
  })
})
$(document).ready(function(){
  $('#news').click(function(){
    $('html, body').animate({
      scrollTop: $('.block6').offset().top
    }, 2000)
  })
})
$(document).ready(function(){
  $('#contacts').click(function(){
    $('html, body').animate({
      scrollTop: $('footer').offset().top
    }, 2000)
  })
})

$(document).ready(function(){
    var window_width = $(window).width();
    if (window_width < 501) {
      $(".block3 .block3_img").removeClass("col-6"),
      $(".block3 .block3_text").removeClass("col-6");
    }else{
      $(".block3 .block3_img").addClass("col-6"),
      $(".block3 .block3_text").addClass("col-6");
    }
  });
  $(document).ready(function(){
    var window_width = $(window).width();
    if (window_width < 501) {
        $('footer .text h2 br').remove()
    }else{
      $('footer .text h2 br').insertAdjacentHTML()
    }
  });

$('.burger').click(function(){
  var nav = $('.nav ul');
  var window_width= $(window).width();
    nav.toggle(),
    nav.css('position', 'absolute'),
    nav.css('top', '0'),
    nav.css('background', '#E2E5FA'),
    nav.css('padding', '10px'),
    nav.css('border-radius', '4px')
    $('.burger').css('display', 'none'),
    $('.header .info').css('margin-left', '9.45rem')
    if (window_width<1025){
      $('.block1').mousedown(function(){
        $('.burger').css('display', 'flex'),
        $('.nav ul').css('display', 'none')
        if($('.burger').css('display', 'flex')){
            $('.header .info').css('margin-left', '2rem')
        }
    })
    }
})


$('#button1').click(function(){
  $('#button2').removeClass(),
  $('#button1').addClass('active_button'),
  $('.block4_form .sidebar ul:first-child').toggle(),
  $('.block4_form .sidebar ul:nth-child(2)').css('display', 'none'),
  $('.block4_form .content #block4_face').toggle(),
  $('.block4_form .content #block4_body').toggle()
 
})
$('#button2').click(function(){
  var window_width = $(window).width();
  $('#button1').removeClass(),
  $('#button2').addClass('active_button'),
  $('.block4_form .sidebar ul:nth-child(2)').toggle(),
  $('.block4_form .sidebar ul:first-child').css('display', 'none'),
  $('.block4_form .content #block4_face').toggle(),
  $('.block4_form .content #block4_body').toggle(),
  $('.block4_form .content #block4_body').css('padding', '0');
  if(window_width < 1025){
    $('.block4_form .sidebar ul:nth-child(2)').css('display', 'grid')
  }
})
$(document).ready(function(){
    var window_width= $(window).width();
    if (window_width<769){
        $('.content .text br').remove()
    }
})
$(document).ready(function(){
  $(window).scroll(function(){
    if($(this).scrollTop()> 50){
        $('.block1 .header').addClass('.fixed');
    }
    else if ($(this).scrollTop()<140){
        $('.block1 .header').removeClass('.fixed');
    }
});
    
  })
// Отступ от высоты шапки
wrapper.css("padding-top", header.height());

// Фон шапки при скроллинге
$(window).scroll(function(){
    scrollTop = $(this).scrollTop();
    if(scrollTop > 10){
        header.addClass("scrolling");
    }else{
        header.removeClass("scrolling");
    }
});

// При старте 
if($(window).scrollTop() > 0){
    header.addClass("scrolling");
}


// Старт анимаций главный экран
setTimeout(timeOutAnimated, 100, "#header .header");
$("#block_1 .block_1_back").addClass("activeAnimate");
//setTimeout(timeOutAnimated, 200, "#block_1 .block_1 .h1");
$("#block_1 .block_1 .h1").addClass("activeAnimate");
setTimeout(timeOutAnimated, 100, "#block_1 .block_1 .h1 h1");
setTimeout(timeOutAnimated, 100, "#block_1 .block_1 .h1 p");
setTimeout(timeOutAnimated, 100, "#block_1 .block_1_background");
setTimeout(timeOutAnimated, 100, "#block_1 .block_1 .box");
setTimeout(timeOutAnimated, 100, "#block_1 .block_1 .right .box_items");
function timeOutAnimated(elem){
    $(elem).addClass("activeAnimate");
}
function removeTimeOutAnimated(elem){
    $(elem).removeClass("activeAnimate");
}
