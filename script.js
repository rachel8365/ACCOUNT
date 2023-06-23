import Action from "./claasses/Action.js";
import ActionsManager from "./claasses/ActionManagger.js";

let manager = new ActionsManager();
let food = new Action("expense", "fruits", 200);
manager.addAction(food);
manager.addAction(new Action("income", "salary", 10000));
console.log(manager.actions);
// manager.deleteAction(food.id);
// console.log(manager.actions);
manager.updateAction(food.id, 350);
manager.calcBalance();
console.log(manager.balance);

// a function that shows all the actions according to manager.actions array
function showActionsInTable() {
    document.getElementById("actions").innerHTML = "";
    for (let action of manager.actions) {
        document.getElementById("actions").innerHTML += `<tr class=${action.type == "income" ? "text-success" : "text-danger"}> <td>${action.description} </td> <td>${action.amount} </td><td><i class="fa-regular fa-pen-to-square" onclick="updateAction(${action.id})"></i> </td> <td><i class="fa-solid fa-trash-can" onclick="deleteAction(${action.id})"></i> </td></tr>`;
    }
}

showActionsInTable();

window.addNewAction = () => {
    // take the form values
    let type = document.getElementById("type").value;
    let description = document.getElementById("description").value;
    let amount = +document.getElementById("amount").value;

    // create action object
    let newAction = new Action(type, description, amount);

    // add newAction to manager actions array
    manager.addAction(newAction);
    console.log(manager.actions);
    document.getElementById("type").value = "income";
    document.getElementById("description").value = "";
    document.getElementById("amount").value = "";
    showActionsInTable();
};

window.updateAction = (id) => {
    //promt
    let newAmount = prompt("Enter New Amount:");
    if (newAmount == null || newAmount == "" || newAmount != +newAmount) alert("Somthing Wrong!")
    else {
        //update action
        manager.updateAction(id, +newAmount);
        showActionsInTable();
    }
};

window.deleteAction = (id) => {
    if (confirm("Are You Sure?")) {
        manager.deleteAction(id);
        showActionsInTable();
    };


}

