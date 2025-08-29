1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
Answer: 
       getElementById --- It is used to select an element by using the elements id. Only one  element is selected.
       getElementsByClassName --- It is used to select elements by using the elements class.  All elements are selected containing this class.
       querySelector --- It is used to select an element by using the elements class.  First element is  selected containing this class.
       querySelectorAll --- It is used to select elements by using the elements class.  All elements are selected containing this class.

2. How do you **create and insert a new element into the DOM**?
Answer: Firstly we need to create an element then set the inner text or inner html of this element.After this the child is append into the parent. An example is given below.
        const newDiv = document.createElement('div');

        newDiv.innerHTML = `
          <div>
              <h1>I am heading</h1>
              <p>I am paragraph</p>
          </div>
      `;
        document.body.appendChild(newDiv);

3. What is **Event Bubbling** and how does it work?
Answer: It is process where an event is starts from the target element and then bubbles up through  its parents in the DOM hierarchy. 
Now I takes an example below to describe this process
<body id="body" class="border-2 border-red-600 h-30 w-30 flex justify-center items-center">
    <div id="div" class="border-2 border-red-600 h-20 w-20 flex justify-center items-center">
        <button id="btn">Click</button>
    </div>
    <script>
        document.getElementById("btn").addEventListener("click", function(){
           console.log("Clicked the button");
        });
        document.getElementById("div").addEventListener("click", function(){
           console.log("Clicked the div");
        });
        document.getElementById("body").addEventListener("click", function(){
           console.log("Clicked the body");
        });
    </script>
</body>

a. When click the button then output comes all three because it takes both parents div and body.
Clicked the button
Clicked the div
Clicked the body
b. When click the div then output comes two because it takes it's parents body.
Clicked the div
Clicked the body
c. when click the body then output comes one because it has no parents.
Clicked the div

4. What is **Event Delegation** in JavaScript? Why is it useful?
Answer: It is a process where we do not add event listener for individual child of a parent element. Instead of individual child we add an event listener in parent element.
It reduce the code because one event listener is replace the individual each child's event listener that's why it is useful.
It is also useful because child elements are add dynamically without adding event listener.

5. What is the difference between **preventDefault() and stopPropagation()** methods?
Answer : preventDefault() --- It is used to stop the default action of an element. Form element is reload automatically to stop this reloading it is used. 
stopPropagation() --- It is used to stop the bubbling of an child element. If we want to stop the event in child element then it is used in the child element. 

