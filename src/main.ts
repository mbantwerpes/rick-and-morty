import './style.css';
import { createElement } from './utils/createElement';
import { characterCard } from './components/character/character';

const app = document.querySelector<HTMLDivElement>('#app');

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
          ],
        }),
      ],
    }),
  ],
});

if (app !== null) {
  app.append(mainElement);
  app.append(characterCard);
}
