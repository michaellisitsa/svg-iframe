// sudo vi /etc/hosts
// Add override for 127.0.0.1 to different subdomain
console.log("container loaded");

var svgNS = "http://www.w3.org/2000/svg";

// Works in browser console, but not in script.
// See thread about using gulp to possibly override behaviour
// https://stackoverflow.com/a/46516718
const svg = document
  .getElementById("difDomain")
  .contentWindow.document.getElementById("svg");
console.log("svg", svg);

// CUSTOM DISPATCH EVENTS
// https://stackoverflow.com/a/52781478
// https://caniuse.com/?search=dispatchEvent
// window.document.addEventListener("myCustomEvent", handleEvent, false);
// function handleEvent(e) {
//   console.log("received message from iframe", e.detail); // outputs: {foo: 'bar'}
// }

// MESSAGECHANNEL
// https://developer.mozilla.org/en-US/docs/Web/API/Channel_Messaging_API
// https://github.com/mdn/dom-examples/blob/main/channel-messaging-basic/index.html
// https://mdn.github.io/dom-examples/channel-messaging-multimessage/
// https://caniuse.com/?search=MessageChannel
const channel = new MessageChannel();
const output = document.querySelector(".output");
const iframe = document.getElementById("difDomain");
const iframe2 = document.getElementById("difDomain2");

// Wait for the iframe to load
iframe.addEventListener("load", onLoad);
iframe2.addEventListener("load", onLoad);

function onLoad() {
  // Listen for messages on port1
  channel.port1.onmessage = onMessage;
  // Transfer port2 to the iframe
  const expensiveComputation = "MESSAGECHANNEL: Hello from the main page!";
  iframe.contentWindow.postMessage(
    "MESSAGECHANNEL: Hello from the main page!",
    "*",
    [channel.port2]
  );
  iframe2.contentWindow.postMessage(
    "MESSAGECHANNEL: Hello from the main page!",
    "*",
    [channel.port2]
  );
}

// Handle messages received on port1
function onMessage(e) {
  output.innerHTML = e.data;
}

// POSTMESSAGE
// https://javascriptbit.com/transfer-data-between-parent-window-and-iframe-postmessage-api/

function sendMessage() {
  const message = "PostMessage: Sending to Iframe";
  const iframe = document.getElementById("difDomain");
  iframe.contentWindow.postMessage(message, "*");
}

button.addEventListener("load", sendMessage);
