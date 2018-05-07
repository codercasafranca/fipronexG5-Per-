// $fn.parallax( resistance, mouse )
// $( document ).mousemove( function( e ) {
  // $( '.background' ).parallax( -30, e );
  // $( '.ui-image-02-parallax' ).parallax( 30 , e );
// });

// modalGarrapatas
/*function openPop(evt, popName) {
    // Declare all variables
    var i, tabcontentcinco, tablinkscinco;

    // Get all elements with class="tabcontent" and hide them
    tabcontentcinco = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabcontentcinco.length; i++) {
        tabcontentcinco[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinkscinco = document.getElementsByClassName("tablinks-garrapatas");
    for (i = 0; i < tablinkscinco.length; i++) {
        tablinkscinco[i].className = tablinkscinco[i].className.replace(" active-active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(popName).style.display = "block";
    evt.currentTarget.className += " active-active";
}
*/

/*****************************
 *         parallaxJs        *
 *****************************/
//Movimiento 01
$(document).ready(function() {

  var request = null;
  var mouse = {
    x: 0,
    y: 0
  };
  var cx = window.innerWidth / 2;
  var cy = window.innerHeight / 2;

  $(document).mousemove(function(event) {

    mouse.x = event.pageX;
    mouse.y = event.pageY;

    cancelAnimationFrame(request);
    request = requestAnimationFrame(update);
  });

  function update() {

    dx = mouse.x - cx;
    dy = mouse.y - cy;

    tiltx = (dy / cy);
    tilty = -(dx / cx);
    radius = Math.sqrt(Math.pow(tiltx, 2) + Math.pow(tilty, 2));
    degree = (radius * 20);
    TweenLite.to("", 10, {
      transform: 'rotate3d(' + tiltx + ', ' + tilty + ', 0, ' + degree + 'deg)',
      ease: Power2.easeOut
    });
  }

  $(window).resize(function() {
    cx = window.innerWidth / 2;
    cy = window.innerHeight / 2;
  });
});

//Movimiento 02
$(document).ready(function() {

  var request = null;
  var mouse = {
    x: 0,
    y: 0
  };
  var cx = window.innerWidth / 2;
  var cy = window.innerHeight / 2;

  $(document).mousemove(function(event) {

    mouse.x = event.pageX;
    mouse.y = event.pageY;

    cancelAnimationFrame(request);
    request = requestAnimationFrame(update);
  });

  function update() {

    dx = mouse.x - cx;
    dy = mouse.y - cy;

    tiltx = (dy / cy);
    tilty = -(dx / cx);
    radius = Math.sqrt(Math.pow(tiltx, 2) + Math.pow(tilty, 2));
    degree = (radius * 20);
    TweenLite.to("#container-02", 1, {
      transform: 'rotate3d(' + tiltx + ', ' + tilty + ', 0, ' + degree + 'deg)',
      ease: Power2.easeOut
    });
  }

  $(window).resize(function() {
    cx = window.innerWidth / 2;
    cy = window.innerHeight / 2;
  });
});

//Movimiento 03
$(document).ready(function() {

  var request = null;
  var mouse = {
    x: 0,
    y: 0
  };
  var cx = window.innerWidth / 2;
  var cy = window.innerHeight / 2;

  $(document).mousemove(function(event) {

    mouse.x = event.pageX;
    mouse.y = event.pageY;

    cancelAnimationFrame(request);
    request = requestAnimationFrame(update);
  });

  function update() {

    dx = mouse.x - cx;
    dy = mouse.y - cy;

    tiltx = (dy / cy);
    tilty = -(dx / cx);
    radius = Math.sqrt(Math.pow(tiltx, 2) + Math.pow(tilty, 2));
    degree = (radius * 20);
    TweenLite.to("#container-03", 10, {
      transform: 'rotate3d(' + tiltx + ', ' + tilty + ', 0, ' + degree + 'deg)',
      ease: Power2.easeOut
    });
  }

  $(window).resize(function() {
    cx = window.innerWidth / 2;
    cy = window.innerHeight / 2;
  });
});

