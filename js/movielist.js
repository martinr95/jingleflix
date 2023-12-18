const movies = {
  "Home Alone": {
    xmas: 10,
    rating: 10,
    temperature: 8,
    classic: true,
    "modernClassic:": false,
    tags: ["classic", "comedy", "family"],
    previewImg:
      "https://upload.wikimedia.org/wikipedia/en/7/76/Home_alone_poster.jpg",
    year: 1990,
    duration: 103,
    shortDescription:
      "A resourceful 8-year-old is accidentally left behind by his family during Christmas vacation. He defends his home from bumbling burglars with ingenious traps, turning a potential disaster into a comedic adventure.",
  },
  "Home Alone 2": {
    xmas: 10,
    rating: 10,
    temperature: 8,
    classic: true,
    "modernClassic:": false,
    tags: ["classic", "city", "family", "new york"],
    previewImg:
      "https://upload.wikimedia.org/wikipedia/en/5/50/Home_Alone_2.jpg",
    year: 1992,
    duration: 120,
    shortDescription:
      "A mischievous boy ends up in New York City during Christmas, separated from his family. He faces off against bumbling burglars once again, turning the Big Apple into his own playground of pranks and hilarity.",
  },
  "Miracle on 34th Street": {
    xmas: 8.5,
    rating: 8,
    temperature: 6,
    classic: true,
    "modernClassic:": false,
    tags: ["old", "family", "new york", "city", "santa"],
    moreTags: ["law"],
    previewImg:
      "https://upload.wikimedia.org/wikipedia/en/5/56/Miracle_on_34th_Street_poster.jpg",
    year: 1994,
    duration: 114,
    shortDescription:
      "During the festive season, a man claiming to be Santa Claus lands in a legal battle to prove his identity. A skeptical lawyer and a young girl find themselves touched by the magic of the holiday spirit.",
  },

  "101 Dalmatians": {
    xmas: 2,
    rating: 7,
    temperature: 3,
    classic: false,
    "modernClassic:": false,
    tags: ["alternative", "animals", "comedy"],
    moreTags: ["dogs"],
    previewImg:
      "https://upload.wikimedia.org/wikipedia/en/e/ef/One_hundred_and_one_dalmatians_ver2.jpg",
    year: 1996,
    duration: 103,
    shortDescription:
      "A villainous fashionista kidnaps adorable Dalmatian puppies for a sinister fur coat scheme. Their courageous owners embark on a thrilling adventure to rescue them, aided by a network of furry friends.",
  },
  "102 Dalmatians": {
    xmas: 4,
    rating: 7,
    temperature: 5,
    classic: false,
    "modernClassic:": false,
    tags: ["alternative", "animals", "comedy"],
    moreTags: ["dogs"],
    previewImg:
      "https://upload.wikimedia.org/wikipedia/en/f/fe/102_dalmatians_poster.jpg",
    year: 2000,
    duration: 100,
    shortDescription:
      "A reformed Cruella De Vil is released from prison, but her obsession with fur takes a wicked turn again. Chaos ensues as she hatches a devious plan involving rare Dalmatian puppies and a newfound love for fashion.",
  },
  "The Holiday Calendar": {
    xmas: 7,
    rating: 6,
    temperature: 8,
    classic: false,
    "modernClassic:": false,
    tags: ["romance", "art"],
    previewImg:
      "https://upload.wikimedia.org/wikipedia/en/d/d0/The_Holiday_Calendar_poster.jpg",
    year: 2018,
    duration: 95,
    shortDescription:
      "A talented photographer discovers a magical advent calendar that seems to predict her romantic future, leading to unexpected twists and heartwarming moments during the holiday season.",
  },
  "Christmas with the Kranks": {
    xmas: 9,
    rating: 8,
    temperature: 7,
    classic: true,
    "modernClassic:": false,
    tags: ["comedy", "family", "classic"],
    previewImg:
      "https://upload.wikimedia.org/wikipedia/en/c/c9/Christmas_With_the_Kranks_poster.JPG",
    year: 2004,
    duration: 99,
    shortDescription:
      "A couple decides to skip Christmas festivities and go on a cruise. Their plan is jeopardized when their neighbors insist on upholding holiday traditions, leading to a chaotic and heartwarming series of events.",
  },
  "Love Hard": {
    xmas: 8,
    rating: 7,
    temperature: 8,
    classic: false,
    "modernClassic:": true,
    tags: ["comedy", "romance"],
    previewImg:
      "https://upload.wikimedia.org/wikipedia/en/thumb/f/f6/Love_Hard_poster.jpg/220px-Love_Hard_poster.jpg",
    year: 2021,
    duration: 106,
    shortDescription:
      "A woman's quest for love takes an unexpected turn when she falls for a guy online. Eager to meet, she discovers he's not who he seemed. A romantic comedy unfolds with unexpected twists and genuine connections.",
  },
  Holidate: {
    xmas: 7,
    rating: 7,
    temperature: 6,
    classic: false,
    "modernClassic:": true,
    tags: ["comedy", "romance"],
    previewImg:
      "https://upload.wikimedia.org/wikipedia/en/0/01/Holidate_film_poster.png",
    year: 2020,
    duration: 104,
    shortDescription:
      "Two perpetual singles decide to be each other's platonic 'holidates' to avoid holiday loneliness. What begins as a pact to survive festivities turns into a year of unexpected romance and self-discovery.",
  },
  "Falling for Christmas": {
    xmas: 8,
    rating: 5,
    temperature: 9,
    classic: false,
    "modernClassic:": false,
    tags: ["comedy", "romance", "netflix", "popcorn", "snow"],
    previewImg:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTdugDd2fIe3ZFozMC8PZAplUWXNVbiXHItbKgEMHR4bIC0eBRD",
    year: 2022,
    duration: 93,
    shortDescription:
      "A young, newly engaged heiress has a skiing accident in the days before Christmas. After she is diagnosed with amnesia, she finds herself in the care of the handsome cabin owner and his daughter.",
  },
  "The Christmas Chronicles": {
    xmas: 10,
    rating: 8,
    temperature: 9,
    classic: false,
    "modernClassic:": true,
    tags: ["family", "adventure"],
    previewImg:
      "https://upload.wikimedia.org/wikipedia/en/5/5e/The_Christmas_Chronicles.png",
    year: 2018,
    duration: 104,
    shortDescription:
      "Siblings team up with Santa after accidentally causing chaos on Christmas Eve. In a race against time, they embark on a magical adventure to save the holiday and rediscover the true spirit of Christmas.",
  },
  "The Christmas Chronicles 2": {
    xmas: 10,
    rating: 8,
    temperature: 10,
    classic: false,
    "modernClassic:": true,
    tags: ["family", "adventure", "north pole", "snow"],
    previewImg:
      "https://upload.wikimedia.org/wikipedia/en/e/ef/The_Christmas_Chronicles_2.jpg",
    year: 2020,
    duration: 112,
    shortDescription:
      "In Christmas Chronicles 2, the adventure continues as Kate Pierce and Jack team up with Santa to thwart a mischievous troublemaker's plan. Together, they embark on a thrilling journey to save Christmas once again.",
  },
  "Four Christmases": {
    xmas: 4,
    rating: 6,
    temperature: 2,
    classic: false,
    "modernClassic:": false,
    tags: ["family", "romance"],
    previewImg:
      "https://m.media-amazon.com/images/M/MV5BMTQ2MjA0NDAwNF5BMl5BanBnXkFtZTcwOTU4MTM5MQ@@._V1_.jpg",
    year: 2008,
    duration: 88,
    shortDescription:
      "A couple's plan to escape Christmas festivities is foiled when their flight gets canceled. Forced to visit all four divorced parents in a single day, they navigate hilariously chaotic and awkward holiday celebrations.",
  },
  "National Lampoon's Christmas Vacation": {
    xmas: 8,
    rating: 6,
    temperature: 7,
    classic: true,
    "modernClassic:": false,
    tags: ["family", "comedy", "old"],
    previewImg:
      "https://upload.wikimedia.org/wikipedia/en/5/53/NationalLampoonsChristmasVacationPoster.JPG",
    year: 1989,
    duration: 97,
    shortDescription:
      "The Griswold family's attempt at a festive Christmas celebration turns into a series of comedic disasters. Hilarious mishaps, quirky relatives, and unexpected surprises make for a memorable, chaotic holiday season.",
  },
  "Jingle All the Way": {
    xmas: 8,
    rating: 7,
    temperature: 7,
    classic: false,
    "modernClassic:": false,
    tags: ["adventure", "comedy", "action"],
    moreTags: ["schwarzenegger"],
    previewImg:
      "https://upload.wikimedia.org/wikipedia/en/c/c4/Jingle_All_the_Way_poster.JPG",
    year: 1996,
    duration: 89,
    shortDescription:
      "A father's last-minute quest for the hottest Christmas toy turns into a wild and comical adventure. Battling other desperate parents, he navigates chaos and learns the true meaning of the holiday.",
  },
  /*
    "A Very Harold & Kumar Christmas": {
      xmas: 5,
      rating: 5,
      temperature: 7,
      classic: false,
      "modernClassic:": true,
      tags: ["fun", "comedy", "adults"],
    },
    "The Christmas Chronicles": {
      xmas: 6,
      rating: 6,
      temperature: 9,
      classic: false,
      "modernClassic:": true,
      tags: [],
    },
    "The Christmas Chronicles 2": {
      xmas: 6,
      rating: 6,
      temperature: 6,
      classic: false,
      "modernClassic:": true,
      tags: [],
    },
    "The Grinch": {
      xmas: 9,
      rating: 6,
      temperature: 6,
      classic: true,
      "modernClassic:": false,
      tags: ["kids", "old"],
    },
    
    "The Night Before (Die Highligen Drei Könige)": {
      xmas: 6,
      rating: 6,
      temperature: 6,
      classic: false,
      "modernClassic:": true,
      tags: ["fun", "comedy", "adults"],
    },
    "Christmas office party": {
      xmas: 5,
      rating: 5,
      temperature: 6,
      classic: false,
      "modernClassic:": true,
      tags: ["fun", "comedy", "adults", "trashy"],
    },
  
    */
};

export default movies;
