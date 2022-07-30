const DATA = [
  {
    id: 1,
    name: 'Ant-man',
    img: 'https://sm.ign.com/ign_ru/feature/1/11-coolest/11-coolest-ant-man-easter-eggs_q8fd.jpg',
    desc: 'Ex-con Scott Lang uses high-tech equipment to shrink down to insect-size and fight injustice as Ant-Man.'
  },
  {
    id: 2,
    name: 'Iron man',
    img: 'https://images.stopgame.ru/news/2019/03/26/JX-BBf3.jpg',
    desc: 'Inventor Tony Stark applies his genius for high-tech solutions to problems as Iron Man, the armored Avenger.'
  },
  {
    id: 3,
    name: 'Captain America',
    img: 'https://cf-images.us-east-1.prod.boltdns.net/v1/static/5359769168001/0a823cb0-01a9-4835-a348-c64187783ccb/d37cb96c-805c-4aa2-9f2f-e62d9eb814c7/1280x720/match/image.jpg',
    desc: 'America’s World War II Super-Soldier continues his fight in the present as an Avenger and untiring sentinel of liberty.'
  },
  {
    id: 4,
    name: 'Spider-man',
    img: 'https://i.playground.ru/p/eTlWpB97dzzUaGgq-GfwpQ.jpeg',
    desc: 'Emerging from a universe in need of a new Spider-Man, a Brooklyn teen named Miles Morales rose to the challenge. Reluctant at first, he quickly earned the mantle of a Super Hero.'
  },
  {
    id: 5,
    name: 'Doctor Strange',
    img: 'https://variety.com/wp-content/uploads/2016/11/doctorstrange_1.jpg',
    desc: 'Once a highly successful, yet notably egotistical, surgeon, Doctor Stephen Strange endured a terrible accident that led him to evolve in ways he could have never foreseen.'
  }
];

const nav = document.querySelector('#nav-list');
const contentWrapper = document.querySelector('#content');

const createNavElement = (name) => {
  const navElement = `
  <li class="nav__element">
    <a class="nav__link" href="#${name.toLowerCase().replace(' ', '-')}">${name}</a> 
  </li>
  `;

  return navElement;
};

const generateNavElements = (data) => {
  let navContent = '';

  data.forEach((hero) => {
    navContent += createNavElement(hero.name);
  });

  nav.innerHTML = navContent;
};

const filterData = (data, searchName) => {
  return data.filter((hero) => {
    if (hero.name === searchName) return hero;
  });
};

const createContent = (hero) => {
  const content = `
  <div class="hero">
    <h2 class="hero__title">${hero.name}</h2>
    <img class="hero__image" src="${hero.img}" alt="${hero.name} avatar" />
    <p class="hero__description">${hero.desc}</p>
  </div>
  `;

  return content;
};

nav.addEventListener('click', (e) => {
  const linkName = e.target.textContent;

  const result = filterData(DATA, linkName);

  contentWrapper.innerHTML = createContent(result[0]);
});

// init
generateNavElements(DATA);
