window.addEventListener("load", () => {
  const form = document.querySelector("#form-submit");
  const input = document.querySelector(".input");
  const todoListContainer = document.querySelector(".todolist-container");

  const show = () => {
    const toDoData = localStorage.getItem("todo")
      ? JSON.parse(localStorage.getItem("todo"))
      : [];
  };
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    //     const value = input.value;
    //     alert(value);
    //     const todoItem = document.createElement("div");
    //     todoItem.innerHTML = `
    //     <span>${value}</span>
    //     <button>Delete</button>
    //    `;
    //     todoListContainer.appendChild(todoItem);
    //     data.push(value);
    //     localStorage.setItem("todo", JSON.stringify(data));
  });
});
