console.log("script inside iframe");
// const targetWindow = window.opener;
// console.log("targetWindow", targetWindow);
window.onmessage = function (e) {
  if (e.data == "hello") {
    alert("it works");
  }
};

// POSTMESSAGE
window.addEventListener("message", function (event) {
  console.log("POSTMESSAGE: Message received from the parent: " + event.data); // Message received from parent
});
