//<<=============== DATA ===============>>//
// The below data <<<<<WILL>>>>> hold all of the available friends on Friend Finder.
// Initially we just set it equal to a "DUMMY/EXAMPLE" customer but it could also be an empty array as well.
var friendsArray = [
  {
    name: "Homer",
    photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    scores: [ 
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
  }
];


// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;
  