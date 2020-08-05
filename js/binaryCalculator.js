function action(e) {
    var btn = e.target || e.srcElement;
    initialTextElement.remove();
    screen.innerHTML+= btn.innerHTML;
}


const docFrag = document.createDocumentFragment();
for(let i=0; i<=9; i++) {
  const newElement = document.createElement("button");
  newElement.innerHTML = i;
  newElement.id = `btn${i}`;
  newElement.className = 'buttonClass';
  docFrag.appendChild(newElement); 
}
document.querySelector("#btns").appendChild(docFrag);

let screen = document.querySelector("#res");
let initialTextElement = document.createElement("span");
initialTextElement.textContent = "0";
screen.appendChild(initialTextElement);
let buttonClear = document.querySelector("#btnClr"); 
let buttonZero = document.querySelector("#btn0");
let buttonOne = document.querySelector("#btn1");
let buttonTwo = document.querySelector("#btn2");
let buttonThree = document.querySelector("#btn3");
let buttonFour = document.querySelector("#btn4");
let buttonFive = document.querySelector("#btn5");
let buttonSix = document.querySelector("#btn6");
let buttonSeven = document.querySelector("#btn7");
let buttonEight = document.querySelector("#btn8");
let buttonNine = document.querySelector("#btn9");
let buttonEqual = document.querySelector("#btnEql");
let buttonSum = document.querySelector("#btnSum");
let buttonSub = document.querySelector("#btnSub");
let buttonMul = document.querySelector("#btnMul");
let buttonDivision = document.querySelector("#btnDiv");

buttonZero.addEventListener("click", action);
buttonOne.addEventListener("click", action);
buttonTwo.addEventListener("click", action);
buttonThree.addEventListener("click", action);
buttonFour.addEventListener("click", action);
buttonFive.addEventListener("click", action);
buttonSix.addEventListener("click", action);
buttonSeven.addEventListener("click", action);
buttonEight.addEventListener("click", action);
buttonNine.addEventListener("click", action);
buttonSum.addEventListener("click", action);
buttonSub.addEventListener("click", action);
buttonMul.addEventListener("click", action);
buttonDivision.addEventListener("click", action);
buttonClear.addEventListener("click", function() {
    screen.innerHTML = "";
    screen.appendChild(initialTextElement);
});

buttonEqual.addEventListener("click", function(){
     let result = !Number.isInteger(eval(screen.innerHTML)) ? eval(screen.innerHTML).toPrecision(3) : eval(screen.innerHTML);
     screen.innerHTML = result;
});