//Movimiento 04
$(document).ready(function() {

  var request = null;
  var mouse = {
    x: 0,
    y: 0
  };
  var cx = window.innerWidth / 2;
  var cy = window.innerHeight / 2;

  $(document).mousemove(function(event) {

    mouse.x = event.pageX;
    mouse.y = event.pageY;

    cancelAnimationFrame(request);
    request = requestAnimationFrame(update);
  });

  function update() {

    dx = mouse.x - cx;
    dy = mouse.y - cy;

    tiltx = (dy / cy);
    tilty = -(dx / cx);
    radius = Math.sqrt(Math.pow(tiltx, 2) + Math.pow(tilty, 2));
    degree = (radius * 20);
    TweenLite.to("#container-04", 3, {
      transform: 'rotate3d(' + tiltx + ', ' + tilty + ', 0, ' + degree + 'deg)',
      ease: Power2.easeOut
    });
  }

  $(window).resize(function() {
    cx = window.innerWidth / 2;
    cy = window.innerHeight / 2;
  });
});

//Movimiento 05
$(document).ready(function() {

  var request = null;
  var mouse = {
    x: 0,
    y: 0
  };
  var cx = window.innerWidth / 2;
  var cy = window.innerHeight / 2;

  $(document).mousemove(function(event) {

    mouse.x = event.pageX;
    mouse.y = event.pageY;

    cancelAnimationFrame(request);
    request = requestAnimationFrame(update);
  });

  function update() {

    dx = mouse.x - cx;
    dy = mouse.y - cy;

    tiltx = (dy / cy);
    tilty = -(dx / cx);
    radius = Math.sqrt(Math.pow(tiltx, 2) + Math.pow(tilty, 2));
    degree = (radius * 20);
    TweenLite.to("#container-esferas", 2, {
      transform: 'rotate3d(' + tiltx + ', ' + tilty + ', 0, ' + degree + 'deg)',
      ease: Power2.easeOut
    });
  }

  $(window).resize(function() {
    cx = window.innerWidth / 2;
    cy = window.innerHeight / 2;
  });
});

/******************************
 *   owlCarousel FipronexG5   *
 ******************************/

$(document).ready(function(){
$(".owl-carousel.fipronex-g5").owlCarousel({
  	loop:true,
    margin:11,
    nav:true,
    navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
  });
});

/*******************
 *     navScroll   *
 *******************/
$('.ui-nav ul li a').click(function(e){
      e.preventDefault();
        enlace  = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(enlace).offset().top+1
        }, 1000);
});

/***************************
 *      navScrollFooter    *
 ***************************/
$('.ui-nav-footer li a').click(function(e){
      e.preventDefault();
        enlace  = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(enlace).offset().top+10
        }, 1000);
});

/******************************************
 *          tab-ProtecciónIntegral        *
 ******************************************/
function openIntegral(evt, integralName) {
    var i, tabcontentdos, tablinksdos;
    tabcontentdos = document.getElementsByClassName("tabcontent-integral");
    for (i = 0; i < tabcontentdos.length; i++) {
        tabcontentdos[i].style.display = "none";
    }
    tablinksdos = document.getElementsByClassName("tablinks-integral");
    for (i = 0; i < tablinksdos.length; i++) {
        tablinksdos[i].className = tablinksdos[i].className.replace(" active", "");
    }
    document.getElementById(integralName).style.display = "block";
    evt.currentTarget.className += " active";
}

/*************************************
 *          tabPresentaciones        *
 *************************************/
function openPresentaciones(evt, presentacionesName) {
    var i, tabcontentcinco, tablinkscinco;
    tabcontentcinco = document.getElementsByClassName("tabcontent-presentaciones");
    for (i = 0; i < tabcontentcinco.length; i++) {
        tabcontentcinco[i].style.display = "none";
    }
    tablinkscinco = document.getElementsByClassName("tablinks-presentaciones");
    for (i = 0; i < tablinkscinco.length; i++) {
        tablinkscinco[i].className = tablinkscinco[i].className.replace(" active", "");
    }
    document.getElementById(presentacionesName).style.display = "block";
    evt.currentTarget.className += " active";
}

/*******************************
 *           navEfects         *
 *******************************/
$(document).ready(function() {
    $(window).scroll(function(){
        var windowHeight = $(window).scrollTop();
        var contenido2 = $("#b").offset();
        contenido2 = contenido2.top-40;

        if(windowHeight >= contenido2  ){
          $('.ui-nav').addClass("menu-dos");
            }else{
          $('.ui-nav').removeClass("menu-dos");
        }
    });
});

$(document).ready(function() {
    $(window).scroll(function(){
        var windowHeight = $(window).scrollTop();
        var contenido2 = $("#c").offset();
        contenido2 = contenido2.top-40;

        if(windowHeight >= contenido2  ){
          $('.ui-nav').addClass("menu-tres");
            }else{
          $('.ui-nav').removeClass("menu-tres");
        }
    });
});

