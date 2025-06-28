"use script";

const form = document.querySelector("form");
const heading = document.querySelector(".heading-val");
const description = document.querySelector(".description-val");
const output = document.querySelector(".text");
const mark = document.querySelectorAll(".text .mark");

let idVal = 0;

// function to create a to do element here
function appendToDo(title, desc, id) {
  if (!id || !title || !desc) {
    return;
  }

  // creating elements
  const parentDiv = document.createElement("div");
  const titleH1 = document.createElement("h1");
  const descH6 = document.createElement("h6");
  const button = document.createElement("button");

  // styling
  parentDiv.style.margin = "10px 0px";
  parentDiv.style.textAlign = "center";
  descH6.style.color = "#bebebe";
  button.style.fontSize = "0.60rem";
  button.style.padding = "6px 8px";
  button.style.margin = "6px";
  button.style.borderRadius = "12px";

  // setting some of the attributes
  parentDiv.setAttribute("id", `todo${id}`);
  button.setAttribute("class", "mark");
  button.addEventListener("click", deleteToDo);

  // setting innerHTML
  titleH1.innerHTML = `${title}`;
  descH6.innerHTML = `${desc}`;
  button.innerHTML = "Mark as done";

  // copying it into the local storage
  if (!localStorage.getItem(parentDiv.id)) {
    localStorage.setItem(
      parentDiv.id,
      JSON.stringify({
        titleVal: title,
        descVal: desc,
        idVal: id,
      })
    );
  }

  parentDiv.appendChild(titleH1);
  parentDiv.appendChild(descH6);
  parentDiv.appendChild(button);

  output.appendChild(parentDiv);
}

// function to delete a to do element
function deleteToDo(e) {
  const getParent = e.target.parentNode;
  getParent.remove();

  // delete also from the localStorage
  localStorage.removeItem(getParent.id);
}

// fetch from the localStorage
if (localStorage.length) {
  for (const value of Object.values(localStorage)) {
    const obj = JSON.parse(value);
    appendToDo(obj.titleVal, obj.descVal, obj.idVal);
    idVal = Math.max(idVal, obj.idVal);
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  appendToDo(heading.value, description.value, ++idVal);
  heading.value = description.value = "";
});
