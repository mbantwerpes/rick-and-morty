import './character.css';
import { createElement } from '../../utils/createElement';
import { Character } from '../../types';

export function createCharacterCard({
  image,
  name,
  status,
  species,
  location,
  origin,
}: Character): HTMLElement {
  return createElement('div', {
    className: 'characterCard',
    childElements: [
      createElement('img', {
        src: image,
        className: 'characterCardImg',
      }),
      createElement('div', {
        className: 'characterCardContent',
        childElements: [
          createElement('h3', {
            innerText: name,
            className: 'characterCardName',
          }),
          createElement('div', {
            className: 'characterAliveContainer',
            childElements: [
              createElement('div', {
                className: `${
                  status === 'Alive'
                    ? 'characterAliveIndicator'
                    : status === 'Dead'
                    ? 'characterDeadIndicator'
                    : 'characterUnknownIndicator'
                }`,
              }),
              createElement('p', {
                innerText: `${status} - ${species}`,
                className: 'characterAliveDescription',
              }),
            ],
          }),
          createElement('h4', {
            innerText: 'Last known location:',
            className: 'characterSubheader',
          }),
          createElement('p', {
            innerText: location,
            className: 'characterSubheaderDescriptionSpacer',
          }),
          createElement('h4', {
            innerText: 'First seen in:',
            className: 'characterSubheader',
          }),
          createElement('p', {
            innerText: origin,
            className: 'characterSubheaderDescription',
          }),
        ],
      }),
    ],
  });
}
