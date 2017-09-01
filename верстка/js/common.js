$(function(){
		setInterval("rotateImages()",3000);
	});

	function rotateImages(){
		var oCurPhoto = $("#photoShow div.current");
		var oNxtPhoto = oCurPhoto.next();
		if (oNxtPhoto.length == 0)
			oNxtPhoto=$("#photoShow div:first");

			oCurPhoto.removeClass('current').addClass('previous');
			oNxtPhoto.css({opacity:0.0}).addClass('current').animate({opacity:1.0},1000,
				function(){
					oCurPhoto.removeClass("previous");
				});
		
	};
	
 
$(document).ready(function(){
	$(".accordeon_list dd").hide().prev().click(function() {
		$(".accordeon_list dd").not(this).slideUp();
		$(this).next().not(":visible").slideDown();
		


	
});
	
});	
 
 
$(function() {

    
    var width = 335;
    var animationSpeed = 1000;
    var pause = 3000;
    var currentSlide = 1;

   
    var $slider = $('#slider');
    var $slideContainer = $('.slides', $slider);
    var $slides = $('.slide', $slider);

    var interval;

    function startSlider() {
        interval = setInterval(function() {
            $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
                if (++currentSlide === $slides.length) {
                    currentSlide = 1;
                    $slideContainer.css('margin-left', 0);
                }
            });
        }, pause);
    }
    function pauseSlider() {
        clearInterval(interval);
    }

    $slideContainer
        .on('mouseenter', pauseSlider)
        .on('mouseleave', startSlider);

    startSlider();


});
$(function(){
    $(".calculator").hide();
});

$(function(){
        $('.slides .slide3').click(function(){
            $('.calculator').toggle();
            
        });
    });
$(function(){
    $(".button2").click(function(){
        $(".calculator").hide();
    });
});

function calculate_form() {

if(!document.forms.calculator1.length.value) {
    alert("Заполните поле - Длинна помещения");
    document.forms.calculator1.length.focus();
    return false;}
if (!document.forms.calculator1.width.value) {
    alert("Заполните поле - Ширина помещения");
    document.forms.calculator1.width.focus();
    return false;}
if(!document.forms.calculator1.height.value) {
    alert("Заполните поле - Высота помещения");
    document.forms.calculator1.height.focus();
    return false;}
/*
if(!document.forms.calculator1.height_work.value) {
    alert("Заполните поле - Высота расчетной поверхности");
    document.forms.calculator1.height_work.focus();
    return false;}
*/    
if(!document.forms.calculator1.k_svet.value) {
    alert("Заполните поле - Требуемая освещенность в помещении");
    document.forms.calculator1.k_svet.focus();
    return false;}
var a,b,c,d,e,f,g,h;
a = parseFloat(document.forms.calculator1.length.value.replace(',', '.'));
b = parseFloat(document.forms.calculator1.width.value.replace(',', '.'));
c = parseFloat(document.forms.calculator1.height.value.replace(',', '.'));
//d = parseInt(document.forms.calculator1.k_otrajenie.value);
d = 1;
e = parseInt(document.forms.calculator1.type_lamp.value);
f = parseInt(document.forms.calculator1.k_zapasa.value);
//g = parseFloat(document.forms.calculator1.height_work.value.replace(',', '.'));
g = 1;
h = parseInt(document.forms.calculator1.k_svet.value);

if (f==1) {f=1.39;}
if (f==2) {f=1.7;}

var subfi=(c-g);
if (subfi<=0) {subfi=1;}
var fi=parseFloat((a*b)/(subfi*(a+b)));

if (fi>=0   && fi<0.6) {fi=0.6;}
if (fi>=0.6 && fi<0.8) {fi=0.8;}
if (fi>=0.8 && fi<1.0) {fi=1;}
if (fi>=1.0 && fi<1.7) {fi=1.25;}
if (fi>=1.7 && fi<2.2) {fi=2;}
if (fi>=2.2 && fi<2.7) {fi=2.5;}
if (fi>=2.7 && fi<3.5) {fi=3;}
if (fi>=3.5 && fi<4.5) {fi=4;}
if (fi>=4.5 && fi<=5.5){fi=5;}
if (fi>5.5)            {fi=5;}

var u=0;
if (d==1) {
    if (fi==0.6 ) {u=37;}
    if (fi==0.8 ) {u=44;}
    if (fi==1   ) {u=49;}
    if (fi==1.25) {u=54;}
    if (fi==2   ) {u=61;}
    if (fi==2.5 ) {u=64;}
    if (fi==3   ) {u=67;}
    if (fi==4   ) {u=69;}
    if (fi==5   ) {u=70;}
    }
if (d==2) {
    if (fi==0.6 ) {u=31;}
    if (fi==0.8 ) {u=38;}
    if (fi==1   ) {u=43;}
    if (fi==1.25) {u=48;}
    if (fi==2   ) {u=55;}
    if (fi==2.5 ) {u=58;}
    if (fi==3   ) {u=60;}
    if (fi==4   ) {u=62;}
    if (fi==5   ) {u=64;}
    }
n=1;
var ns=(h*100*a*b*f)/(u*n*e);

document.forms.calculator1.result.value=Math.round(ns);

var w; //36 40 ватность лампы, если будут другие лампы, или динамика, нужно будет переделать на динамику это место

if (e==3000) w = 36; 
if (e==3200) w = 40; 

var ec = Math.round(ns) * w * 3.5 / 1000 * 8 * 365;

document.forms.calculator1.economia.value=space(Math.round(ec));

}