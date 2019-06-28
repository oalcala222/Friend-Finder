//<<=============== DATA ===============>>//
// The below data <<<<<WILL>>>>> hold all of the available friends on Friend Finder.
// Initially we just set it equal to a "DUMMY/EXAMPLE" customer but it could also be an empty array as well.
var friendsArray = [
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
  