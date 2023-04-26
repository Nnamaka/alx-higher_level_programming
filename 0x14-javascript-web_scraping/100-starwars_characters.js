#!/usr/bin/node
// Display all the names of a start war movie

const request = require('request');
const movieId = process.argv[2];
const api = 'https://swapi-api.hbtn.io/api/films/';

request.get(api + movieId, (err, res, body) => {
  if (err) {
    console.log(err);
  }
  const data = JSON.parse(body);
  const names = data.characters;

  for (const name in names) {
    request.get(name, (err, res, messages) => {
      if (err) {
        console.log(err);
      }
      const message = JSON.parse(messages);
      console.log(message.name);
    });
  }
});
