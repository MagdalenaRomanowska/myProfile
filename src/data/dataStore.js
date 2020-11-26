export const settings = {
  columnCreatorText: 'Add new column',
  cardCreatorText: 'Add new card',
  creator: {
    buttonOK: 'OK',
    buttonCancel: 'Cancel',
    defaultText: 'Add new item',
  },
  search: {
    defaultText: 'Search...',
    icon: 'search',
  },
  catIcon: 'cat',
  defaultListDescription: '<p>I can do all the things!!!</p>',
  defaultColumnIcon: 'list-alt',
};

export const pageContents = {
  title: 'MAGDALENA ROMANOWSKA',
  subtitle: 'Junior Web Developer',
};

export const infoContent = {
  title: 'About me',
  image: 'https://i.postimg.cc/8CQ3ZQY5/geoda-Part01.jpg',
  content01: 'For 12 years I`ve been working In Regional Road Administration as road maintenance specialist.',
  content02: 'Since 2013 I`ve been developing my skills to become Web Developer. At first there were online ',
  content03: 'courses on Codecademy (HTML, CSS, JavaScript), then stationarly in Edukey Lodz (2014 - advanced ',
  content04: 'Excel, VBA) and now in 2020 I`ve finished online Web Developer Bootcamp (Kodilla), which lasted',
  content05: 'over 9 months and was with individual mentorship.',
  myInterests: 'My interests',
  content06: '- Drone filming - I use DJI Inspire One to record for example my brothers drifting passion. Then I make short clips from it.',
  content07: '- For almost 2 years I live with my family in new house and I design the surroundings in program named Realtime Landscaping',
  content08: 'and then I implement it around my house. I design driveway, garden with plants, decorative walls.',
  content09: '- Geology - I collect minerals and rocks, mainly geodes.',
  content10: '- I also like from time to time to watch astronomical events such as meteor rain for ex. Perseids in august. It can be seen',
  content11: 'approximately 100 meteors per hour.',
};

export const faqContent = {
  title: 'Contact',
  image: 'https://i.postimg.cc/8CQ3ZQY5/geoda-Part01.jpg',
  email: 'magdalena.romanowska.poczta@gmail.com',
  phone: '+48 505208891',
  address: 'Konstantynow Lodzki, lodzkie, Poland',
  github: 'GitHub',
};

export const listData = {
  title: 'Magdalena Romanowska',
  description: 'Interesting things I want to check out!',
  image: 'https://i.postimg.cc/8CQ3ZQY5/geoda-Part01.jpg',
  columns: [
    {
      key: 0,
      title: 'Books',
      icon: 'book',
      cards: [
        {
          key: 0,
          title: 'This Is Going to Hurt',
        },
        {
          key: 1,
          title: 'Interpreter of Maladies',
        },
      ],
    },
    {
      key: 1,
      title: 'Movies',
      icon: 'film',
      cards: [
        {
          key: 0,
          title: 'Harry Potter',
        },
        {
          key: 1,
          title: 'Star Wars',
        },
      ],
    },
    {
      key: 2,
      title: 'Games',
      icon: 'gamepad',
      cards: [
        {
          key: 0,
          title: 'The Witcher',
        },
        {
          key: 1,
          title: 'Skyrim',
        },
      ],
    },
  ],
};

const lists = [
  {
    id: 'list-1',
    title: 'My projects <sup>on GitHub</sup>',
    description: 'Interesting things I want to check out!',
    image: 'https://i.postimg.cc/8CQ3ZQY5/geoda-Part01.jpg',
  },
  {
    id: 'list-2',
    title: 'Technologies I use',
    description: 'Second list Second list Second list.',
    image: 'https://i.postimg.cc/GpxMzBY7/geoda-Part02.jpg',
  },
  {
    id: 'list-3',
    title: 'Courses, work experience, education',
    description: 'Third list Third list Third list.',
    image: 'https://i.postimg.cc/Kv3JwpBg/geoda-Part03.jpg',
  },
];

const columns = [
  {
    id: 'column-1',
    listId: 'list-1',
    title: 'Books',
    icon: 'book',
  },
  {
    id: 'column-2',
    listId: 'list-1',
    title: 'Movies',
    icon: 'film',
  },
  {
    id: 'column-3',
    listId: 'list-1',
    title: 'Games',
    icon: 'gamepad',
  },
  {
    id: 'column-4',
    listId: 'list-2',
    title: 'Strange column',
    icon: 'question',
  },
];

const cards = [
  {
    id: 'card-1',
    columnId: 'column-1',
    title: 'This Is Going to Hurt',
  },
  {
    id: 'card-2',
    columnId: 'column-1',
    title: 'Interpreter of Maladies',
  },
  {
    id: 'card-3',
    columnId: 'column-2',
    title: 'Harry Potter',
  },
  {
    id: 'card-4',
    columnId: 'column-2',
    title: 'Star Wars',
  },
  {
    id: 'card-5',
    columnId: 'column-3',
    title: 'The Witcher',
  },
  {
    id: 'card-6',
    columnId: 'column-3',
    title: 'Skyrim',
  },
];

const initialStoreData = { //początkowy stan aplikacji.
  app: {...pageContents}, //treść aplikacji.
  lists: [...lists],
  columns: [...columns],
  cards: [...cards],
};

export default initialStoreData;
