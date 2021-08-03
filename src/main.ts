import './style.css';

const app = document.querySelector<HTMLDivElement>('#app');

if (app !== null) {
  const main = document.createElement('main');
  app.append(main);

  const title = document.createElement('h1');
  title.innerText = 'Rick and Morty';

  main.append(title);

  const subTitle = document.createElement('h2');
  subTitle.innerText = 'Lorem ipsum dolor sit amet';

  main.append(subTitle);

  const input = document.createElement('input');
  input.placeholder = 'Search...';

  main.append(input);
}
