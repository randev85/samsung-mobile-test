$(document).on('click', '#price ul li', function() {
    if ( $(this).hasClass('active') ) {
        $(this).removeClass('active');
    } else {
        $('#price ul li').removeClass('active');
        $(this).addClass('active');    
    }
});//function that instructs the first section on price to show which element is active whilst the others are deactive.

$(document).on('click', '#spec ul li', function() {
    var selectedCount = $(this).siblings().filter('.active').length;
    if (selectedCount < 3 || $(this).hasClass('active')) {
      $(this).toggleClass('active');
    } else {
      console.log('only 3 can be selected');
    }   
  });//features section that only allow a maxium of 3 elements to be chosen at once

  $(document).on('click', '*', function(){
    if ($('#price ul li.active').length > 0 && $('#spec ul li.active').length > 2) {
        $("footer").css("display", "block");
      } else {
        $("footer").css("display", "none");
      }   
})//argument to allow footer to be displayed, only once 4 elements are chosen 

fetch("json/data.json")
    .then(function(resp){
        return resp.json();
    })
    .then(function(data){
        console.log(data);
    })//I started to fetch data from the json file, but I found it difficult to connect the button values to an api. I would have displayed the model name within a span in the footer and connected the href to the <a> tag