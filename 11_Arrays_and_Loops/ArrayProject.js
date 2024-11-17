const todoArray = [];
const addTodo = () => {
  const arrayValue = document.querySelector(".input-val");

  const name = arrayValue.value;
  todoArray.push(name);

  console.log(todoArray);
  //reset the value in text box
  arrayValue.value = "";
};
