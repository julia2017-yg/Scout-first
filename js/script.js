////////////menu///////////
const iconMenu = document.querySelector('.hamburger-menu');
  if(iconMenu) {
    const menuBody = document.querySelector('.menu-body');
    iconMenu.addEventListener('click', function(e){
      document.body.classList.toggle('lock');
      iconMenu.classList.toggle('active');
      menuBody.classList.toggle('active');
    });
  }
//////tabs//////////
  const section = document.querySelectorAll('.section');
  const bannerSubMenu = document.querySelector('.header-banner-submenu');
  const subMenuLinks =  document.querySelectorAll('.submenu a');
  const subMenuItems = document.querySelectorAll('.submenu li');

  window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;
    section.forEach((el, i) => {
      if (el.offsetTop - bannerSubMenu.clientHeight <= scrollDistance) {
        subMenuLinks.forEach((el) => {
          if (el.classList.contains('tips-active')) {
            el.classList.remove('tips-active');
          }
        }); 
        subMenuItems[i].querySelector('a').classList.add('tips-active');
      }
    });
  });
///////////accordeon///////////////
const tipLinks = document.querySelectorAll('.tips-link');
const tipsSubs = document.querySelectorAll('.tips-sub');
const tipsItemWrap = document.querySelectorAll('.tips-item-wrap');

for (let i = 0; i < tipLinks.length; i++) {
  tipLinks[i].addEventListener('click', () => {
    tipsSubs[i].classList.toggle('hidden');
    tipsItemWrap[i].classList.toggle('hidden');
    tipLinks[i].classList.toggle('tips-link-active');    
  })
}

const fqasLinks = document.querySelectorAll('.fqas-link');
const tipSubElem = document.querySelectorAll('.block-text-next');

for (let i = 0; i < fqasLinks.length; i++) {
  fqasLinks[i].addEventListener('click', () => {
    tipSubElem[i].classList.toggle('hidden');
    fqasLinks[i].classList.toggle('fqas-link-active');
   })
}
////////tabs scroll/////////
 window.addEventListener('scroll', function() {
     const headerHeight = document.querySelector('.header-banner').clientHeight - document.querySelector('.header').clientHeight;
     const faqHeight = this.document.getElementById('fqas').clientHeight;
     const tipsHeight = this.document.getElementById('tips').clientHeight;
     const glossaryHeight = this.document.getElementById('glossary').clientHeight;
     const stickyMenu = document.querySelector('.header-banner-submenu');
     const sumElemsHeight = faqHeight + tipsHeight + glossaryHeight;
     let scrollDistance = window.scrollY;   
     
       if (scrollDistance > headerHeight && scrollDistance < sumElemsHeight) {
         stickyMenu.classList.add('sticky');
       } else {
         stickyMenu.classList.remove('sticky');
       }
 });

window.addEventListener('scroll', function() {
  const header = document.querySelector('.header');
  header.classList.toggle('sticky-header', window.scrollY > 0);
});

///////slider/////////////
$(document).ready(function(){
  $('.slider-single').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    adaptiveHeight: true,
    infinite: false,
    useTransform: true,
    speed: 400,
    cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',  
  });
 
  $('.slider-nav')
    .on('init', function(event, slick) {
      $('.slider-nav .slick-slide.slick-current').addClass('is-active');
    })
    .slick({
      nextArrow: '<img src="./images/arrow-next.svg" class="next" alt="next">',
      prevArrow: '<img src="./images/arrow-prev.svg" class="prev" alt="prev">',
      slidesToShow: 16,
      slidesToScroll: 16,
      dots: false,
      vertical: true,
      focusOnSelect: false,
      infinite: false,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 16,
          slidesToScroll: 16,
        }
      }, {
        breakpoint: 640,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 8,
       }
      }, {
        breakpoint: 420,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
     }
      }]
    });
 
  $('.slider-single').on('afterChange', function(event, slick, currentSlide) {
    $('.slider-nav').slick('slickGoTo', currentSlide);
    var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
    $('.slider-nav .slick-slide.is-active').removeClass('is-active');
    $(currrentNavSlideElem).addClass('is-active');
  });
 
  $('.slider-nav').on('click', '.slick-slide', function(event) {
    event.preventDefault();
    var goToSingleSlide = $(this).data('slick-index');
 
    $('.slider-single').slick('slickGoTo', goToSingleSlide);
  });
});
