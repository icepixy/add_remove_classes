var main = function() {
  $('.nav li').click(function() {
    var category = $(this).attr('class');
		if (category == 'nav-consumer'){
      $('.thumbnail').removeClass('selected');
      alert('selected removed from thumb');
      $('.consumer').addClass('selected');
      alert('selected added to consumer');
    }
    else if (category=='nav-mobile'){
      $('.thumbnail').removeClass('selected');
      alert('selected remd from mobile thumb');
      $('.mobile').addClass('selected');
      alert('selected added to mobile mobile');
    }
    
       else if (category=='nav-commerce'){
      $('.commerce').addClass('selected');
      alert('selected added to commerce');
    }
        else if (category=='nav-enterprise'){
      $('.enterprise').addClass('selected');
      alert('selected added to enterprise');
    }
        else if (category=='nav-all'){
      $('.thumbnail').removeClass('selected');
      alert('selected removed from all thumb');
    }
    
    $('.nav li').removeClass('active');
    alert('active remd from li');
    $(this).addClass('active');
alert('active added to this');
    
    
    
  });
};
 
$(document).ready(main);