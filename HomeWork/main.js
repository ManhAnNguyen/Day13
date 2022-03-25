const messageBtn = document.querySelector(".message-btn");
const messageContainer = document.querySelector(".message-container");
const form = document.querySelector("#form");
const input = document.querySelector(".input");
const deleteAll = document.querySelector("#delete-all");
const messageContent = document.querySelector(".message-content");

const messageBot = [
  {
    user: "hello",
    bot: "lo lo",
  },
  {
    user: "bye",
    bot: "bye",
  },
  {
    user: "order",
    bot: "no",
  },
];

//add new message

messageBtn.addEventListener("click", () => {
  messageContainer.classList.toggle("appear");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = input.value;
  if (!value) {
    alert("Please enter message!");
    return;
  }

  const newMessage = document.createElement("span");
  newMessage.classList.add("message-user");
  newMessage.innerHTML = value;
  messageContent.appendChild(newMessage);
  messageBot.forEach((m) => {
    if (m.user === value.toLowerCase()) {
      const newBotMessage = document.createElement("span");
      newBotMessage.innerHTML = m.bot;
      newBotMessage.classList.add("bot-message");
      messageContent.appendChild(newBotMessage);
    }
  });
  input.value = "";
});

//delete action
deleteAll.addEventListener("click", () => {
  messageContent.innerHTML = "";
});
