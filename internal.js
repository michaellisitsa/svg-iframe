(function () {
  window.ccInterface = {
    render: function (methodArguments) {
      console.log("data given is: ", methodArguments);
    },
    arguments: function (methodArguments) {
      console.log("Arguments are: ", { c: "string", d: "string" });
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
