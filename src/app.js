
let application = document.querySelector(".application");

let game_container = document.createElement("div");
game_container.classList.add("game-container");

let code_section = document.createElement("pre");
code_section.classList.add('code-section');
code_section.classList.add('javascript');

code_section.innerHTML = `
var count = 0;
var range = -1;

function setCount(_count) {
  count = _count;
}
function getCount() {
  return count;
}

function setRange(_range) {
  range = _range;
}

function getRange() {
  return range;
}
`;

let option_list = document.createElement("div");
option_list.classList.add("option-list");

for (let choice_count = 0; choice_count < 4; choice_count++) {
  let choice_button = document.createElement("button");
  choice_button.classList.add("choice-button");

  choice_button.textContent = `Choice ${choice_count+1}`;

  option_list.append(choice_button);

}


game_container.append(code_section);
game_container.append(option_list);

application.append(game_container);