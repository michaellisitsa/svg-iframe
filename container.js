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

// POSTMESSAGE
// https://javascriptbit.com/transfer-data-between-parent-window-and-iframe-postmessage-api/

const output = document.querySelector(".output");
const iframe = document.getElementById("difDomain");
const iframe2 = document.getElementById("difDomain2");

// Wait for the iframe to load
iframe.addEventListener("load", onLoad);
iframe2.addEventListener("load", onLoad2);

function onLoad() {
  iframe.contentWindow.postMessage(
    "MESSAGECHANNEL: Hello to iframe from the main page!",
    "*"
  );
}

function onLoad2() {
  iframe2.contentWindow.postMessage(
    "MESSAGECHANNEL: Hello to iframe2 from the main page!",
    "*"
  );
}
