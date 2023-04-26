#!/usr/bin/node
// Display the characters in a star war movie

const request = require('request');
const movieId = process.argv[2];
const api = 'https://swapi-api.hbtn.io/api/films/';

function make (char, idx) {
  request(char[idx], (err, res, body) => {
    if (err) {
      console.log(err);
    } else {
      const actor = JSON.parse(body);
      console.log(actor.name);

      if (char.length > idx + 1) {
        make(char, idx + 1);
      }
    }
  });
}

request(api + movieId, (err, res, body) => {
  if (err) {
    console.log(err);
  } else {
    const message = JSON.parse(body);
    make(message.characters, 0);
  }
});
