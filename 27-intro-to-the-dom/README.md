# Intro to the DOM

The DOM stands for Document Object Model. It's a tree structure compiled from HTML that determines the content on the page.

The DOM is made up of elements that you'd normally see in HTML like `h1`, `p`, and `img`. On any web page in a browser you can see a compiled DOM by opening up the inspect tool.

## Structure

The DOM is a tree which means it has a root (generally the `document`) and we can traverse down its various branches.

More often than not, the tree initially splits between the `head` which contains initially loaded elements like encoding tags, scripts, and css, and the `body` which contains all the visual elements of the DOM.

Every element has a single parent (with the exception of the root) and elements can have multiple children, which in turn have a single parent and can have multiple children.

So for example, a `div` might have the `body` as a parent and contain three children, an `h1`, a `p`, and an `img`. The `p` might in turn have several `a` children and considers the `div` its parent.

## Traversal and Selection

We can utilize Javascript to traverse or select elements out of the DOM. Selection is fairly straightforward with `.querySelector` and `.querySelectorAll`. By running `document.querySelector("p")` we can find the very first `p` element in the DOM.

We can also find elements through other types of selectors like `document.querySelector(".logo")` for a class and `document.querySelector("#navbar")` for an id.

If you'd instead like a list of all elements that fit a selector, you can utilize `document.querySelectorAll("p")` which would return every `p` element that it can find in a specialized collection similar to an array.

Once we've gotten an element by doing something like `const pTag = document.querySelector("p")` we can traverse quite easily. To get it's parent we can call `pTag.parentNode` or `pTag.parentElement` which returns its parent in the tree. To get its children in an HTMLCollection (similar to an array), we can run `pTag.children`.

## Altering the DOM

By selecting elements, we're able to change them. For example, once our `p` element has been selected, we can alter its style very simply: `pTag.style = "color: red;"`.

We can also change its inner text: `pTag.innerText = "Hello!"`.

We can also append new elements to the DOM:

```
const pTag = document.createElement("p")

pTag.innerText = "Hello!"

document.body.appendChild(pTag)
```

There are numerous ways to change the DOM and the best way to learn is to try things and experiment!
