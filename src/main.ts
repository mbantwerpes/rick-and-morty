import styles from './style.module.css';
import { createElement } from './utils/createElement';
import { createCharacterCard } from './components/character/character';
import type { Character } from './types';
import { getCharacters } from './utils/api';

const app = document.querySelector<HTMLDivElement>('#app');

const charArr: Character[] = await getCharacters();

const mainElement = createElement('main', {
  childElements: [
    createElement('body', {
      childElements: [
        createElement('main', {
          className: styles.container,
          childElements: [
            createElement('h1', { innerText: 'Rick and Morty' }),
            createElement('h2', { innerText: 'Lorem ipsum dolor sit amet' }),
            createElement('input', { placeholder: 'Search...' }),
            createElement('div', {
              className: styles.characterContainer,
              childElements: charArr.map((character) =>
                createCharacterCard(character)
              ),
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
