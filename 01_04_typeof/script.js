var request = new XMLHttpRequest();

request.open('GET', 'https://anapioficeandfire.com/api/characters/');

request.onload = function() {
	var response = request.response;
	console.log(response);
	console.log(typeof response);
	var jsonData = JSON.parse(response);
	console.log(jsonData.forEach(ele=>console.log(ele)));
	console.log(`The data type is ${typeof jsonData}`);
};

request.send();
