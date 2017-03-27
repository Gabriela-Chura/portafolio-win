
 function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
    
}

let progress = 0;
const fakeLoaderInterval = window.setInterval(function() {
  const $lp = $('.loading-progress');
  progress = progress + getRandomArbitrary(10, 25)
  $lp.css('transform', `translateX(${progress}%)`);
  if (progress >= 75) {
    window.clearInterval(fakeLoaderInterval);
    $lp.css('transform', 'translateX(100%)');
    setTimeout(() => $('.loading').css('transform', 'translateY(calc(100% + 10px))'), 400);
  }
}, getRandomArbitrary(100, 500));

(function() {
  $('#fullpage').fullpage({
      anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', '5thpage'],
      menu: '#menu',
      css3: true
  });
   
})();

var lista = $('#list-menu');
lista.children().click(clase);

function clase(){
	lista.children().removeClass('tab-current');
	$(this).addClass('tab-current'); 
	
}

var current = 1; 
var height = $('.roles').height();
var numberDivs = $('.roles').children().length; 
var first = $('.roles div:nth-child(1)'); 
setInterval(function() {
    var number = current * -height;
    first.css('margin-top', number + 'px');
    if (current === numberDivs) {
        first.css('margin-top', '0px');
        current = 1;
    } else current++;
}, 2000);



//current position
var pos = 0;
//number of slides
var totalSlides = $('#slider-wrap ul li').length;
//get the slide width
var sliderWidth = $('#slider-wrap').width();

$('.txt').html(function(i, html) {
  var chars = $.trim(html).split("");

  return '<span>' + chars.join('</span><span>') + '</span>';
});
	
$(".bar").each(function(){
  $(this).find(".bar-inner").animate({
    width: $(this).attr("data-width")
  },2000)
});

$('.nav-toggle').click(function() {
		$('.inner').toggleClass('open');
	});

