document.querySelector('.hamburger-menu').addEventListener('click', animateBars);

const line1 = document.querySelector('.line1-menu');
const line2 = document.querySelector('.line2-menu');
const line3 = document.querySelector('.line3-menu');
const containerMenu = document.querySelector('.navItems');

function animateBars () {
    line1.classList.toggle('activeline1-menu');
    line2.classList.toggle('activeline2-menu');
    line3.classList.toggle('activeline3-menu');

    containerMenu.classList.toggle('navItems-active')
}

const cardsData = [
    {
        featuredImage: 'source/orquesta_sinfonica_yucatan.svg',
        title: 'Orquesta Sinfónica de Yucatan',
        description: 'This symphonic group has a long history in the musical history of Yucatan whose origin dates back to the end of the 19th century, when the Yucatecan pianist Ricardo Río Díaz founded the artistic society that bore his name and organized together with José Cuevas Pachón the first symphonic concert that It was held in the city of Mérida on September 17, 1898, at the Peón Contreras Theater',
        subDescription: 'The official headquarters of the orchestra is the Peón Contreras Theater in the city of Mérida, which accommodates an audience of 700 people.' 
    },
    {
        featuredImage: 'source/orquesta_sinfonica_yucatan.svg',
        title: 'Orquesta Sinfónica de Yucatan',
        description: 'This symphonic group has a long history in the musical history of Yucatan whose origin dates back to the end of the 19th century, when the Yucatecan pianist Ricardo Río Díaz founded the artistic society that bore his name and organized together with José Cuevas Pachón the first symphonic concert that It was held in the city of Mérida on September 17, 1898, at the Peón Contreras Theater',
        subDescription: 'The official headquarters of the orchestra is the Peón Contreras Theater in the city of Mérida, which accommodates an audience of 700 people.' 
    },
    {
        featuredImage: 'source/orquesta_sinfonica_yucatan.svg',
        title: 'Orquesta Sinfónica de Yucatan',
        description: 'This symphonic group has a long history in the musical history of Yucatan whose origin dates back to the end of the 19th century, when the Yucatecan pianist Ricardo Río Díaz founded the artistic society that bore his name and organized together with José Cuevas Pachón the first symphonic concert that It was held in the city of Mérida on September 17, 1898, at the Peón Contreras Theater',
        subDescription: 'The official headquarters of the orchestra is the Peón Contreras Theater in the city of Mérida, which accommodates an audience of 700 people.' 
    },
    {
        featuredImage: 'source/orquesta_sinfonica_yucatan.svg',
        title: 'Orquesta Sinfónica de Yucatan',
        description: 'This symphonic group has a long history in the musical history of Yucatan whose origin dates back to the end of the 19th century, when the Yucatecan pianist Ricardo Río Díaz founded the artistic society that bore his name and organized together with José Cuevas Pachón the first symphonic concert that It was held in the city of Mérida on September 17, 1898, at the Peón Contreras Theater',
        subDescription: 'The official headquarters of the orchestra is the Peón Contreras Theater in the city of Mérida, which accommodates an audience of 700 people.' 
    },
    {
        featuredImage: 'source/orquesta_sinfonica_yucatan.svg',
        title: 'Orquesta Sinfónica de Yucatan',
        description: 'This symphonic group has a long history in the musical history of Yucatan whose origin dates back to the end of the 19th century, when the Yucatecan pianist Ricardo Río Díaz founded the artistic society that bore his name and organized together with José Cuevas Pachón the first symphonic concert that It was held in the city of Mérida on September 17, 1898, at the Peón Contreras Theater',
        subDescription: 'The official headquarters of the orchestra is the Peón Contreras Theater in the city of Mérida, which accommodates an audience of 700 people.' 
    },
    {
        featuredImage: 'source/orquesta_sinfonica_yucatan.svg',
        title: 'Orquesta Sinfónica de Yucatan',
        description: 'This symphonic group has a long history in the musical history of Yucatan whose origin dates back to the end of the 19th century, when the Yucatecan pianist Ricardo Río Díaz founded the artistic society that bore his name and organized together with José Cuevas Pachón the first symphonic concert that It was held in the city of Mérida on September 17, 1898, at the Peón Contreras Theater',
        subDescription: 'The official headquarters of the orchestra is the Peón Contreras Theater in the city of Mérida, which accommodates an audience of 700 people.' 
    },
];

