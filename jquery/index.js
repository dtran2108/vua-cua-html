$(document).ready(function () {
  $('.chain-slick').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
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
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});

$('.add-to-cart').on('click', function () {
  showHeader('simplifiedHeader');
  var cart = $('.shopping-cart');
  var overlay = $('#dark-overlay');
  var mainCart = $('.main-cart');
  var cartTotal = cart.attr('data-totalitems');
  var newCartTotal = parseInt(cartTotal) + 1;
  var imgtodrag = $(this).parents('.item').find('#combo-img').eq(0);
  var paymentModal = $(this).parents('.item').find('#paymentModal').eq(0);
  if (imgtodrag) {
    paymentModal.css({ opacity: '1' });
    overlay.css({ opacity: '1' });
    setTimeout(function () {
      var imgclone = imgtodrag
        .clone()
        .offset({
          top: imgtodrag.offset().top,
          left: imgtodrag.offset().left
        })
        .css({
          opacity: '0.5',
          position: 'absolute',
          height: '150px',
          width: '150px',
          'z-index': '100'
        })
        .appendTo($('body'))
        .animate(
          {
            top: cart.offset().top + 10,
            left: cart.offset().left + 10,
            width: 75,
            height: 75
          },
          1000,
          'easeInOutExpo'
        );

      imgclone.animate(
        {
          width: 0,
          height: 0
        },
        function () {
          $(this).detach();
        }
      );
      paymentModal.css({ opacity: '0' });
      overlay.css({ opacity: '0' });
    }, 1000);
  }

  setTimeout(function () {
    cart.attr('data-totalitems', newCartTotal);
    mainCart.attr('data-totalitems', newCartTotal);
  }, 1700);
});
