// Get element By ID example
let title = document.getElementById("titleBanner");
// Storing element node inside of a variable
// console.log(title);

let listItems = document.getElementsByName("listItem");
// console.log(listItems);

// Grab element by any selector
let firstQuery = document.querySelector('.subTitle');
// console.log(firstQuery);
// console.log(firstQuery.parentNode);
// console.log(firstQuery.childNodes);
// onsole.log(firstQuery.nextElementSibling);

let listItem = document.getElementsByTagName("li");

for (let el of listItems) {
    console.log(el)
}