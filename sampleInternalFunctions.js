window.ccInterface = {
  listInputs: function () {
    return { L: "number", My: "number", Weight: "array" };
  },
  render: function (callback, methodArguments) {
    const { L, My, Weight } = methodArguments;
    if ("everything is good") {
      callback(null, "all good");
    }
  },
};

// TODO: Have a method called list types which sends data back.

// TODO: Investigate whether any error inside code would cause
// the iframe to gracefully return an error back to the source.
// If not, we should build that in.
