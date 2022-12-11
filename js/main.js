$(function() {
  $.scrollify({  
		section:".panel",
    scrollbars:false,
    afterRender:function() {
      $(".logo-items a").on("click",function() {
        $.scrollify.move("#home");
      });
    }
  });
});
