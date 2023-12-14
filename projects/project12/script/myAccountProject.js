// incase export default
import Action from "./classes/action.js";
import ActionManager from "./classes/actionManager.js";

// incase several exports
// import { Action } from "./classes/Action.js";


// let salary = new Action("income", "November salary", 10000);
// console.log(salary);
// let supermarket = new Action("expense", "Supermarket", 600);
// console.log(supermarket);

// window need to write when type="module" in html when call to function that write in html
window.addActionToManager = function () {
    // get data from form
    let type = document.getElementById('type').value;
    let description = document.getElementById('description').value;
    let amount = +document.getElementById('amount').value;

    // create the action object
    let action = new Action(type, description, amount);

    // add the action to actionManager
    manager.addAction(action);
    showActionsInTable();

    // reset the form
    document.getElementById('description').value = "";
    document.getElementById('amount').value = "";

    localStorage.setItem("accountDetails", JSON.stringify({ type: type, description: description, amount: amount }));
    JSON.parse(localStorage.getItem("accountDetails"));



};


window.deleteActionFromManagar = function (actionId) {
    if (confirm("Are you sure?")) {
        manager.deleteAction(actionId);
        showActionsInTable();
    }

};
window.editActionFromManagar = function (actionId) {
    let sum = prompt("Enter new amount: ");
    if (sum == null || sum == "") {
        alert("somethig went wrong")

    } else {
        manager.updateAction(actionId, +sum);
        showActionsInTable();

    }
}


function showActionsInTable() {
    document.getElementById('actions').innerHTML = "";
    for (let action of manager.actions) {
        document.getElementById('actions').innerHTML += `<tr class=${action.type == "income" ? "text-success" : "text-danger"}><td>${action.description}</td><td>${action.amount}</td><td><i style="cursor: pointer" class="fa-regular fa-pen-to-square" onclick="editActionFromManagar(${action.id})"></i></td><td><a onclick="deleteActionFromManagar(${action.id})"><i style="cursor: pointer" class="fa-solid fa-trash"></i></a></td></tr>`;
    }

}

let manager = new ActionManager();
manager.addAction(salary);
manager.addAction(supermarket);
console.log(manager.actions);
showActionsInTable();