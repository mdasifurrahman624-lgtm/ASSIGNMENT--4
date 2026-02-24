

1. The Difference between them :

getElementById → select single element by id

getElementsByClassName → select multiple elements 

querySelector → select first matching

querySelectorAll → select all matching 


2. Create and insert element

const div = document.createElement("div");
div.innerText = "Hello";
document.body.appendChild(div);


3. Event Bubbling means an event starts from the target element and moves up to its parent elements.

how it works with example

document.getElementById("child").addEventListener("click", () => {
  console.log("Child clicked");
});

document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked");
});

document.getElementById("grandparent").addEventListener("click", () => {
  console.log("Grandparent clicked");
});


4. Event Delegation means adding an event listener to a parent element instead of multiple child elements.  It uses event bubbling.

Why useful because 

Improves performance (less event listeners)
Works for dynamic elements (added later)
Cleaner code


5. Difference between preventDefault() and stopPropagation()  

preventDefault() :   Stops default browser behavior
stopPropagation() :	Stops event bubbling