const axios = require('axios');
const fs = require('fs')

const fetchData = callback => {
  setTimeout(() => {
    callback('Done')
  }, 1500)
}

setTimeout(() => {
  console.log('Time is done!')
  fetchData(text => {
    console.log(text)
  })
}, 2000)

console.log('Hello!')
console.log('Hi!')

const getSnoreData = () => {
  return axios
    .get('https://pokeapi.co/api/v2/pokemon/snorlax')
    .then(({ data }) => {
      return data.species;
    })
    .catch((err) => {
      console.log(err);
    })
}

const getPikaData = () => {
  return axios
    .get('https://pokeapi.co/api/v2/pokemon/pikachu')
    .then(({ data }) => {
      return data.species;
    })
    .catch((err) => {
      console.log(err);
    })
}

const main = async () => {
  const snorlax = await getSnoreData()
  fs.writeFile('snorlax.json', JSON.stringify(snorlax), (err) => {
    if (err) throw err
    console.log('This file has been saved!')
  })
  const pikachu = await getPikaData()
  console.log(pikachu)
}

main()