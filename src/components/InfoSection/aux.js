// this code sends a message to the mern stack bicycle example web shop app so it knows that it is beeing displayed in an
// iframe and therefore the scroll bars are to be hidden
// the send message process for some reason is quite unreliable --> the 2nd setTimeout increases the chance that the message is acutally send.

setTimeout(() => {
  doStuff();
}, 1000);

const doStuff = () => {
  var iframe = document.querySelector("Iframe");

  setTimeout(() => {
    iframe.contentWindow.postMessage("iframe", "*");
  }, 1000);
};
