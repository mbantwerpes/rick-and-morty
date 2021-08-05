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
    className: styles.card,
    childElements: [
      createElement('img', {
        src: image,
        className: styles.cardImg,
      }),
      createElement('div', {
        className: styles.cardContent,
        childElements: [
          createElement('h3', {
            innerText: name,
            className: styles.cardName,
          }),
          createElement('div', {
            className: styles.aliveContainer,
            childElements: [
              createElement('div', {
                className: `${
                  status === 'Alive'
                    ? styles.aliveIndicator
                    : status === 'Dead'
                    ? styles.deadIndicator
                    : styles.unknownIndicator
                }`,
              }),
              createElement('p', {
                innerText: `${status} - ${species}`,
                className: styles.aliveDescription,
              }),
            ],
          }),
          createElement('h4', {
            innerText: 'Last known location:',
            className: styles.subheader,
          }),
          createElement('p', {
            innerText: location,
            className: styles.subheaderDescriptionSpacer,
          }),
          createElement('h4', {
            innerText: 'First seen in:',
            className: styles.subheader,
          }),
          createElement('p', {
            innerText: origin,
            className: styles.subheaderDescription,
          }),
        ],
      }),
    ],
  });
}
