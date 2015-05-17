(function($) {

	$.fn.validate = function () {
		/*
		 * http://stackoverflow.com/questions/2507030/email-validation-using-jquery
		 */
		function IsEmail(email) {
		  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		  return regex.test(email);
		};

		function editSubmitBtn(value) {
			var btn = $("button");
			btn.attr("disabled", value);
		};

		$(this).keyup(function() {
			var email = $(this).val();
			if(!IsEmail(email)){
				$(this).css("border", "2px solid red");
				editSubmitBtn(true);
			} else {
				$(this).css("border", "");
				editSubmitBtn(false);
			}
		})
	}
}) (jQuery);