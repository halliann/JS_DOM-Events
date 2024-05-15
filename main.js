console.log("Script attached");
/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"
const changes1 = document.getElementById("node1"); 
changes1.textContent = 'I used the getElementById(“node1”) method to access this.';

// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */
const changes2 = document.getElementsByClassName("node2")[0];
changes2.textContent = 'I used the getElementByClassName("node2") method to access this.';

// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */
const changes3 = document.getElementsByTagName("h3");
for(let change of changes3) {
    change.textContent = 'I used the getElementByTagName("h3") method to access all of these';
};

/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this document.createElement() and put this text inside "This node was created using the createElement() method"
let p = document.createElement("p");
p.textContent = 'This node was created using the createElement() method';

// TODO: Append the created node to the parent node using the element.appendChild() method
let parent = document.querySelector("#parent");
parent.appendChild(p);

// TODO: Create a <a> element using this document.createElement() and put this text inside "I am a <a> tag"
let text = document.createElement("a");
text.textContent = 'I am a <a> tag'
parent.insertBefore(text, p);

// BONUS: Add a link href to the <a>
text.href = "https:truecoders.io";

// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method

/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node" using the replaceChild() method.
let exerciseReplace = document.querySelector("#exercise-container3");
let newChild = document.createElement("p");
let oldChild = document.querySelector("#N1");

newChild.textContent = "New Child Node";
exerciseReplace.replaceChild(newChild, oldChild);

// TODO: Remove the "New Child Node" using the remove() method or removeChild() method.
exerciseReplace.removeChild(newChild);

/*----------- Exercise #4: LIST ITEMS ----------- */
// Use the following array of values to generate a list on the DOM

let list = [ "apples", "bananas", "carrots", "dragon fruit", "eggplant", "fish", "grapes", "honey", "ice bag", "juice (any kind)" ];

// TODO: Create an unordered list element
let ul = document.createElement("ul");

// TODO: Iterate over the array values, and create a list item element for each
for(let lists of list) {
    let li = document.createElement("li");
    li.textContent = lists;
// TODO: Append the new list items to the unordered list element
    ul.appendChild(li);
};
// TODO: Append the unordered list to the `div#container` under exercise 4 
document.querySelector("#container").appendChild(ul);

/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message
// -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
// This div should be a 'modal' that covers the main content on the screen
// BONUS: The modal popup should be able to be closed. Refactor for this functionality

function show() {
    let modal = document.createElement("div");
    let modalCard = document.createElement("div");
    let h2 = document.createElement("h2");
    let p = document.createElement("p");
    let closeBtn = document.createElement("button");

    h2.textContent = "Header";
    p.textContent = "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user";
    closeBtn.textContent = 'X';

    modalCard.append(h2, p, closeBtn);
    modalCard.classList.add("modal-card");

    modal.id = "modal";
    modal.appendChild(modalCard);

    closeBtn.addEventListener('click', () => {
        document.body.removeChild(modal);
    });

    document.body.appendChild(modal);

};

let modalBtn = document.getElementById("btn");
modalBtn.addEventListener('click', show);