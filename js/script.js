$(document).ready(function() {
  $('.post').addClass("hidden").viewportChecker({
      classToAdd: 'visible animated fadeInUp',
      offset: 100
  });
  $('.goTop').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 800);
    return false;
  });
  $('#mainSlider').bxSlider({
    pagerType: 'short',
    auto: true,
    onSlideBefore: function (currentSlideNumber, totalSlideQty, currentSlideHtmlObject) {
      $('#mainSlider .active-slide').removeClass('active-slide');
      $('#mainSlider>div').eq(currentSlideHtmlObject + 1).addClass('active-slide')
    },
    onSliderLoad: function () {
        $('#mainSlider>div').eq(1).addClass('active-slide')
    },
  });
  $('#mainSliderD').bxSlider({
    pagerType: 'short',
    auto: true,
    easing: 'ease-in',
    onSlideBefore: function (currentSlideNumber, totalSlideQty, currentSlideHtmlObject) {
      $('#mainSliderD .active-slide').removeClass('active-slide');
      $('#mainSliderD>div').eq(currentSlideHtmlObject + 2).addClass('active-slide')
    },
    onSliderLoad: function () {
        $('#mainSliderD>div').eq(2).addClass('active-slide')
    },
  });
  $('#reachSlider').bxSlider({
    touchEnabled: false,
    onSlideBefore: function (currentSlideNumber, totalSlideQty, currentSlideHtmlObject) {
      $('#reachSlider .active-slide').removeClass('active-slide');
      $('#reachSlider>div').eq(currentSlideHtmlObject + 1).addClass('active-slide')
    },
    onSliderLoad: function () {
        $('#reachSlider>div').eq(1).addClass('active-slide')
    },
  });
  $('#aboutSlider').bxSlider({
    mode: 'fade',
    pager: false,
    touchEnabled: false
  });
  $('#teamSlider').bxSlider({
    mode: 'fade',
    touchEnabled: false,
    controls: false,
    pagerCustom: '#bx-pager-custom'
  });
  $('#teamSlider .childSlider').bxSlider({
    touchEnabled: false,
    pager: false,
    minSlides: 1,
    maxSlides: 2,
    moveSlides: 1,
    infiniteLoop: false
  });
  $('.showFull').on( "click", function() {
    $('#reachSlider>div').removeClass('active');
    $(this).parent().parent().toggleClass('active');
    $('.reach .bx-controls').addClass('active');
    var tab = $(this).data("tab");
    $('#'+tab).toggleClass("showTeam");
    $('body').toggleClass("openModal");  
  });
  $('.reach .bx-pager').on( "click", function() {
    $('#reachSlider>div').removeClass('active');
    $('.reach .bx-controls').removeClass('active');
  });
  $('.reach .bx-controls-direction a.bx-prev').on( "click", function() {
    $('#reachSlider>div').removeClass('active');
    $('.reach .bx-controls').removeClass('active');
  });
  $('.reach .bx-controls-direction a.bx-next').on( "click", function() {
    $('#reachSlider>div').removeClass('active');
    $('.reach .bx-controls').removeClass('active');
  });
  $('.closeIt').on( "click", function() {
    $('#reachSlider>div').removeClass('active');
    $('.reach').removeClass('showTeam');
    $('body').removeClass("openModal");
    $('.reach .bx-controls').removeClass('active');
    $('.reachDescriptionMobile').removeClass('showTeam');
  });
  $('.explore').on( "click", function() {
    $('#reachSlider>div').removeClass('active');
    $('.reach').removeClass('showTeam');
    $('body').removeClass("openModal");
    $('.reachDescriptionMobile').removeClass('showTeam');
  });
  $(document).wrapFoBaron({
    root: '.reachDescription',
    barOnCls: 'baron'
  });
  $(document).wrapFoBaron({
    root: '.dateInfo',
    barOnCls: 'baron'
  });
  $(".roadmap .date a").on( "click", function() {
    var tab = $(this).data("tab");

    $(".roadmap .date a").removeClass("active");
    $(this).toggleClass("active");
    $('.dateInfo .scroller__content').fadeOut(200, function() {
        $(this).html( $('#'+tab).html() );
        $(this).fadeIn();
    });
  });
  $(".teamCard").on( "click", function() {
    var tab = $(this).data("tab");
    $('#'+tab).toggleClass("showTeam");
    $('body').toggleClass("openModal");
  });
  $('.menuBG').hover(function(){
    var tab = $(this).data("tab");
      $('#'+tab).toggleClass("active");
  });
  $('#galleryPoints li').hover(function(){
    var tab = $(this).data("tab");
    $('#galleryImg>div').removeClass("active");
      $('#'+tab).toggleClass("active");
  });
  $('#galleryPoints li').on( "click", function() {
    var text = $(this).data("text");
      $('#galleryPoints li').removeClass("active");
      $(this).toggleClass("active");
      $('#galleryText>div').removeClass("active");
      $('#galleryImg').addClass("active");
      $('#galleryPoints').addClass("active");
      $('#galleryText').addClass("active");
      $('#'+text).toggleClass("active");
  });
  $('.closeGallery').on( "click", function() {
    $('.gallery div').removeClass('active');
    $('#gallery1').toggleClass("active");
  });
  $('.collapse').collapse();
  $(function() {
    new PointsMap(document.querySelector('#interactive-1'), {
              maxOpacityOnActive : 0.3,
              maxDistance : 100, 
              viewportFactor : 9,
              activeOn : 30
          });
  });
  $(function() {            
    var target_block = $(".price");
    var blockStatus = true;                
    $(window).scroll(function() {                
        var scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height()));                    
        if(scrollEvent && blockStatus) {                    
            blockStatus = false;                     
            $({numberValue: 0}).animate({numberValue: 15}, {                        
                duration: 1500,
                easing: "linear",                            
                step: function(val) {                            
                    $(".price").html(Math.ceil(val));                            
                }                            
            });
            $({numberValue: 0}).animate({numberValue: 28}, {                        
                duration: 1500,
                easing: "linear",                            
                step: function(val) {                            
                    $(".price2").html(Math.ceil(val));                            
                }                            
            }); 
        }                    
    });         
  });
});