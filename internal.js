console.log("script inside iframe");
const targetWindow = window.opener;
console.log("targetWindow", targetWindow);
window.onmessage = function (e) {
  if (e.data == "hello") {
    alert("it works");
  }
};

// CUSTOM DISPATCH EVENTS
// https://stackoverflow.com/a/52781478
// https://caniuse.com/?search=dispatchEvent
// var data = { foo: "bar" };
// var event = new CustomEvent("myCustomEvent", { detail: data });
// window.parent.document.dispatchEvent(event);

// MESSAGECHANNEL
// https://github.com/mdn/dom-examples/blob/main/channel-messaging-basic/page2.html
// https://caniuse.com/?search=MessageChannel
const output = document.getElementsByClassName("output");

window.addEventListener("message", onMessage);

function onMessage(e) {
  output.innerHTML = e.data;
  // Use the transfered port to post a message back to the main frame
  e.ports[0].postMessage("MESSAGECHANNEL: Message back from the IFrame");
}

// POSTMESSAGE
window.addEventListener("message", function (event) {
  console.log("POSTMESSAGE: Message received from the parent: " + event.data); // Message received from parent
});
