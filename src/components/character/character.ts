import './character.css';
import { createElement } from '../../utils/createElement';

export const characterCard = createElement('div', {
  className: 'characterCard',
  childElements: [
    createElement('img', {
      src: 'https://rickandmortyapi.com/api/character/avatar/153.jpeg',
    }),
    createElement('div', {
      childElements: [
        createElement('h3', { innerText: 'Hamster in Butt' }),
        createElement('div', {
          childElements: [
            createElement('div', {}),
            createElement('p', { innerText: 'Alive - animal' }),
          ],
        }),
        createElement('h4', { innerText: 'Last known location:' }),
        createElement('p', { innerText: 'Hamster in Butt World' }),
        createElement('h4', { innerText: 'First seen in:' }),
        createElement('p', { innerText: 'Rixty Minutes' }),
      ],
    }),
  ],
});
