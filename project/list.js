let todos = [];

let input = prompt("What would you like to do?");

while (input !== "quit") {
    if (input === "list") {
        console.log("*****");
        todos.forEach(function (todo, i) {
            console.log(i + ':' + todo);
        });
        console.log("*****");
    }
    if (input === "new") {
        let newTodo = prompt("Enter new todo");
        todos.push(newTodo);
    }
    if (input === "delete") {
        let index = prompt("Enter index of todo to delete");
        todos.splice(index, 1);
    }
    input = prompt("What would you like to do?");
}

console.log("OK, YOU QUIT THE APP")



function isUniforms(arr) {
    let firstItem = arr[0];
    for (let index = 1; index < arr.length; index++) {

        if (arr[index] !== firstItem) {
            return false;
        }
        return true;
    }
}

function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];

    }
    return sum;
}

function addArray(arr) {
    let total = 0;
    arr.forEach(function (element) {
        total += element;
    });
    return total;
}