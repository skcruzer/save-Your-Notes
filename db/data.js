const util = require('util')
const fs = require('fs')
const readFileAsync = util.promisify(fs.readFile)
const writeFileAsync = util.promisify(fs.writeFile)

class Data {
  // getNotes() {
    
  //   var notes = readFileAsync('db/db.json', 'utf8')
  //   let parsedNotes;
  //   try {
  //     parsedNotes = [].concat(JSON.parse(notes))
  //   }
  //   catch(error) {
  //     parsedNotes = []
  //   }
  //   return parsedNotes
  // }
  read() {
    return readFileAsync('db/db.json', 'utf8');
  }
  getNotes() {
    return this.read().then((notes) => {
      let parsedNotes;

      // If notes isn't an array or can't be turned into one, send back a new empty array
      try {
        parsedNotes = [].concat(JSON.parse(notes));
      } catch (err) {
        parsedNotes = [];
      }

      return parsedNotes;
    });
  }
}

module.exports = new Data();