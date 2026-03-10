

let coins = 0;

function addCoins() {
    coins += 10;
    
    
    document.getElementById('coin-count').innerText = coins;

    
    
}

function performSearch() {
    let currentCoins = parseInt(localStorage.getItem('userCoins')) || 0;
    let newTotal = currentCoins + 10;
    
    localStorage.setItem('userCoins', newTotal);
    document.getElementById('coin-display').innerText = newTotal;
    updatePageUI();
}

function resetCoins(event) {
    
    if (event) event.preventDefault(); 
    localStorage.removeItem('userCoins');
    document.getElementById('coin-display').innerText = "0";
    updatePageUI(); 
}

function updatePageUI() {
    let coins = parseInt(localStorage.getItem('userCoins')) || 0;
    document.getElementById('coin-display').innerText = coins;

    const itemImage = document.getElementById('image-1');
    const itemTitle = document.querySelector('#item-1 h2');
    const itemText = document.querySelector('#item-1 p');

    if (coins >= 30) {
       
        itemImage.src = 'eggmuffin.jpeg';
        itemTitle.innerText = 'Egg Muffin';
        itemText.innerText = 'Available! Click to view';
        document.getElementById('item-1').onclick = function() {
            window.location.href = 'EggMuffin.html';
        };
    } 
}

window.onload = updatePageUI;