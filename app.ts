const button = document.getElementById("button")! as HTMLButtonElement;
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;
const result = document.getElementById("result")! as HTMLParagraphElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}

button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
    result.innerHTML = (add(+input1.value, +input2.value)).toString();
});