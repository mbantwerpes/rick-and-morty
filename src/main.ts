import styles from './style.module.css';
import { createElement } from './utils/createElement';
import { createCharacterCard } from './components/character/character';
import type { Character } from './types';
import { getCharacters } from './utils/api';

const app = document.querySelector<HTMLDivElement>('#app');

const charArr: Character[] = await getCharacters();

const characterContainer = createElement('div', {
  className: styles.characterContainer,
  childElements: charArr.map((character) => createCharacterCard(character)),
});

const searchBar = createElement('input', {
  placeholder: 'Search...',
  className: 'searchInput',
  oninput: async (event) => {
    characterContainer.innerHTML = '';
    const searchValue = (<HTMLInputElement>event.target).value;
    const filteredCharacters = await getCharacters(searchValue);
    const filteredCharacterNodes = filteredCharacters.map((character) =>
      createCharacterCard(character)
    );
    characterContainer.append(...filteredCharacterNodes);
  },
});

const mainElement = createElement('main', {
  childElements: [
    createElement('body', {
      childElements: [
        createElement('main', {
          className: styles.container,
          childElements: [
            createElement('h1', { innerText: 'Rick and Morty' }),
            createElement('h2', { innerText: 'Lorem ipsum dolor sit amet' }),
            searchBar,
            characterContainer,
          ],
        }),
      ],
    }),
  ],
});

if (app !== null) {
  app.append(mainElement);
}
