// In the case of the DOM, document.documentElement serves as the root.

console.log(document.documentElement)

// Each DOM node object has a nodeType property, which contains a numeric code that identifies the type of node. Regular elements have the value 1, which is also defined as the constant property document.ELEMENT_NODE. Text nodes, representing a section of text in the document, have the value 3 (document.TEXT_NODE). Comments have the value 8 (document.COMMENT_NODE).

// 不存在的话是 null
// childNodes 
// childNodes[0] childNodes[1] childNodes[2]
//           previousSibling  nextSibling
// firstChild                  lastChild
// parentNode

function talksAbout(node, string) {
  // console.log(node)
  if (node.nodeType == document.ELEMENT_NODE) {
    for (let i = 0; i < node.childNodes.length; i++) {
      if (talksAbout(node.childNodes[i], string)) {
        return true
      }
    }
  } else if (node.nodeType == document.TEXT_NODE) {
    // console.log(node.nodeValue.indexOf(string) > -1)
    return node.nodeValue.indexOf(string) > -1
  }
}

console.log(talksAbout(document.body, 'book'))

let link = document.body.getElementsByTagName('a')[0]
console.log(link.href)

// The removeChild method removes the given child node from the document. To add a child, we can use appendChild, which puts it at the end of the list of children, or insertBefore, which inserts the node given as the first argument before the node given as the second argument.

// <p>One</p>
// <p>Two</p>
// <p>Three</p>

// <script>
//   var paragraphs = document.body.getElementsByTagName("p");
//   document.body.insertBefore(paragraphs[2], paragraphs[0]);
// </script>

// A node can exist in the document in only one place. Thus, inserting paragraph “Three” in front of paragraph “One” will first remove it from the end of the document and then insert it at the front, resulting in “Three/One/Two”. All operations that insert a node somewhere will, as a side effect, cause it to be removed from its current position (if it has one).

// The replaceChild method is used to replace a child node with another one. It takes as arguments two nodes: a new node and the node to be replaced. The replaced node must be a child of the element the method is called on. Note that both replaceChild and insertBefore expect the new node as their first argument.

// his involves not only removing the images but adding a new text node to replace them. For this, we use the document.createTextNode method.

// <p>The <img src="img/cat.png" alt="Cat"> in the
//   <img src="img/hat.png" alt="Hat">.</p>

// <p><button onclick="replaceImages()">Replace</button></p>

// <script>
//   function replaceImages() {
//     var images = document.body.getElementsByTagName("img");
//     for (var i = images.length - 1; i >= 0; i--) {
//       var image = images[i];
//       if (image.alt) {
//         var text = document.createTextNode(image.alt);
//         image.parentNode.replaceChild(text, image);
//       }
//     }
//   }
// </script>

// Given a string, createTextNode gives us a type 3 DOM node (a text node), which we can insert into the document to make it show up on the screen.

// The loop that goes over the images starts at the end of the list of nodes. This is necessary because the node list returned by a method like getElementsByTagName (or a property like childNodes) is live. That is, it is updated as the document changes. If we started from the front, removing the first image would cause the list to lose its first element so that the second time the loop repeats, where i is 1, it would stop because the length of the collection is now also 1.

// If you want a solid collection of nodes, as opposed to a live one, you can convert the collection to a real array by calling the array slice method on it.

var arrayish = {
  0: "one",
  1: "two",
  length: 2
};
var real = Array.prototype.slice.call(arrayish, 0);
real.forEach(function (elt) {
  console.log(elt);
});
// → one
//   two

// To create regular element nodes (type 1), you can use the document.createElement method. This method takes a tag name and returns a new empty node of the given type.

// The following example defines a utility elt, which creates an element node and treats the rest of its arguments as children to that node. This function is then used to add a simple attribution to a quote.

// <blockquote id="quote">
//   No book can ever be finished. While working on it we learn
//   just enough to find it immature the moment we turn away
//   from it.
// </blockquote>

// <script>
function elt(type) {
  var node = document.createElement(type);
  for (var i = 1; i < arguments.length; i++) {
    var child = arguments[i];
    if (typeof child == "string")
      child = document.createTextNode(child);
    node.appendChild(child);
  }
  return node;
}

document.getElementById("quote").appendChild(
  elt("footer", "—",
    elt("strong", "Karl Popper"),
    ", preface to the second editon of ",
    elt("em", "The Open Society and Its Enemies"),
    ", 1950"));
// </script>

// <p data-classified="secret">The launch code is 00000000.</p>
// <p data-classified="unclassified">I have two feet.</p>

// <script>
//   var paras = document.body.getElementsByTagName("p");
//   Array.prototype.forEach.call(paras, function(para) {
//     if (para.getAttribute("data-classified") == "secret")
//       para.parentNode.removeChild(para);
//   });
// </script>

// As a simple example, we’ll write a “syntax highlighter” that looks for <pre> tags (“preformatted”, used for code and similar plaintext) with a data-language attribute and crudely tries to highlight the keywords for that language.

// function highlightCode(node, keywords) {
//   var text = node.textContent;
//   node.textContent = ""; // Clear the node

//   var match, pos = 0;
//   while (match = keywords.exec(text)) {
//     var before = text.slice(pos, match.index);
//     node.appendChild(document.createTextNode(before));
//     var strong = document.createElement("strong");
//     strong.appendChild(document.createTextNode(match[0]));
//     node.appendChild(strong);
//     pos = keywords.lastIndex;
//   }
//   var after = text.slice(pos);
//   node.appendChild(document.createTextNode(after));
// }