$(document).ready(function() {
    $(window).scroll(function(){
        var windowHeight = $(window).scrollTop();
        var contenido2 = $("#d").offset();
        contenido2 = contenido2.top-40;

        if(windowHeight >= contenido2  ){
          $('.ui-nav').addClass("menu-cuatro");
            }else{
          $('.ui-nav').removeClass("menu-cuatro");
        }
    });
});

$(document).ready(function() {
    $(window).scroll(function(){
        var windowHeight = $(window).scrollTop();
        var contenido2 = $("#e").offset();
        contenido2 = contenido2.top-40;

        if(windowHeight >= contenido2  ){
          $('.ui-nav').addClass("menu-cinco");
            }else{
          $('.ui-nav').removeClass("menu-cinco");
        }
    });
});

$(document).ready(function() {
    $(window).scroll(function(){
        var windowHeight = $(window).scrollTop();
        var contenido2 = $("#f").offset();
        contenido2 = contenido2.top-40;

        if(windowHeight >= contenido2  ){
          $('.ui-nav').addClass("menu-seis");
            }else{
          $('.ui-nav').removeClass("menu-seis");
        }
    });
});

$(document).ready(function() {
    $(window).scroll(function(){
        var windowHeight = $(window).scrollTop();
        var contenido2 = $("#g").offset();
        contenido2 = contenido2.top-40;

        if(windowHeight >= contenido2  ){
          $('.ui-nav').addClass("menu-siete");
            }else{
          $('.ui-nav').removeClass("menu-siete");
        }
    });
});

$(document).ready(function() {
    $(window).scroll(function(){
        var windowHeight = $(window).scrollTop();
        var contenido2 = $("#h").offset();
        contenido2 = contenido2.top-40;

        if(windowHeight >= contenido2  ){
          $('.ui-nav').addClass("menu-ocho");
            }else{
          $('.ui-nav').removeClass("menu-ocho");
        }
    });
});


 /************************
  *      tabCiclos       *
  ************************/
 function openGarrapatas(evt, garrapatasName) {
     var i, tabcontenttres, tablinks;
     tabcontenttres = document.getElementsByClassName("adulto-tab");
     for (i = 0; i < tabcontenttres.length; i++) {
         tabcontenttres[i].style.display = "none";
     }
     tablinkstres = document.getElementsByClassName("garrapata-tablinks");
     for (i = 0; i < tablinkstres.length; i++) {
         tablinkstres[i].className = tablinkstres[i].className.replace(" active", "");
     }
     document.getElementById(garrapatasName).style.display = "block";
     evt.currentTarget.className += " active";
 }


 /************************
  *      tabCiclos       *
  ************************/
 function openPulgas(evt, pulgasName) {
     var i, tabcontentcuatro, tablinks;
     tabcontentcuatro = document.getElementsByClassName("tab-pulga");
     for (i = 0; i < tabcontentcuatro.length; i++) {
         tabcontentcuatro[i].style.display = "none";
     }
     tablinkscuatro = document.getElementsByClassName("links-pulga");
     for (i = 0; i < tablinkscuatro.length; i++) {
         tablinkscuatro[i].className = tablinkscuatro[i].className.replace(" active", "");
     }
     document.getElementById(pulgasName).style.display = "block";
     evt.currentTarget.className += " active";
 }

/******
btn top
*******/
$(window).scroll(function(){
    if ($(this).scrollTop() > 0) {
        $('.ui-btn-top').fadeIn();
    } else {
        $('.ui-btn-top').fadeOut();
    }
});

$('.ui-btn-top').click(function(){
    $('body,html').animate({scrollTop : 0}, 500);
    return false;
});

