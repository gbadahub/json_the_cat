const request = require('request');
// allows for user input in command line
const breedName = process.argv.slice(2);

// url to cat api
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;


request(url, (error, resp, body) => {
 // 
  if (error) {
    return console.log('Failed to request details: ', error);
  }
// turns string into object
  const data = JSON.parse(body);
  // console.log(data);
// locates first entry in the data array  and saves it in breed variable
  const breed = data[0];
  //prints description is breed include in command line, else fails
  if (breed) {
    console.log(breed.description);
  } else {
    console.log(`Failed to find breed ${breedName}`);
  }
});