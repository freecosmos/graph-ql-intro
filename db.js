const { DataStore} = require('notarealdb');

const store = new DataStore('./data');

module.exports = {
    characters:store.collection('characters'),
    colleges:store.collection('colleges')
};