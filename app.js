var button = document.getElementById("button");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
var result = document.getElementById("result");
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
    result.innerHTML = (add(+input1.value, +input2.value)).toString();
});