//sliderGarrapatasModal
$(window).load(function() {

  //sliderGarrapatasModal
  var sliderGouno;

  $(function(){

    sliderGouno=$('#bs1').bxSlider({
      mode:"vertical",
      nextText:'',
      prevText:'',
    })

    $(".tablinks-garrapatas").click(function(){
      $(".tablinks-garrapatas").removeClass("active-active");
      $(this).addClass("active-active");
      var position= parseInt($(this).attr("data-position-uno"));

      sliderGouno.goToSlide(position);
      slider.goToPreviousSlide();
    })

    $(".bx-prev").click(function(){
      console.log("retroceder");

      var pos=sliderGouno.getCurrentSlide();
      console.log(sliderGouno.getCurrentSlide());
      $(".tablinks-garrapatas").removeClass("active-active");
      $('[data-position-uno="'+pos+'"]').addClass("active-active");
    })

    $(".bx-next").click(function(){
      console.log("avanazar");
      var pos=sliderGouno.getCurrentSlide();
      $(".tablinks-garrapatas").removeClass("active-active");
      $('[data-position-uno="'+pos+'"]').addClass("active-active");
    })

    // comentoCodigo

    // $(".bx-pager-item").click(function(){
    //   console.log("click en elemento");
    //   var pos=sliderGouno.getCurrentSlide()+
    //   1;
    //   console.log("posicion",pos);
    //   $(".tablinks-garrapatas").removeClass("active-active");
    //   $('[data-position-uno="'+pos+'"]').addClass("active-active");
    // })

    // agregoCodigo
    $(".bx-pager div:nth-child(1)").click(function(){
      $("#modal-titulo-garrapatas-01").addClass("active-active");
      $("#modal-titulo-garrapatas-02").removeClass("active-active");
      $("#modal-titulo-garrapatas-03").removeClass("active-active");
    });
    $(".bx-pager div:nth-child(2)").click(function(){
      $("#modal-titulo-garrapatas-01").removeClass("active-active");
      $("#modal-titulo-garrapatas-02").addClass("active-active");
      $("#modal-titulo-garrapatas-03").removeClass("active-active");
    });
    $(".bx-pager div:nth-child(3)").click(function(){
      $("#modal-titulo-garrapatas-01").removeClass("active-active");
      $("#modal-titulo-garrapatas-02").removeClass("active-active");
      $("#modal-titulo-garrapatas-03").addClass("active-active");
    });

  });
});


//sliderPulgasModal
$(window).load(function() {

  //sliderPulgasModal
  var sliderGodos;

    $(function(){

      sliderGodos=$('#bs2').bxSlider({
        mode:"vertical",
        nextText:'',
        prevText:'',
      })

      $(".tablinks-pulgas").click(function(){
        $(".tablinks-pulgas").removeClass("active-active");
        $(this).addClass("active-active");
        var position= parseInt($(this).attr("data-position-dos"));

        sliderGodos.goToSlide(position);
        slider.goToPreviousSlide();
      })

      $(".bx-prev").click(function(){
        console.log("retroceder");

        var pos=sliderGodos.getCurrentSlide();
        console.log(sliderGodos.getCurrentSlide());
        $(".tablinks-pulgas").removeClass("active-active");
        $('[data-position-dos="'+pos+'"]').addClass("active-active");
      })

      $(".bx-next").click(function(){
        console.log("avanazar");
        var pos=sliderGodos.getCurrentSlide();
        $(".tablinks-pulgas").removeClass("active-active");
        $('[data-position-dos="'+pos+'"]').addClass("active-active");
      })

      // comentoCodigo

      // $(".bx-pager-item").click(function(){
      //   console.log("click en elemento");
      //   var pos=sliderGodos.getCurrentSlide()+
      //   1;
      //   console.log("posicion",pos);
      //   $(".tablinks-pulgas").removeClass("active-active");
      //   $('[data-position-dos="'+pos+'"]').addClass("active-active");
      // })

      // agregoCodigo

      $(".bx-pager div:nth-child(1)").click(function(){
      $("#modal-titulo-pulgas-01").addClass("active-active");
      $("#modal-titulo-pulgas-02").removeClass("active-active");
      $("#modal-titulo-pulgas-03").removeClass("active-active");
    });
    $(".bx-pager div:nth-child(2)").click(function(){
      $("#modal-titulo-pulgas-01").removeClass("active-active");
      $("#modal-titulo-pulgas-02").addClass("active-active");
      $("#modal-titulo-pulgas-03").removeClass("active-active");
    });
    $(".bx-pager div:nth-child(3)").click(function(){
      $("#modal-titulo-pulgas-01").removeClass("active-active");
      $("#modal-titulo-pulgas-02").removeClass("active-active");
      $("#modal-titulo-pulgas-03").addClass("active-active");
    });

  });

});


