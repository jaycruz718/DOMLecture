# Intro to DOM

## Accessubg DOM Elements
- document.getElementById(): grab an element by ID
- document.getElementsByName(): grab an element by NAME
- document.querySelector(): grab first element that matches the CSS selector. ONly 1 element. Can grab by simple selector as well as class ID, so on
- document.querySelectorAll(): grabs all elements matching selector

## Dom Manipulation
- document.createElement();

### Adding ELements to the DOM
- parentNode.appendChild(nodeToAdd): add element at END specified parent
- parentNode.prepend(nodeToAdd): add element to the beginning of specified parent
- parentNode.insertBefore(nodeToAdd, childNodeToInsertBefore): add element to specified position in parent element

### Removing ELements from the DOM
- parentNode.replaceChild(nodeToPut, nodeToReplace)

### Changing Node Content
- nodeName.textContent: allows change of 
- nodeName.innerHTML: used to retrieve or set content as HTML


