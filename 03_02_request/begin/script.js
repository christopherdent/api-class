const main = document.getElementById("main");
const div = document.createElement("div");
const content = document.createElement("p")
content.innerHTML = "HI"
div.appendChild(content)
main.appendChild(div)


let request = new XMLHttpRequest();

request.open('GET', "https://hplussport.com/api/products/order/name")
request.onload = function() {
  let response = request.response;
  let parsedData = JSON.parse(response)
  console.log(parsedData)
  content.innerHTML = parsedData[1].name 

}

request.send();
