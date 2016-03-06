$(document).ready( function() {
//	$("#annieimg").hide();
	/*var rand = Math.floor((Math.random()*10)+1);
	if (parseInt(rand) < 5) {
		//$("#annie-img").attr('src', 'img/annie_4.png');		
	} else {
//		$("#annie-img").fadeIn('slow');
	}*/
	 var today = Date.now();

    $("#forestallningen table time").each(function( index ){
      var act = Date.parse($(this).attr('datetime'));
      if (act < today) {
        $(this).closest('tr').addClass('done');
      }
    });
});
