const main = document.getElementById("main");
const ul = document.createElement("ul")
let request = new XMLHttpRequest();
main.appendChild(ul)

// div.appendChild(ul)
// div.appendChild(content)




function makeList(desc) {
  let li = document.createElement("li")
  li.innerText = desc
  ul.appendChild(li)
}


request.open('GET', "https://hplussport.com/api/products?qty=6&order=name")
request.onload = function() {
  let response = request.response;
  let parsedData = JSON.parse(response)
  console.log(parsedData)
  parsedData.forEach(item => makeList(item.description) )
  }

request.send();
