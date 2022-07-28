var counterDesign;
var counterPage=0;
$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        console.log(event);
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1000);
    });

    



$('ul.tabs li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
})


$('.watchothers-sl').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,

        responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1
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
          breakpoint: 591,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },

          {
            breakpoint: 416,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
      ]
  });




(function($) { // Begin jQuery
  $(function() { // DOM ready
    // If a link has a dropdown, add sub menu toggle.
    $('nav ul li a:not(:only-child)').click(function(e) {
      $(this).siblings('.nav-dropdown').toggle();
      // Close one dropdown when selecting another
      $('.nav-dropdown').not($(this).siblings()).hide();
      e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    $('html').click(function() {
      $('.nav-dropdown').hide();
    });
    // Toggle open and close nav styles on click
    $('#nav-toggle').click(function() {
      $('nav ul').slideToggle();
    });
    // Hamburger to X toggle
    $('#nav-toggle').on('click', function() {
      this.classList.toggle('activer');
    });
  }); // end DOM ready
})(jQuery); // end jQuery

});




$(document).ready(function() {
  //parallax scroll
  $(window).on("load scroll", function() {
    var parallaxElement = $(".parallax"),
      parallaxQuantity = parallaxElement.length;
    window.requestAnimationFrame(function() {
      for (var i = 0; i < parallaxQuantity; i++) {
        var currentElement = parallaxElement.eq(i),
          windowTop = $(window).scrollTop(),
          elementTop = currentElement.offset().top,
          elementHeight = currentElement.height(),
          viewPortHeight = window.innerHeight * 2.5 - elementHeight * 2.5,
          scrolled = windowTop - elementTop + viewPortHeight;
        currentElement.css({
          transform: "translate3d(0," + scrolled * -0.15 + "px, 0)"
        });
      }
    });
  });
});


+function () {

document.querySelector('.tabb').classList.add('active')
document.querySelector('.tab-panel').classList.add('active')

function selectPanel (e) {
    var target = e.target.dataset.target
    document.querySelectorAll('.tabb, .tab-panel').forEach(el => el.classList.remove('active'))
    e.target.classList.add('active')
    console.log(document.querySelector('.' + target))
    document.querySelector('.' + target).classList.add('active')
}

document.querySelectorAll('.tabb').forEach(el => {
    el.addEventListener('click', selectPanel)
})

}()

// // MODAL

const modal = document.querySelector(".modal");
const modalButton = document.querySelector(".modalButton");
const modalCloseButton = document.querySelector(".modalCloseButton");
const backdrop = document.querySelector('.backdrop');

const toggleModal = (id) => {
  if (id) {
    const modal = document.querySelector(id);
  }
  modal.classList.toggle("modalActive");
  document.querySelectorAll('.tabb, .tab-panel').forEach(el => el.classList.remove('active'))
  document.getElementById("tab-panel-id").classList.add('active');
  document.getElementById("tab-panel-id1").classList.add('active');
  backdrop.classList.toggle('backdropActive');
};

modalCloseButton.onclick = () => toggleModal();
backdrop.onclick = () => toggleModal();


// MODAL2

const modal2 = document.querySelector(".modal2");
const modalButton2 = document.querySelector(".modalButton2");
const modalCloseButton2 = document.querySelector(".modalCloseButton2");
const backdrop2 = document.querySelector('.backdrop2');

const toggleModal2 = (id) => {
  if (id) {
    const modal2 = document.querySelector(id);
  }
  modal2.classList.toggle("modalActive2");
  document.querySelectorAll('.tabb, .tab-panel').forEach(el => el.classList.remove('active'))
  document.getElementById("tab-panel-id").classList.add('active');
  document.getElementById("tab-panel-id1").classList.add('active');
  backdrop2.classList.toggle('backdropActive2');
};

modalCloseButton2.onclick = () => toggleModal2();
backdrop2.onclick = () => toggleModal2();


// MODAL3

