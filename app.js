const broadcast = new BroadcastChannel("my-channel");

broadcast.addEventListener("message", (ev) => {
  insertMessageElem(ev.data, false);
});

document.addEventListener("messages-list", () => {});

const formElement = document.querySelector("form");
const inputElement = formElement.querySelector("input");

formElement.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!inputElement.value) return;

  broadcast.postMessage(inputElement.value);

  insertMessageElem(inputElement.value, true);

  inputElement.value = "";
});

const insertMessageElem = (messageText, byYou) => {
  const messageElem = document.createElement("p");
  messageElem.innerText = messageText;
  messageElem.classList.add("message", byYou && "by-you");

  document.querySelector(".messages-container").appendChild(messageElem);
};
