const line1 = document.querySelector('.line1-menu');
const line2 = document.querySelector('.line2-menu');
const line3 = document.querySelector('.line3-menu');
const containerMenu = document.querySelector('.navItems');
const menuItems = document.querySelectorAll('.navItems a');

function animateBars() {
  line1.classList.toggle('activeline1-menu');
  line2.classList.toggle('activeline2-menu');
  line3.classList.toggle('activeline3-menu');

  containerMenu.classList.toggle('navItems-active');
}

document.querySelector('.hamburger-menu').addEventListener('click', animateBars);

menuItems.forEach((element) => {
  element.addEventListener('click', () => {
    containerMenu.classList.remove('navItems-active');
    line1.classList.remove('activeline1-menu');
    line2.classList.remove('activeline2-menu');
    line3.classList.remove('activeline3-menu');
  });
});

const artistData = [
  {
    featuredImage: 'sources/OSY.svg',
    title: 'Orquesta Sinfónica de Yucatan',
    description: 'The Orquesta Sinfónica de Yucatan has achieved notoriety and reputation in the national concert music scene.',
    subDescription: 'The professional level of the musicians has allowed the orchestra to accompany colorful choreographies.',
  },
  {
    featuredImage: 'sources/NuevoYucatan.svg',
    title: 'Mariachi Nuevo Yucatan',
    description: 'Hailing from the beautiful city of Mérida, Yucatán, this talented mariachi has forged a solid reputation as one of the most outstanding groups in the region.',
    subDescription: 'Mariachi Nuevo Yucatán always delivers unforgettable performances that highlight the richness and beauty of Mexican music.',
  },
  {
    featuredImage: 'sources/Juglares.svg',
    title: 'Los Juglares',
    description: 'This talented musical ensemble, composed of passionate artists, stands out for their ability to tell stories through their performances.',
    subDescription: 'Los Juglares have embodied and carried forward the legacy of trova, sharing their love of Yucatecan music with the world.',
  },
  {
    featuredImage: 'sources/JaraneraDelMayab.svg',
    title: 'Orquesta Jaranera del Mayab',
    description: 'The Orquesta Jaranera del Mayab is a musical ensemble that pays homage to the rich cultural tradition of Yucatan. ',
    subDescription: 'This orchestra has become a symbol of Yucatán folklore and identity.',
  },
  {
    featuredImage: 'sources/JoseAntonio.svg',
    title: 'Jose Antonio Paredes',
    description: 'José Antonio Paredes, "El Panadero del Amor", is a beautiful representation of the warm and welcoming spirit of Yucatán.',
    subDescription: 'For decades, he has been a pillar in his community, offering his talent and love to those around him.',
  },
  {
    featuredImage: 'sources/TipicaDeYucalpeten.svg',
    title: 'Orquesta Tipica de Yucalpeten',
    description: 'The Orquesta Típica de Yucalpetén is a musical treasure rooted in the cultural tradition of Yucatán, Mexico.',
    subDescription: 'Each note played by the Orquesta Típica de Yucalpetén resonates with the charm and magic of the Yucatán Peninsula. ',
  },
];

function createCards1(artistData) {
  const cardContent = document.createElement('article');
  cardContent.classList.add('cardContent');

  const imageContainer = document.createElement('div');
  imageContainer.classList.add('imageContainer');

  const featuredImage = document.createElement('div');
  featuredImage.classList.add('featuredImage');
  featuredImage.innerHTML = `<img src='${artistData.featuredImage}' alt=''>`;
  imageContainer.appendChild(featuredImage);

  const textContent = document.createElement('div');
  textContent.classList.add('textContent');

  const title = document.createElement('div');
  title.classList.add('title');
  title.innerText = artistData.title;

  const description = document.createElement('div');
  description.classList.add('description');
  description.innerText = artistData.description;

  const hr = document.createElement('hr');

  const subDescription = document.createElement('div');
  subDescription.classList.add('subDescription');
  subDescription.innerText = artistData.subDescription;

  textContent.appendChild(title);
  textContent.appendChild(description);
  textContent.appendChild(hr);
  textContent.appendChild(subDescription);
  cardContent.appendChild(imageContainer);
  cardContent.appendChild(textContent);

  return cardContent;
}

function createCards2(artistData) {
  const cardContent2 = document.createElement('article');
  cardContent2.classList.add('cardContent');
  cardContent2.classList.add('hide');
  cardContent2.setAttribute('id', 'hideCards');

  const imageContainer2 = document.createElement('div');
  imageContainer2.classList.add('imageContainer');

  const featuredImage2 = document.createElement('div');
  featuredImage2.classList.add('featuredImage');
  featuredImage2.innerHTML = `<img src='${artistData.featuredImage}' alt=''>`;
  imageContainer2.appendChild(featuredImage2);

  const textContent2 = document.createElement('div');
  textContent2.classList.add('textContent');

  const title2 = document.createElement('div');
  title2.classList.add('title');
  title2.innerText = artistData.title;

  const description2 = document.createElement('div');
  description2.classList.add('description');
  description2.innerText = artistData.description;

  const hr = document.createElement('hr');

  const subDescription2 = document.createElement('div');
  subDescription2.classList.add('subDescription');
  subDescription2.innerText = artistData.subDescription;

  textContent2.appendChild(title2);
  textContent2.appendChild(description2);
  textContent2.appendChild(hr);
  textContent2.appendChild(subDescription2);
  cardContent2.appendChild(imageContainer2);
  cardContent2.appendChild(textContent2);

  return cardContent2;
}

function cards() {
  const container = document.getElementById('container');
  container.classList.add('container');

  for (let i = 0; i < 2; i += 1) {
    const card1 = createCards1(artistData[i]);
    container.appendChild(card1);
  }

  for (let i = 2; i < artistData.length; i += 1) {
    const card2 = createCards2(artistData[i]);
    container.appendChild(card2);
  }
}

cards();

const moreButton = document.getElementById('moreButton');
moreButton.addEventListener('click', function click() {
  const hiddenCards = document.querySelectorAll('#hideCards.cardContent');
  hiddenCards.forEach((card) => {
    card.classList.toggle('hide');
  });

  this.innerText = (this.innerText === 'More') ? 'Less' : 'More';
});
