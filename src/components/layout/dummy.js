import first from '../../assets/illustration-features-tab-1.svg';
import second from '../../assets/illustration-features-tab-2.svg';
import third from '../../assets/illustration-features-tab-3.svg';
export const links = [
  {
    id: 1,
    section: 'Github',
    url: 'https://github.com/yamilt351/scraper',
  },
  {
    id: 2,
    section: 'About',
    url: 'https://scraper-5ask.onrender.com/public/html.html',
  },
];

export const sectionTitlesAndSubtitles = [
  {
    id: 1,
    title: 'La Nacion',
    link: 'https://www.lanacion.com.ar',
    css: '.ln-card',
  },
  {
    id: 2,
    title: 'Clarin',
    link: 'https://www.clarin.com',
    css: '.content-nota',
  },
  {
    id: 3,
    title: 'La Prensa',
    link: 'https://www.laprensa.com.ar',
    css: '.entry__body',
  },
  {
    id: 4,
    title: 'Perfil',
    link: 'https://www.perfil.com',
    css: '.headline-title',
  },
];

export const tutorial = [
  {
    id: 1,
    img: first,
    text: `Select the sources of information from which you want to obtain the information you're looking for. Then, use a keyword to filter the information from those sources`,
  },
  {
    id: 2,
    img: second,
    text: `From the list of results you obtained, select the article you want to read to obtain a summary of its information`,
  },
  {
    id: 3,
    img: third,
    text: `We do not store information on how you use this application, but we do store the collected data and the keywords used in order to provide a better experience for all users`,
  },
];
