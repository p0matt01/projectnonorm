
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
	if (xhr.readystate === 4) {
		var users = JSON.parse(xhr.responseText);
		console.log("users")
		var addUser = function (newUser) {
			users.newUser;
		};
	};
};
xhr.open('Get', 'Data/users.json');
xhr.send();

 