const db = require('./db')
const Query = {
    marvel_universe: () => {
       return 'Welcome to the Marvel Universe!' 
    },
    characters:() => db.characters.list()
}

module.exports = {Query}