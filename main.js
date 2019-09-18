$(document).on('click', '#price ul li', function() {
    if ( $(this).hasClass('active') ) {
        $(this).removeClass('active');
    } else {
        $('#price ul li').removeClass('active');
        $(this).addClass('active');    
    }
});
var selectedCount = $('#spec ul li').siblings().filter('.active').length;

$(document).on('click', '#spec ul li', function() {
    
    if (selectedCount < 3 || $(this).hasClass('active')) {
      $(this).toggleClass('active');
    } else {
      console.log('only 3 can be selected');
    }   
  });

  $(document).on('click', '*', function(){
    if ($('#price ul li.active').length > 0 && $('#spec ul li.active').length > 2) {
        $("footer").css("display", "block");
      } else {
        $("footer").css("display", "none");
      }   
})

fetch("json/data.json")
    .then(function(resp){
        return resp.json();
    })
    .then(function(data){
        console.log(data);
    })