//sliderMosquitoModal
$(window).load(function() {

  //sliderMosquitoModal
  var sliderGotres;

  $(function(){

    sliderGotres=$('#bs3').bxSlider({
      mode:"vertical",
      nextText:'',
      prevText:'',
    })

    $(".tablinks-mosquito").click(function(){
      $(".tablinks-mosquito").removeClass("active-active");
      $(this).addClass("active-active");
      var position= parseInt($(this).attr("data-position-tres"));

      sliderGotres.goToSlide(position);
      slider.goToPreviousSlide();
    })

    $(".bx-prev").click(function(){
      console.log("retroceder");

      var pos=sliderGotres.getCurrentSlide();
      console.log(sliderGotres.getCurrentSlide());
      $(".tablinks-mosquito").removeClass("active-active");
      $('[data-position-tres="'+pos+'"]').addClass("active-active");
    })

    $(".bx-next").click(function(){
      console.log("avanazar");
      var pos=sliderGotres.getCurrentSlide();
      $(".tablinks-mosquito").removeClass("active-active");
      $('[data-position-tres="'+pos+'"]').addClass("active-active");
    })

    // comentoCodigo

    // $(".bx-pager-item").click(function(){
    //   console.log("click en elemento");
    //   var pos=sliderGotres.getCurrentSlide()+
    //   1;
    //   console.log("posicion",pos);
    //   $(".tablinks-mosquito").removeClass("active-active");
    //   $('[data-position-tres="'+pos+'"]').addClass("active-active");
    // })

    // agregoCodigo

    $(".bx-pager div:nth-child(1)").click(function(){
      $("#modal-titulo-mosquitos-01").addClass("active-active");
      $("#modal-titulo-mosquitos-02").removeClass("active-active");
      $("#modal-titulo-mosquitos-03").removeClass("active-active");
    });
    $(".bx-pager div:nth-child(2)").click(function(){
      $("#modal-titulo-mosquitos-01").removeClass("active-active");
      $("#modal-titulo-mosquitos-02").addClass("active-active");
      $("#modal-titulo-mosquitos-03").removeClass("active-active");
    });
    $(".bx-pager div:nth-child(3)").click(function(){
      $("#modal-titulo-mosquitos-01").removeClass("active-active");
      $("#modal-titulo-mosquitos-02").removeClass("active-active");
      $("#modal-titulo-mosquitos-03").addClass("active-active");
    });

  });
});

// modal vector garrapata - tab interior
$(document).ready(function(){

	$('ul.tabs-garrapata li').click(function(){
		var tab_id = $(this).attr('data-tab-garrapata');

		$('ul.tabs-garrapata li').removeClass('current-garrapata');
		$('.tab-content-garrapata').removeClass('current-garrapata');

		$(this).addClass('current-garrapata');
		$("#"+tab_id).addClass('current-garrapata');
	})

})

// modal vector pulga - tab interior
$(document).ready(function(){

	$('ul.tabs-pulga li').click(function(){
		var tab_id = $(this).attr('data-tab-pulga');

		$('ul.tabs-pulga li').removeClass('current-pulga');
		$('.tab-content-pulga').removeClass('current-pulga');

		$(this).addClass('current-pulga');
		$("#"+tab_id).addClass('current-pulga');
	})

})

// modal vector mosquito - tab interior
$(document).ready(function(){

	$('ul.tabs-mosquito li').click(function(){
		var tab_id = $(this).attr('data-tab-mosquito');

		$('ul.tabs-mosquito li').removeClass('current-mosquito');
		$('.tab-content-mosquito').removeClass('current-mosquito');

		$(this).addClass('current-mosquito');
		$("#"+tab_id).addClass('current-mosquito');
	})

})

// tab-interno-modal-garrapata
$(document).ready(function(){

	$('ul.tabs-interno-garrapata li').click(function(){
		var tab_id = $(this).attr('data-tab-interno-garrapata');

		$('ul.tabs-interno-garrapata li').removeClass('current-interno-garrapata');
		$('.tab-content-interno-garrapata').removeClass('current-interno-garrapata');

		$(this).addClass('current-interno-garrapata');
		$("#"+tab_id).addClass('current-interno-garrapata');
	})
})

// tab-interno-modal-garrapata
$(document).ready(function(){

	$('ul.tabs-interno-pulga li').click(function(){
		var tab_id = $(this).attr('data-tab-interno-pulga');

		$('ul.tabs-interno-pulga li').removeClass('current-interno-pulga');
		$('.tab-content-interno-pulga').removeClass('current-interno-pulga');

		$(this).addClass('current-interno-pulga');
		$("#"+tab_id).addClass('current-interno-pulga');
	})
})


