fetch('https://api.coincap.io/v2/assets')
.then(response => response.json())
.then(currencies => {
    renderCurrencies(currencies.data)});


const cardContainer = document.querySelector("#cards-container");

function renderCurrencies(currencies){
currencies.forEach(currency => {
    const div = document.createElement('div');
    const name = document.createElement('h1');
    const rank = document.createElement('h2');
    const priceUsd = document.createElement('h3');
    div.classList = 'card';
    name.classList = 'card-name';
    rank.classList = 'card-rank';
    priceUsd.classList = 'card-price';
    name.innerText = `Name: ${currency.name}`;
    rank.innerText = `Rank: ${currency.rank}`;
    priceUsd.innerText = `Price: ${parseFloat(currency.priceUsd).toFixed(2)}`;

    div.appendChild(name)
    div.appendChild(rank)
    div.appendChild(priceUsd)
    cardContainer.appendChild(div)
});
}