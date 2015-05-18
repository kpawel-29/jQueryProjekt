(function($) {

	$.fn.validate = function (options) {
		return this.each(function() {
			var settings = $.extend({
				regexp : "uzupełnij pole"
			}, options);

			var defaultText = settings.text;
			$(this).val(defaultText);
			$(this).focus(function() {
				if ($(this).val() === defaultText) {
					$(this).val("");
				}
			});
			$(this).blur(function() {
				if ($(this).val() === "") {
					$(this).val(defaultText);
				}
			});
		
			/*
			 * http://stackoverflow.com/questions/2507030/email-validation-using-jquery
			 */
			function IsEmail(email) {
			  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
			  return regex.test(email);
			}

			/*var settings = $.extend({
					text : "Podaj imie"
				}, options);
*/
			function editSubmitBtn(value) {
				var btn = /*$(this).parent().parent().*/$("form").find("button[type='submit']");//var btn = $("button");
				btn.attr("disabled", value);
			}

			if(options.typ !== "email"){
				return;
			} else {
				$(this).keyup(function() {
				var email = $(this).val();
				if(!IsEmail(email)){
					$(this).css("border", "2px solid red");
					editSubmitBtn(true);
				} else {
					$(this).css("border", "");
					editSubmitBtn(false);
				}
			});
			}
			
		});
	};
}) (jQuery);