let money = 0;
let currentOrder = [];
let myPizza = [];

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
    document.getElementById(screenId).classList.remove('hidden');
}

function startGame() {
    showScreen('game-screen');
    newCustomer();
}

function showSettings() { showScreen('settings-screen'); }
function showHome() { showScreen('home-screen'); }

function newCustomer() {
    myPizza = [];
    document.getElementById('toppings-on-pizza').innerText = "";
    
    const possibleOrders = [
        ['Sauce', 'Cheese'],
        ['Sauce', 'Cheese', 'Pepperoni'],
        ['Sauce', 'Pepperoni']
    ];
    
    currentOrder = possibleOrders[Math.floor(Math.random() * possibleOrders.length)];
    document.getElementById('customer-order').innerText = "Order: " + currentOrder.join(", ");
}

function addTopping(ing) {
    if (!myPizza.includes(ing)) {
        myPizza.push(ing);
        document.getElementById('toppings-on-pizza').innerText += ing + " ";
    }
}

function servePizza() {
    const isCorrect = currentOrder.every(ing => myPizza.includes(ing)) && 
                      currentOrder.length === myPizza.length;

    if (isCorrect) {
        money += 15;
        alert("Correct! +$15");
    } else {
        money -= 5;
        alert("Wrong ingredients! -$5");
    }
    
    document.getElementById('money').innerText = money;
    newCustomer();
}
