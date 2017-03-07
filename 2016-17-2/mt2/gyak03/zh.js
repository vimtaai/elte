// Segédfüggvények
function $(selector) {
  return document.querySelector(selector);
}
// Eseménykezelõk
let kepek = []
function clickButton(){
  let urlInput = $("#url").value;
  kepek.push(urlInput);
  $("#keplista").innerHTML=WholeList(kepek);
}

$('#btn').addEventListener('click', clickButton, false);

// HTML generátorok
function ListItemImage(url) {
  return `<li><img src = "${url}"></li>`;
  
}

function WholeList(kepekLista){
  return kepekLista.map(url => ListItemImage(url)).join('');
}