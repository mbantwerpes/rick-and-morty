import './character.css';
import { createElement } from '../../utils/createElement';

export const characterCard = createElement('div', {
  className: 'characterCard',
  childElements: [
    createElement('img', {
      src: 'https://rickandmortyapi.com/api/character/avatar/153.jpeg',
      className: 'characterCardImg',
    }),
    createElement('div', {
      className: 'characterCardContent',
      childElements: [
        createElement('h3', {
          innerText: 'Hamster in Butt',
          className: 'characterCardName',
        }),
        createElement('div', {
          className: 'characterAliveContainer',
          childElements: [
            createElement('div', { className: 'characterAliveIndicator' }),
            createElement('p', {
              innerText: 'Alive - animal',
              className: 'characterAliveDescription',
            }),
          ],
        }),
        createElement('h4', {
          innerText: 'Last known location:',
          className: 'characterSubheader',
        }),
        createElement('p', { innerText: 'Hamster in Butt World' }),
        createElement('h4', {
          innerText: 'First seen in:',
          className: 'characterSubheader',
        }),
        createElement('p', { innerText: 'Rixty Minutes' }),
      ],
    }),
  ],
});
