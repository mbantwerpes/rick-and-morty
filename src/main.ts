import './style.css';
import { createElement } from './utils/createElement';
import { createCharacterCard } from './components/character/character';

const app = document.querySelector<HTMLDivElement>('#app');

const charArr = await fetch('https://rickandmortyapi.com/api/character/?page=2')
  .then((response) => response.json())
  .then((data) => data.results);

const charNodes = charArr.map((char: any) => {
  return createCharacterCard(char);
});

const mainElement = createElement('main', {
  childElements: [
    createElement('body', {
      childElements: [
        createElement('main', {
          className: 'container',
          childElements: [
            createElement('h1', { innerText: 'Rick and Morty' }),
            createElement('h2', { innerText: 'Lorem ipsum dolor sit amet' }),
            createElement('input', { placeholder: 'Search...' }),
            createElement('div', {
              className: 'characterContainer',
              childElements: charNodes,
            }),
          ],
        }),
      ],
    }),
  ],
});

if (app !== null) {
  app.append(mainElement);
}
