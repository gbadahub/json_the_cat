const { fetchBreedDescription } = require('./breedFetcher');

// allows for user input in command line
const breedName = process.argv[2];

fetchBreedDescription (breedName, (error, 
  message) =>{
    
  if (error) {
    console.log((`Failed to find breed ${breedName}`));
  } else {
    console.log((breed.description));
  }
});

