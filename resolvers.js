const db = require('./db')
const Query = {
    // resolver function for welcome
    marvel_universe: () => {
       return 'Welcome to the Marvel Universe!' 
    },
    //resolver function for characters list
    characters:() => db.characters.list(),
    characterById:(root,args,context,info) => {
        return db.characters.get(args.id);
    }
}

const Character = {
    fullName:(root,args,context,info) => {
        return root.firstName + ' ' + root.lastName
    }
}

module.exports = {Query,Character}