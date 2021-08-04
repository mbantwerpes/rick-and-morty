import './character.css';
import { createElement } from '../../utils/createElement';
import { Character } from '../../types';

export function createCharacterCard(char: Character): HTMLElement {
  return createElement('div', {
    className: 'characterCard',
    childElements: [
      createElement('img', {
        src: char.image,
        className: 'characterCardImg',
      }),
      createElement('div', {
        className: 'characterCardContent',
        childElements: [
          createElement('h3', {
            innerText: char.name,
            className: 'characterCardName',
          }),
          createElement('div', {
            className: 'characterAliveContainer',
            childElements: [
              createElement('div', {
                className: `${
                  char.status === 'Alive'
                    ? 'characterAliveIndicator'
                    : char.status === 'Dead'
                    ? 'characterDeadIndicator'
                    : 'characterUnknownIndicator'
                }`,
              }),
              createElement('p', {
                innerText: `${char.status} - ${char.species}`,
                className: 'characterAliveDescription',
              }),
            ],
          }),
          createElement('h4', {
            innerText: 'Last known location:',
            className: 'characterSubheader',
          }),
          createElement('p', {
            innerText: char.location,
            className: 'characterSubheaderDescriptionSpacer',
          }),
          createElement('h4', {
            innerText: 'First seen in:',
            className: 'characterSubheader',
          }),
          createElement('p', {
            innerText: char.origin,
            className: 'characterSubheaderDescription',
          }),
        ],
      }),
    ],
  });
}
