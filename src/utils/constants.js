export { apiConfig, cardsContainer, selectors };

const apiConfig = {
    url: 'https://api.spacexdata.com/v4/launches',
    headers: {
        'Content-Type': 'application/json',
    },
}

const cardsContainer = document.querySelector('.cardsContainer');

const selectors = document.querySelector('.card-template');