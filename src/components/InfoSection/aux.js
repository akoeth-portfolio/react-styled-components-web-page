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

//No fixed navbar on width 598px - 768px
document.addEventListener("scroll", () => removeNavbar());

const removeNavbar = () => {
  if (window.screen.width >= 598 && window.screen.width <= 768) {
    window.pageYOffset > 10
      ? document.querySelector("#nav").classList.add("remove-navbar")
      : document.querySelector("#nav").classList.remove("remove-navbar");
  }
};
