let crypto = 0;
let autoMiners = 0;
let bitcoin = 0; // Balance for Bitcoin (BTC).
let ethereum = 0; // Balance for Ethereum (ETH)
let bitcoinPrice = 100; // Initial Bitcoin price (in-game currency).
let ethereumPrice = 50; // Initial Ethereum price (in-game currency).

const cryptoImage = document.getElementById('cryptoImage');
const clicks = document.getElementById('clicks');
const buyAutoMiner = document.getElementById('buyAutoMiner');
const autoMinersDisplay = document.getElementById('autoMiners');
const newsList = document.getElementById('newsList');
const bitcoinPriceDisplay = document.getElementById('bitcoinPrice');
const ethereumPriceDisplay = document.getElementById('ethereumPrice');
const bitcoinBalanceDisplay = document.getElementById('bitcoinBalance');
const ethereumBalanceDisplay = document.getElementById('ethereumBalance');

// Function to update cryptocurrency prices in the market.
function updateCryptoPrices() {
  bitcoinPrice = getRandomCryptoPrice(); // Replace with your logic to get prices.
  ethereumPrice = getRandomCryptoPrice(); // Replace with your logic to get prices.

  bitcoinPriceDisplay.textContent = `Bitcoin Price: ${bitcoinPrice} Crypto`;
  ethereumPriceDisplay.textContent = `Ethereum Price: ${ethereumPrice} Crypto`;
}

function getRandomCryptoPrice() {
  return Math.floor(Math.random() * (200 - 50 + 1) + 50); // Example price range.
}

// Call the function to initialize cryptocurrency prices.
updateCryptoPrices();

cryptoImage.addEventListener('click', () => {
  crypto += 1;
  updateCrypto();
  saveCryptoToDB();
});

buyAutoMiner.addEventListener('click', () => {
  if (crypto >= 10) {
    crypto -= 10;
    autoMiners += 1;
    updateCrypto();
    updateAutoMiners();
    saveCryptoToDB();
    saveAutoMinersToDB();
    startAutoMining();
  }
});

function updateCrypto() {
  clicks.textContent = crypto;
}

function updateAutoMiners() {
  autoMinersDisplay.textContent = autoMiners;
}

function saveCryptoToDB() {
  // Function to save crypto count to IndexedDB (if implemented).
}

function saveAutoMinersToDB() {
  // Function to save auto-miners count to IndexedDB (if implemented).
}

function startAutoMining() {
  const autoMineInterval = setInterval(() => {
    crypto += autoMiners;
    updateCrypto();
    saveCryptoToDB();
  }, 1000);
                    }
