const fetchData = require('../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/';

const myAsyncFun = async (url_api) => {
    try {
        let data = await fetchData(url_api)
        let character = await fetchData(`${API}${data.results[1].id}`);
        let origin = await fetchData(character.origin.url);

        console.log(data);
        console.log(data.info.count);
        console.log(character.name);
        console.log(origin.dimension);
    } catch (error) {
        console.error(error);
    }
}

console.log ('Before');
myAsyncFun(API);
console.log('After');