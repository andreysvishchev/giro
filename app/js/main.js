$(function () {

  $('.banner-section__slider').slick({
    dots: true,
    prevArrow: '<button class="slick-btn banner-section__slider-btn  banner-section__slider-btnprev "><img src="images/icons/arrow-left.svg" alt=""></button>',
    nextArrow: '<button class="slick-btn banner-section__slider-btn  banner-section__slider-btnnext "><img src="images/icons/arrow-right.svg" alt=""></button>'
  });

  $('.tabs__item').on('click', function (e) {
    e.preventDefault();
    $($(this).siblings()).removeClass('tabs__item--active');
    $($(this).parent().siblings().find('div')).removeClass('tabs__content--active');

    $(this).addClass('tabs__item--active');
    $($(this).attr('href')).addClass('tabs__content--active')

    $('.product-slider').slick('setPosition');
  });

  $('.product-item__favorite').on('click', function () {
    $(this).toggleClass('product-item__favorite--active')
  });

   $('.catalog__filter-button').on('click', function () {
     $(this).toggleClass('catalog__filter-button--active')
   });

  $('.product-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button class="slick-btn product-slider__slider-btn  product-slider__slider-btnprev "><img src="images/icons/arrow-black-left.svg" alt=""></button>',
    nextArrow: '<button class="slick-btn product-slider__slider-btn  product-slider__slider-btnnext "><img src="images/icons/arrow-black-right.svg" alt=""></button>'
  });

});