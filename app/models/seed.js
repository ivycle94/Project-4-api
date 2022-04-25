const mongoose = require('mongoose')
const Setup = require('./setup')
// const Tag = require('./tags')
const db = require('../../config/db')



const btl_stations = [
  {
    title: "station1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a purus ornare est eleifend mollis at sit amet diam. Sed nec vulputate sapien. Nulla dolor lacus, posuere molestie eleifend sit amet, viverra nec nulla. Integer tempor porttitor ante et consectetur. Phasellus a tempor ex. In sed ultrices velit, eu fringilla arcu. Duis elit sem, blandit vitae leo non, sodales blandit libero. Aliquam mi nulla, condimentum nec sollicitudin a, feugiat vel nulla. Vivamus luctus ornare risus eget pulvinar. Vivamus dolor dui, varius vitae velit ultrices, vulputate ultrices ligula.",
    img: "https://imgur.com/r/battlestations/nsFcTI6",
    tags: [],
  },
  {
    title: "station2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a purus ornare est eleifend mollis at sit amet diam. Sed nec vulputate sapien. Nulla dolor lacus, posuere molestie eleifend sit amet, viverra nec nulla. Integer tempor porttitor ante et consectetur. Phasellus a tempor ex. In sed ultrices velit, eu fringilla arcu. Duis elit sem, blandit vitae leo non, sodales blandit libero. Aliquam mi nulla, condimentum nec sollicitudin a, feugiat vel nulla. Vivamus luctus ornare risus eget pulvinar. Vivamus dolor dui, varius vitae velit ultrices, vulputate ultrices ligula.",
    img: "https://imgur.com/r/battlestations/yl3sMIN",
    tags: [],
  },
  {
    title: "station3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a purus ornare est eleifend mollis at sit amet diam. Sed nec vulputate sapien. Nulla dolor lacus, posuere molestie eleifend sit amet, viverra nec nulla. Integer tempor porttitor ante et consectetur. Phasellus a tempor ex. In sed ultrices velit, eu fringilla arcu. Duis elit sem, blandit vitae leo non, sodales blandit libero. Aliquam mi nulla, condimentum nec sollicitudin a, feugiat vel nulla. Vivamus luctus ornare risus eget pulvinar. Vivamus dolor dui, varius vitae velit ultrices, vulputate ultrices ligula.",
    img: "https://imgur.com/r/battlestations/NLEiwJz",
    tags: [],
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