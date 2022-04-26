const mongoose = require('mongoose')
const Tag = require('./tags')
const db = require('../../config/db')

const tags = [
    {
      text: "tag1",
      setups: [],
    },
    {
        text: "tag2",
        setups: [],
    },
    {
        text: "tag3",
        setups: [],
    },
  ]
  
  // connect to the db via mongoose
  mongoose.connect(db, {
      useNewUrlParser: true,
    })
    .then(() => {
      // then we remove all the places
      Setup.deleteMany({ owner: null })
        .then(deletedSetups => {
          console.log('deleted Setups', deletedSetups)
          // then we create using the startPets array
          // we'll use console logs to check if it's working or if there are errors
          Setup.create(btl_stations)
            .then(newSetups => {
              console.log('the new Setups', newSetups)
              mongoose.connection.close()
            })
            .catch(err => {
              console.log(err)
              mongoose.connection.close()
            })
        })
        .catch(error => {
          console.log(error)
          mongoose.connection.close()
        })
    })
    // then at the end, we close our connection to the db
    .catch(error => {
      console.log(error)
      mongoose.connection.close()
    })