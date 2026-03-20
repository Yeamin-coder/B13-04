

## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer:With getElementById you can find element by specific ID , With getElementByClass you can find all elements by class , its a mordan and flexible way to select class,tag,id etc like css


### 2. How do you create and insert a new element into the DOM?
Answer: 1-step: to create element by document.createElement()
2-step: add content and style 
3-step: appendChild()/appendParent()  to insert new alement


### 3. What is Event Bubbling? And how does it work?

Answer: event Bubbling is a process in which a event happend in html element like "click" then that event dosen't only limited to one element,then that move towerds the parent elements  until the it reach to the window object.
event bubbling works in 3 step , mainly bubbling happens in last step
1- capturing phase: the event starts to move down form the top of the window to the terget elenent
2- target phase: the event reach the main element
3- bubbling phase: again the event starts to climbs to the parents


### 4. What is Event Delegation in JavaScript? Why is it useful?

Answer: event delegation is without adding separate event listeners to each child element,add the eventlistener in the common parent element.

### 5. What is the difference between preventDefault() and stopPropagation() methods?

Answer: In simple terms preventDefault() stops the default behavior of a browser  and stopPropagation() stops the bubbling of events



