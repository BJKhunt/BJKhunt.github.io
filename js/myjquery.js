var nItems = 3;
var iCurrentSlide = 1;
var iNextSlide = 2;
var iSlideInterval = 2;
var looper = null;


$(document).ready(function(){

    $('#btn1').click(function(){
        var divElement = $(this).parents('.col-md-6').find('#clpse');
        
        if ($(divElement).is(":visible")) {
          divElement.hide("fast", "swing");
        } else {
          divElement.show("fast", "swing");
        }
    });


    $('.carousel > #item1').show();
  startSlider();

  var modal = document.getElementById("myModal");
  var btn = document.getElementById("myBtn");
  var span = document.getElementsByClassName("close")[0];
  var subbtn = document.getElementById("subbut");
  var l1 = document.getElementById("label1");

  btn.onclick = function() {
    modal.style.display = "block";
  }

  span.onclick = function() {
    modal.style.display = "none";
  }

  subbtn.onclick = function(){
    l1.style.display = "block";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }



});

function startSlider() {
  looper = setInterval(function() {
    if(iNextSlide > nItems) {
      iCurrentSlide = 1;
      iNextSlide = 1;
    }

    $('.carousel > div').hide();
    $('.carousel > #item' + iNextSlide).show();

    iCurrentSlide = iNextSlide;
    iNextSlide++;
  }, iSlideInterval * 1000);
}


function showSlide(isPrev) {
  window.clearInterval(looper);

  var iNewSlide = 0;

  if(isPrev) {
    iNewSlide = --iCurrentSlide;
  }
  else {
    iNewSlide = ++iCurrentSlide;
  }

  if(iNewSlide > nItems)
    iNewSlide = 1;
  else if(iNewSlide < 1)
    iNewSlide = nItems;

  $('.carousel > div').hide();
  $('.carousel > #item' + iNewSlide).show();

  iCurrentSlide = iNewSlide;
  iNextSlide = iNewSlide + 1;

  startSlider();
}
