var balance = 100; // Starting balance
var betLimit = 50; // Maximum bet limit

function rollDice() {
    var dice = document.getElementById('dice');
    var betAmount = parseInt(document.getElementById('betAmount').value);
    var threshold = parseInt(document.getElementById('threshold').value);
    var betType = document.getElementById('betType').value;
    var randomNumber = Math.floor(Math.random() * 6) + 1; // Random number between 1 and 6
    
    // Check if the bet amount exceeds the balance or bet limit
    if (betAmount > balance || betAmount > betLimit) {
        alert('Invalid bet amount!');
        return;
    }
    
    // Subtract bet amount from balance
    balance -= betAmount;
    document.getElementById('balanceAmount').textContent = balance;
    
    // Animate rolling dice (optional)
    dice.classList.remove('animate');
    setTimeout(function() {
        dice.textContent = randomNumber;
        dice.classList.add('animate');
    }, 100);
    
    // Determine win or loss
    if ((betType === 'higher' && randomNumber > threshold) ||
        (betType === 'lower' && randomNumber < threshold)) {
        document.getElementById('result').textContent = 'You win!';
        balance += betAmount * 2; // Double the bet amount for win
    } else {
        document.getElementById('result').textContent = 'You lose!';
    }
    
    // Update balance
    document.getElementById('balanceAmount').textContent = balance;
}