/************************************
 *  acordeon beneficios responsive  *
 ************************************/ 
$(function() {
  'use strict';
  
  var selector = $('.ac-title');

  $('.accordion-wrapper').each(function() {
    if ($(this).find('.ac-pane').hasClass('active')) {
      $('.ac-pane.active .ac-content').css('display', 'block');
    }
  });
  
  selector.on('click', function(event) {
    event.preventDefault();

    // get the attr value
    var attr = selector.attr('data-accordion');
    var getparent = $(this).closest('.accordion-wrapper');

    if ( $(this).attr('data-accordion') == 'true' ) {

        if ($(this).next('.ac-content').is(':visible')) {
          return false;
        }else {

          getparent.find('.ac-content').slideUp();
          $(this).next('.ac-content').slideDown();
          getparent.find('.ac-pane').removeClass('active');
          $(this).parent().addClass('active');
        }

    } else {
        $(this).next('.ac-content').slideToggle();
        $(this).parent().toggleClass('active');
    }
    
  });
});

/*****************************
 *   accordeon beneficios    *
 *****************************/
$(function() {
  'use strict';
  
  var selector = $('.ac-title-beneficios');

  $('.accordion-wrapper').each(function() {
    if ($(this).find('.ac-pane-beneficios').hasClass('active')) {
      $('.ac-pane-beneficios.active .ac-content-beneficios').css('display', 'block');
    }
  });
  
  selector.on('click', function(event) {
    event.preventDefault();

    // get the attr value
    var attr = selector.attr('data-accordion-beneficios');
    var getparent = $(this).closest('.accordion-wrapper');

    if ( $(this).attr('data-accordion-beneficios') == 'true' ) {

        if ($(this).next('.ac-content-beneficios').is(':visible')) {
          return false;
        }else {

          getparent.find('.ac-content-beneficios').slideUp();
          $(this).next('.ac-content-beneficios').slideDown();
          getparent.find('.ac-pane-beneficios').removeClass('active');
          $(this).parent().addClass('active');
        }

    } else {
        $(this).next('.ac-content').slideToggle();
        $(this).parent().toggleClass('active');
    }
    
  });
});

/*****************************************
 *   accordeon panectocida responsive    *
 *****************************************/
$(function() {
  'use strict';
  
  var selector = $('.ac-title-panectocida');

  $('.accordion-wrapper').each(function() {
    if ($(this).find('.ac-pane-beneficios').hasClass('active')) {
      $('.ac-pane-panectocida.active .ac-content-panectocida').css('display', 'block');
    }
  });
  
  selector.on('click', function(event) {
    event.preventDefault();

    // get the attr value
    var attr = selector.attr('data-acordion-panectocida');
    var getparent = $(this).closest('.accordion-wrapper');

    if ( $(this).attr('data-acordion-panectocida') == 'true' ) {

        if ($(this).next('.ac-content-panectocida').is(':visible')) {
          return false;
        }else {

          getparent.find('.ac-content-panectocida').slideUp();
          $(this).next('.ac-content-panectocida').slideDown();
          getparent.find('.ac-pane-panectocida').removeClass('active');
          $(this).parent().addClass('active');
        }

    } else {
        $(this).next('.ac-content-panectocida').slideToggle();
        $(this).parent().toggleClass('active');
    }
    
  });
});


/*****************************************
 *   accordeon spray responsive    *
 *****************************************/
$(function() {
  'use strict';
  
  var selector = $('.ac-title-spray');

  $('.accordion-wrapper').each(function() {
    if ($(this).find('.ac-pane-spray').hasClass('active')) {
      $('.ac-pane-spray.active .ac-content-spray').css('display', 'block');
    }
  });
  
  selector.on('click', function(event) {
    event.preventDefault();

    // get the attr value
    var attr = selector.attr('data-accordion-spray');
    var getparent = $(this).closest('.accordion-wrapper');

    if ( $(this).attr('data-accordion-spray') == 'true' ) {

        if ($(this).next('.ac-content-spray').is(':visible')) {
          return false;
        }else {

          getparent.find('.ac-content-spray').slideUp();
          $(this).next('.ac-content-spray').slideDown();
          getparent.find('.ac-pane-spray').removeClass('active');
          $(this).parent().addClass('active');
        }

    } else {
        $(this).next('.ac-content-spray').slideToggle();
        $(this).parent().toggleClass('active');
    }
    
  });
});