$('.add-to-cart').on('click', function () {
  showHeader('simplifiedHeader');
  var cart = $('.shopping-cart');
  var mainCart = $('.main-cart');
  var cartTotal = cart.attr('data-totalitems');
  var newCartTotal = parseInt(cartTotal) + 1;
  var imgtodrag = $(this).parents('.item').find('#combo-img').eq(0);
  if (imgtodrag) {
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
  }

  setTimeout(function () {
    cart.attr('data-totalitems', newCartTotal);
    mainCart.attr('data-totalitems', newCartTotal);
  }, 1000);
});
