//<<=============== DATA ===============>>//
// The below data <<<<<WILL>>>>> hold all of the available friends on Friend Finder.
// Initially we just set it equal to a "DUMMY/EXAMPLE" customer but it could also be an empty array as well.
var friendsArray = [
  {
    name: "Beavis",
    photo: "https://media.giphy.com/media/MF1kR4YmC2Z20/giphy.gif",
    scores: [ 
      5,
      5,
      5,
      4,
      5,
      1,
      1,
      5,
      4,
      1
    ]
  },
  {
    name: "Neo",
    photo: "https://media.giphy.com/media/6xE1FNcorRInS/giphy.gif",
    scores: [ 
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5
    ]
  },
  {
    name: "Taco Time",
    photo: "https://media.giphy.com/media/aJtrAwWscjvP2/giphy.gif",
    scores: [ 
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4
    ]
  },
  {
    name: "Jesus",
    photo: "https://media.giphy.com/media/ibGFpMv1Uoais/giphy.gif",
    scores: [ 
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3
    ]
  },
  {
    name: "Homer",
    photo: "https://media.giphy.com/media/MF1kR4YmC2Z20/giphy.gif",
    scores: [ 
      5,
      5,
      5,
      4,
      5,
      1,
      1,
      5,
      4,
      1
    ]
  }
];


// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;
  