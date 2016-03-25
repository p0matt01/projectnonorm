/* ===========================
Ajax call to users.json file using jquery
=============================*/

$(document).ready(function () {
	var url="../Data/users.json";
	$.getJSON(url, function (response) {
		console.log(response)
	}).fail(function (jqXHR) {
		var errorMessage = "Oops! Something went wrong.";
		$('#fail').html(errorMessage);
	});
});