import "./styles.css";

const onClickAdd = () => {
  const addText = document.getElementById("add-text");
  const inputText = addText.value;
  if (addText.value) {
    addText.value = "";

    const listItem = document.createElement("li");
    listItem.className = "list-item";
    listItem.innerText = inputText;

    document.getElementById("incomplete-list").appendChild(listItem);
  }
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
