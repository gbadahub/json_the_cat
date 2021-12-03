const request = require('request');

const fetchBreedDescription = function(breedName, callback) {

  // url to cat api
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(url, (error, _resp, body) => {
     if (error) {
       return callback(error, null);
     }
   // turns string into object
     const data = JSON.parse(body);
   // locates first entry in the data array  and saves it in breed variable
   const breed = data[0];
     //prints description is breed include in command line, else fails
     //console.log("error",error)
     if (breed){
       callback(null, breed.description)
     } else {
       callback ("Breed not found")
     }
   });
};

//fetchBreedDescription(breedName)


module.exports = { fetchBreedDescription };


 //fetchBreedDescription('Siberian', (error, description) => {

// });
