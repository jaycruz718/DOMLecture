# Intro To the DOM

## Accessing DOM Elements
- document.getElementById(); - grab an element by ID
- document.getElementsByName(); - grab element(s) by name attribute. It ALWAYS returns a list (array like object)
- document.querySelector() - grab first element that matches css selector. ONLY 1 element. Can grab by simple selector as well as class, id, so on
- document.querySelectorAll(); - grabs all elements matching selector

## Dom Manipulation
 ### Creating DOM elements
 - document.createElement();

 ### Adding Elements to the DOM
 - parentNode.appendChild(nodeToAdd) - add element at END specified parent
 - parentNode.prepend(nodeToAdd) - add element to the beginning specified parent
 - parentNode.insertBefore(nodeToAdd, childNodeToInsertBefore) - add element to specified position in parent element


### Removing Elements from the DOM
- parentNode.removeChild(nodeTORemove);

### Replacing and ELement from the DOM
- parentNode.replaceChild(nodeToPut, nodeToReplace)


### Changing Node Content
- nodeName.textContent = `content`; - allows change of text in node
- nodeName.innerHTML = `content`; - allows addition of text AND HTML in node

## Changing DOM Elements Style
- nodeName.style.cssProperty = "cssPropertyValue";