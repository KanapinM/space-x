import { apiConfig, cardsContainer, selectors } from '../utils/constants.js';
import { Card } from '../scripts/Card.js';
import { Section } from '../scripts/Section.js';
import './index.css';
import { Api } from '../utils/Api.js';


const section = new Section(renderer, cardsContainer)
function renderer(data) {
  section.addItem(createCard(data));
}

const api = new Api(apiConfig);


function createCard(data) {
  const newCard = new Card(data, selectors);
  const cardElement = newCard.generateCard();
  return cardElement;
}

function downloadPage() {
  return Promise.all([api.getInitialLaunches()])
  // return Promise(api.getInitialLaunches())
  // return api.getInitialLaunches()
    .catch((err) => console.log(err))
    .then(([cards]) => {
      section.renderItems(cards);
      console.log(cards);
    })
    .catch((err) => console.log(err));
}
downloadPage();