const modal3 = document.querySelector(".modal3");
const modalButton3 = document.querySelector(".modalButton3");
const modalCloseButton3 = document.querySelector(".modalCloseButton3");
const backdrop3 = document.querySelector('.backdrop3');

const toggleModal3 = (id) => {
  if (id) {
    const modal3 = document.querySelector(id);
  }
  modal3.classList.toggle("modalActive3");
  document.querySelectorAll('.tabb, .tab-panel').forEach(el => el.classList.remove('active'))
  document.getElementById("tab-panel-id").classList.add('active');
  document.getElementById("tab-panel-id1").classList.add('active');
  backdrop3.classList.toggle('backdropActive3');
};

modalCloseButton3.onclick = () => toggleModal3();
backdrop3.onclick = () => toggleModal3();


// // MODAL4

const modal4 = document.querySelector(".modal4");
const modalButton4 = document.querySelector(".modalButton4");
const modalCloseButton4 = document.querySelector(".modalCloseButton4");
const backdrop4 = document.querySelector('.backdrop4');

const toggleModal4 = (id) => {
  if (id) {
    const modal4 = document.querySelector(id);
  }
  modal4.classList.toggle("modalActive4");
  document.querySelectorAll('.tabb, .tab-panel').forEach(el => el.classList.remove('active'))
  document.getElementById("tab-panel-id").classList.add('active');
  document.getElementById("tab-panel-id1").classList.add('active');
  backdrop4.classList.toggle('backdropActive4');
};

modalCloseButton4.onclick = () => toggleModal4();
backdrop4.onclick = () => toggleModal4();

// // MODAL5

const modal5 = document.querySelector(".modal5");
console.log(modal5);
const modalButton5 = document.querySelector(".modalButton5");
const modalCloseButton5 = document.querySelector(".modalCloseButton5");
const backdrop5 = document.querySelector('.backdrop5');
var cn=0;
const toggleModal5 = (id) => {
  
  if (id) {
    const modal5 = document.querySelector(id);
  }
  modal5.classList.toggle("modalActive5");
  document.querySelectorAll('.tabb, .tab-panel').forEach(el => el.classList.remove('active'))
  document.getElementById("tab-panel-id").classList.add('active');
  document.getElementById("tab-panel-id1").classList.add('active');
  if(cn==0){
  window.setTimeout(toggleModal5, 6000);
  window.location.hash="MarketBlock";
  cn++;};
  backdrop5.classList.toggle('backdropActive5');


};
modalCloseButton5.onclick = () => toggleModal5();
backdrop5.onclick = () => toggleModal5();

function swappageUp(){
  counterPage++;
}

function swappageDown(){
  if(counterPage==0){
    window.history.back();
  };
  counterPage--;
}

$(document).ready(function() {
  $("#slider-range-min").slider({
          animate: true,
          range: "min",
          value:1,
          min: 60,
          max: 1200,
          step: 1,
          slide: function(event, ui) {
              update(1,ui.value); //changed
          }
      });
      //Added, set initial value.
      $("#amount").val(60);  
      $("#amount-label").text(1463);
      
      update();
  });

