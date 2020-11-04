// this code sends a message to the mern stack bicycle example web shop app so it knows that it is beeing displayed in an
// iframe and therefore the scroll bars are to be hidden

setTimeout(() => {
  doStuff();
}, 1000);

const doStuff = () => {
  var iframe = document.querySelector("#web_shop");

  console.log(iframe);

  iframe.contentWindow.postMessage("iframe", "*");
};

// var iframe = document.querySelectorAll(".iframe_class");
// console.log(iframe);
// var elmnt = Array.from(iframe).map((iframe) =>
//   iframe.contentWindow.postMessage("iframe", "*")
// );
