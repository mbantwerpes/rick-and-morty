import styles from './character.module.css';
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
    className: styles.characterCard,
    childElements: [
      createElement('img', {
        src: image,
        className: styles.characterCardImg,
      }),
      createElement('div', {
        className: styles.characterCardContent,
        childElements: [
          createElement('h3', {
            innerText: name,
            className: styles.characterCardName,
          }),
          createElement('div', {
            className: styles.characterAliveContainer,
            childElements: [
              createElement('div', {
                className: `${
                  status === 'Alive'
                    ? styles.characterAliveIndicator
                    : status === 'Dead'
                    ? styles.characterDeadIndicator
                    : styles.characterUnknownIndicator
                }`,
              }),
              createElement('p', {
                innerText: `${status} - ${species}`,
                className: styles.characterAliveDescription,
              }),
            ],
          }),
          createElement('h4', {
            innerText: 'Last known location:',
            className: styles.characterSubheader,
          }),
          createElement('p', {
            innerText: location,
            className: styles.characterSubheaderDescriptionSpacer,
          }),
          createElement('h4', {
            innerText: 'First seen in:',
            className: styles.characterSubheader,
          }),
          createElement('p', {
            innerText: origin,
            className: styles.characterSubheaderDescription,
          }),
        ],
      }),
    ],
  });
}