//changed. now with parameter
function update(slider,val) {
  //changed. Now, directly take value from ui.value. if not set (initial, will use current value.)
  var $amount = slider == 1?val:$("#amount").val();

  /* commented
  $amount = $( "#slider" ).slider( "value" );
   */
  if( $amount >= 60 ){
         $total = "" + (($amount * 1)  / 1);/*ЛИДЫ*/
         $total2 = "" + (($amount * 300)  / 1);/*Бюджет*/
         $total3 = "12 000" /*пробный аудит*/
         $total4 = "Геореклама + SEO";
        
  $('#percentage-label').html('9');
  }
  if( $amount >= 150 ){
      $total = "" + (($amount * 1)  / 1);
      $total2 = "" + (($amount * 300)  / 1);
      $total3 = "13 500" 
      $total4 = "Геореклама + SEO + контекст Я.Директ";
    }
  if( $amount >= 220 ){
      $total = "" + (($amount * 1)  / 1);
      $total2 = "" + (($amount * 300)  / 1);
      $total3 = "15 000"
      $total4 = "Геореклама + SEO + контекст Я.Директ + реклама на тематич.сайтах";
    }
   if( $amount >= 290 ) {
     $total = "" + (($amount * 1)  / 1);
     $total2 = "" + (($amount * 300)  / 1);
     $total3 = "16 500" 
     $total4 = "Геореклама + SEO + контекст Я.Директ + реклама на тематич.сайтах + SMM Vk";
    $('#percentage-label').html('10');
  }
    if( $amount >= 360 ){
      $total = "" + (($amount * 1)  / 1);
      $total2 = "" + (($amount * 300)  / 1);
      $total3 = "18 000" 
      $total4 = "Геореклама + SEO + контекст Я.Директ + реклама на тематич.сайтах + SMM Vk + Таргетинг Vk";
    }
	  if( $amount >= 430 ){
      $total = "" + (($amount * 1)  / 1);
      $total2 = "" + (($amount * 300)  / 1);
      $total3 = "19 500" 
      $total4 = "Геореклама + SEO + контекст Я.Директ + реклама на тематич.сайтах + SMM Vk + Таргетинг Vk + Продвижение в Я.Дзен";
    }
	  if( $amount >= 500 ){
      $total = "" + (($amount * 1)  / 1);
      $total2 = "" + (($amount * 300)  / 1);
      $total3 = "21 000"
      $total4 = "Геореклама + SEO + контекст Я.Директ + реклама на тематич.сайтах + SMM Vk + Таргетинг Vk + Продвижение в Я.Дзен + РСЯ";
    }
	  if( $amount >= 570 ){
      $total = "" + (($amount * 1)  / 1);
      $total2 = "" + (($amount * 300)  / 1);
      $total3 = "22 500" 
      $total4 = "Геореклама + SEO + контекст Я.Директ + реклама на тематич.сайтах + SMM Vk + Таргетинг Vk + Продвижение в Я.Дзен + РСЯ + SMM ОК";
    }
	  if( $amount >= 640 ){
      $total = "" + (($amount * 1)  / 1);
      $total2 = "" + (($amount * 300)  / 1);
      $total3 = "23 000" 
      $total4 = "Геореклама + SEO + контекст Я.Директ + реклама на тематич.сайтах + SMM Vk + Таргетинг Vk + Продвижение в Я.Дзен + РСЯ + SMM ОК + Тарегтинг ОК";
    }
		  if( $amount >= 710 ){
      $total = "" + (($amount * 1)  / 1);
      $total2 = "" + (($amount * 300)  / 1);
      $total3 = "24 500" 
      $total4 = "Геореклама + SEO + контекст Я.Директ + реклама на тематич.сайтах + SMM Vk + Таргетинг Vk + Продвижение в Я.Дзен + РСЯ + SMM ОК + Тарегтинг ОК + Контент-маркетинг";
    }
		  if( $amount >= 780 ){
      $total = "" + (($amount * 1)  / 1);
      $total2 = "" + (($amount * 300)  / 1);
      $total3 = "26 000"
      $total4 = "Геореклама + SEO + контекст Я.Директ + реклама на тематич.сайтах + SMM Vk + Таргетинг Vk + Продвижение в Я.Дзен + РСЯ + SMM ОК + Тарегтинг ОК  + Контент-маркетинг + Ретаргетинг";
    }
		  if( $amount >= 850 ){
      $total = "" + (($amount * 1)  / 1);
      $total2 = "" + (($amount * 300)  / 1);
      $total3 = "27 500" 
      $total4 = "Геореклама + SEO + контекст Я.Директ + реклама на тематич.сайтах + SMM Vk + Таргетинг Vk + Продвижение в Я.Дзен + РСЯ + SMM ОК + Тарегтинг ОК  + Контент-маркетинг + Ретаргетинг + Ведение блога";
    }
		  if( $amount >= 920 ){
      $total = "" + (($amount * 1)  / 1);
      $total2 = "" + (($amount * 300)  / 1);
      $total3 = "29 000"
      $total4 = "Геореклама + SEO + контекст Я.Директ + реклама на тематич.сайтах + SMM Vk + Таргетинг Vk + Продвижение в Я.Дзен + РСЯ + SMM ОК + Тарегтинг ОК  + Контент-маркетинг + Ретаргетинг + Ведение блога + Мессенджер-маркетинг";
    }
		  if( $amount >= 990 ){
      $total = "" + (($amount * 1)  / 1);
      $total2 = "" + (($amount * 300)  / 1);
      $total3 = "30 500 "
      $total4 = "Геореклама + SEO + контекст Я.Директ + реклама на тематич.сайтах + SMM Vk + Таргетинг Vk + Продвижение в Я.Дзен + РСЯ + SMM ОК + Тарегтинг ОК  + Контент-маркетинг + Ретаргетинг + Ведение блога + Мессенджер-маркетинг + Реклама в Telegram";
    }
		  if( $amount >= 1060 ){
      $total = "" + (($amount * 1)  / 1);
      $total2 = "" + (($amount * 300)  / 1);
      $total3 = "31 000"
      $total4 = "Геореклама + SEO + контекст Я.Директ + реклама на тематич.сайтах + SMM Vk + Таргетинг Vk + Продвижение в Я.Дзен + РСЯ + SMM ОК + Тарегтинг ОК  + Контент-маркетинг + Ретаргетинг + Ведение блога + Мессенджер-маркетинг + Реклама в Telegram + SERM";
    }
		  if( $amount >= 1130 ){
      $total = "" + (($amount * 1)  / 1);
      $total2 = "" + (($amount * 300)  / 1);
      $total3 = "32 500"
      $total4 = "Геореклама + SEO + контекст Я.Директ + реклама на тематич.сайтах + SMM Vk + Таргетинг Vk + Продвижение в Я.Дзен + РСЯ + SMM ОК + Тарегтинг ОК  + Контент-маркетинг + Ретаргетинг + Ведение блога + Мессенджер-маркетинг + Реклама в Telegram + SERM + Сквозная аналитика";
    }
		  if( $amount >= 1200 ){
      $total = "" + (($amount * 1)  / 1);
      $total2 = "" + (($amount * 300)  / 1);
      $total3 = "34 000"
      $total4 = "Геореклама + SEO + контекст Я.Директ + реклама на тематич.сайтах + SMM Vk + Таргетинг Vk + Продвижение в Я.Дзен + РСЯ + SMM ОК + Тарегтинг ОК  + Контент-маркетинг + Ретаргетинг + Ведение блога + Мессенджер-маркетинг + Реклама в Telegram + SERM + Сквозная аналитика";
    }
    $( "#amount" ).val($amount);
  $( "#amount-label" ).text($amount);

  $( "#total" ).val($total);
  $( "#total-label" ).text($total);

  
  $( "#total-label2" ).text($total2);

  $( "#total3" ).val($total3);
  $( "#total-label3" ).text($total3);

  $( "#total4" ).val($total4);
  $( "#total-label4" ).text($total4);
         
         
}
const items = document.querySelectorAll(".item");

items.forEach((item) => {
    item.addEventListener("click", () => {
        item.classList.toggle("open");
    });
});

function openDesigns(z){
  const designBlock = document.querySelector(".work-next");
  const buttonNext = document.querySelector(".work-border3");
  const buttonPrev = document.querySelector(".work-border2");
  if (z==1) {
    designBlock.style.display = "flex";
    buttonNext.style.display = "block";
    buttonPrev.style.display = "none";
  } else {
    designBlock.style.display = "none";
    buttonNext.style.display = "none";
    buttonPrev.style.display = "block";
  };
};
function log(){
  document.getElementById("thanks").style.display = "block";
  document.getElementById("thanks2").style.display = "block";
  setTimeout(function(){
    document.getElementById('thanks2').style.display = 'none';
  }, 5000);
}
function closeThanks(){
  document.getElementById("thanks").style.display = "none";
}