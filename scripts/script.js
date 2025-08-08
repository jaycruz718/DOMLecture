// Get element By ID example
// let title = document.getElementById("titleBanner");
// Storing element node inside of a variable
// console.log(title);

// let listItems = document.getElementsByName("listItem");
// console.log(listItems);

// Grab element by any selector
// let firstQuery = document.querySelector('.subTitle');
// console.log(firstQuery);
// console.log(firstQuery.parentNode);
// console.log(firstQuery.childNodes);
// onsole.log(firstQuery.nextElementSibling);

// let listItem = document.getElementsByTagName("li");

// for (let el of listItems) {
    // console.log(el)
// }

// Query Selector All 
// let pars = document.querySelectorAll('p');
 
// console.log(pars);

// let list = document.getElementsByTagName('ul');
// console.log(list[0].childNodes[3]);

// let newListItem = document.createElement('li');
// let newTitle = document.createElement('h1');
// console.log(newListItem);

// list[0].appendChild(newListItem)

// let body = document.getElementsByName('Name');

// list[0].insertBefore(newListItem, list[0].childNodes[4]);

// list[0].removeChild(list[0].firstChild);

// let body = document.getElementsByName('body');
 
// console.log(body[0].childNodes[1]);

// body[0].removeChild(body[0].childNodes[1])

// newListItem.style.backgroundColor = 'green';
// newListItem.style.color ='white';

// if(body[0].childNodes[1].hasAttribute('name')) {
    // console.log('Attribute Exists');

// } else {
    // console.log('no attribute found');
// }

// body[0].removeChild(body[0].childNodes[1])

// body[0].classList.tuggle('change')

// let container = document.getElementById('mainContainer');

// console.log(container);

// let title = document.createElement('h1').textContent = `Jennifer's Application`

// console.log(title);

// container.appendChild(title);

// function createCard(title, content){
  // create a fragment
  /* let frag = document.createDocumentFragment();
  let div = document.createElement('div')

  let header = document.createElement('h1');
  header.textContent = title;

  let contentBody = document.createElement('p');
  contentBody.textContent = content;

  let hr = document.createElement('hr')

  div.classList.add('card')

  div.appendChild(header);
  div.appendChild(hr)
  div.appendChild(contentBody);
  frag.appendChild(div);
  
  body.appendChild(frag);

}

createCard('dylans card', 'lorem ipsum');
createCard('christinas card', 'lorem ipsum');
createCard('bandits card', 'lorem ipsum');
createCard('vincets card', 'lorem ipsum');
createCard('thumbs card', 'lorem ipsum');
createCard('zuke card', 'lorem ipsum');
createCard('dylans card', 'lorem ipsum');
createCard('dylans card', 'lorem ipsum');
createCard('dylans card', 'lorem ipsum');

createCard('dylans card', 'lorem ipsum');
createCard('dylans card', 'lorem ipsum');
createCard('dylans card', 'lorem ipsum');
createCard('dylans card', 'lorem ipsum');
createCard('dylans card', 'lorem ipsum'); */

function createCard(title, content){
    let temp = document.getElementById('temp');
    let clone = temp.content.cloneNode(true);

    const title = clone.querySelector('h3');
    const stuff = clone.querySelector('p');

    Headers.textContent = title;
    stuff.textContent = content;

    Body.appendChild(frag);
}