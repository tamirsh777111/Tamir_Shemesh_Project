export default class ActionsManager {
    constructor() {
        this.balance = 0;
        this.actions = [];
    }
    addAction(action) {
        this.actions.push(action);
        this.calcBalance();
    }
    deleteAction(actionId) {
        // find the relevent index
        let indexToDelete = this.actions.findIndex(
            (action) => action.id == actionId);
        // delete with splice
        this.actions.splice(indexToDelete, 1);
        this.calcBalance()
    }

    updateAction(actionId, newAmount) {
        let indexToUpdate = this.actions.findIndex(
            (action) => action.id == actionId);
        // update in the array
        this.actions[indexToUpdate].amount = this.actions[indexToUpdate].type == "income" ? newAmount : -newAmount;
        this.calcBalance()

    }

    calcBalance() {
        this.balance = 0;
        for (let action of this.actions) {
            this.balance += action.amount;
        }
        document.getElementById("balance").innerText = `Balance: ${this.balance}`;
    }
}