$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
});
$(function(){ $("#current-year").html(new Date().getFullYear()); });
//shrink on scroll
function init() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 10,
            header = document.querySelector("header");
        if (distanceY > shrinkOn && !$("header").hasClass("stay-smaller")) {
             $("header").addClass("smaller");
        } else {
            if ($("header").hasClass("smaller") && !$("header").hasClass("stay-smaller")) {
                $("header").removeClass("smaller");
            }
        }
    });
}
window.onload = init();

//accessibility controls for pausing video
var vid = document.getElementById("bgvid"),
pauseButton = document.getElementById("vidpause");
function vidFade() {
    vid.classList.add("stopfade");
}
vid.addEventListener('ended', function() {
    // only functional if "loop" is removed 
     vid.pause();
	// to capture IE10
	vidFade();
});
pauseButton.addEventListener("click", function() {
    vid.classList.toggle("stopfade");
	if (vid.paused) {
vid.play();
		pauseButton.innerHTML = "<span class=\"glyphicon glyphicon-play\" aria-label=\"Pause\">";
	} else {
        vid.pause();
        pauseButton.innerHTML = "<span class=\"glyphicon glyphicon-pause\" aria-label=\"Play\">";
	}
})