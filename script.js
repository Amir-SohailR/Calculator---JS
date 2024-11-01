let input = document.querySelector("input")

function addValue(numbers){
    input.value += numbers;
}
function clearValue (){
    input.value = "";
}
function deleteElement (){
    input.value = input.value.slice(0, input.value.length-1)
}
function evaluateValue (){
    input.value = eval(input.value)
}