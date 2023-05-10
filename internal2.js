(function () {
  window.ccInterface = {
    render: function (methodArguments) {
      console.log("data given is: ", methodArguments);
    },
    arguments: function (methodArguments) {
      console.log("Arguments are: ", { a: "string", b: "number" });
    },
  };
})();

// POSTMESSAGE
window.addEventListener("message", function (event) {
  // console.log("POSTMESSAGE: Message received from the parent: " + event.data); // Message received from parent
  // TODO: Why don't need to stringify.
  let methodArguments;
  try {
    methodArguments = JSON.parse(event.data);
  } catch (e) {
    console.error("Could not parse json", e);
  }
  const method = methodArguments.method;
  const methodCallback = window.ccInterface[method];

  if (method === "getCapabilities") {
    console.log("Available methods", Object.keys(window.ccInterface));
  } else if (method === "render" || method === "arguments") {
    methodCallback.apply(null, methodArguments);
  } else {
    console.error("Method not found", e);
  }
});

// window.onload = function () {
var svgNS = "http://www.w3.org/2000/svg";

function draw(node, args = { a: 1, b: 3 }, options = {}) {
  // Need to use svg namespace
  function generateRect(X, Y, width, height, style) {
    const newRectEl = document.createElementNS(svgNS, "rect");
    newRectEl.setAttribute("x", X);
    newRectEl.setAttribute("y", Y);
    newRectEl.setAttribute("width", width);
    newRectEl.setAttribute("height", height);
    newRectEl.setAttribute("style", style);

    return newRectEl;
  }

  for (let i = 0; i < args.b; i++) {
    node.appendChild(
      generateRect(
        0,
        0,
        100 + 100 * i,
        100,
        "fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)"
      )
    );
  }
  return node;
}

// const svgNode = document.getElementById("svg");
// Define namespace

// SVGs are namespaced in HTML5, and need to add a namespace to all elements inside them
// TODO: Research use of fragments, which are not ignored if not in the namespace
//       see Cl 4.8.16 https://www.w3.org/Graphics/SVG/WG/wiki/SVG_in_HTML5_Notes
var canvasSVG = document.createElementNS(svgNS, "svg");

canvasSVG.setAttribute("width", 200);
canvasSVG.setAttribute("height", 200);
canvasSVG.setAttribute("style", "display:block");
draw(canvasSVG, (args = { a: 1, b: 2 }));
document.body.appendChild(canvasSVG);
// };
