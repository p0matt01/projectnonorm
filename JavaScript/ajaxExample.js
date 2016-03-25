
$(document).ready(function () {
	var url="Data/users.json";
	$.getJSON(url, userInfoData, function (response) {
		var obj = JSON.parse(url);
		obj.push(userInfoData);
		url = JSON.stringify(obj);
	}).fail(function (jqXHR) {
		var errorMessage = "Oops! Something went wrong.";
		$('').html(errorMessage);
	});
});
