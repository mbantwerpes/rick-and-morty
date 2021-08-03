import './style.css';
import { createElement } from './utils/createElement';

const app = document.querySelector<HTMLDivElement>('#app');

if (app !== null) {
  const body = document.createElement('body');
  app.append(body);

  const main = document.createElement('main');
  main.className = 'container';
  body.append(main);

  const title = document.createElement('h1');
  title.innerText = 'Rick and Morty';

  main.append(title);

  const subTitle = document.createElement('h2');
  subTitle.innerText = 'Lorem ipsum dolor sit amet';

  main.append(subTitle);

  const input = document.createElement('input');
  input.placeholder = 'Search...';

  main.append(input);

  const card = document.createElement('div');
  card.className = 'card';
  const cardTitle = document.createElement('h3');
  cardTitle.innerText = 'Rick';
  const cardDescription = document.createElement('p');
  cardDescription.innerText = 'Lorem ipsum dolor sit amet.';
  const cardImg = document.createElement('img');
  cardImg.src =
    'https://images-na.ssl-images-amazon.com/images/I/91MteSqsrJL.jpg';

  card.append(cardTitle);
  card.append(cardDescription);
  card.append(cardImg);

  main.append(card);
}
