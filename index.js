$(document).ready(function () {
	"use strict"
	$("form").find("button[type='submit']").attr("disabled", true);
	$("#name").validate({text: "Podaj imie", typ: "text"});
	$("#email").validate({text: "Podaj email", typ: "email"});

});