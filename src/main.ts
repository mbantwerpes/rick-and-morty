import styles from './style.module.css';
import { createElement } from './utils/createElement';
import { createCharacterCard } from './components/character/character';
import { Character } from './types';

const app = document.querySelector<HTMLDivElement>('#app');

// const charArr = await fetch('https://rickandmortyapi.com/api/character/?page=2')
//   .then((response) => response.json())
//   .then((data) => data.results);

// const charNodes = charArr.map((charFromApi: any) => {
//   const char: Character = {
//     image: charFromApi.image,
//     name: charFromApi.name,
//     status: charFromApi.status,
//     species: charFromApi.species,
//     location: charFromApi.location.name,
//     origin: charFromApi.origin.name,
//   };
//   return createCharacterCard(char);
// });

const characters: Character[] = [
  {
    image: 'string',
    name: 'string',
    status: 'string',
    species: 'string',
    location: 'string',
    origin: 'string',
  },
  {
    image: 'string',
    name: 'string',
    status: 'string',
    species: 'string',
    location: 'string',
    origin: 'string',
  },
];

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
              childElements: characters.map((character) =>
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
