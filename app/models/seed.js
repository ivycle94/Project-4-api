const mongoose = require('mongoose')
const Setup = require('./setup')
// const Tag = require('./tags')
const db = require('../../config/db')



const setups = [
  {
    //
    title: "My wallet and I are not talking",
    img: "https://i.redd.it/1gkp6jo1b3j41.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a purus ornare est eleifend mollis at sit amet diam. Sed nec vulputate sapien. Nulla dolor lacus, posuere molestie eleifend sit amet, viverra nec nulla. Integer tempor porttitor ante et consectetur. Phasellus a tempor ex. In sed ultrices velit, eu fringilla arcu. Duis elit sem, blandit vitae leo non, sodales blandit libero. Aliquam mi nulla, condimentum nec sollicitudin a, feugiat vel nulla. Vivamus luctus ornare risus eget pulvinar. Vivamus dolor dui, varius vitae velit ultrices, vulputate ultrices ligula.",
    tags: [],
  },
  {
    // https://www.reddit.com/r/battlestations/comments/c2k12u/new_setup_new_post/
    title: "New setup, new post.",
    img: "https://i.redd.it/poop2zmwmc531.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a purus ornare est eleifend mollis at sit amet diam. Sed nec vulputate sapien. Nulla dolor lacus, posuere molestie eleifend sit amet, viverra nec nulla. Integer tempor porttitor ante et consectetur. Phasellus a tempor ex. In sed ultrices velit, eu fringilla arcu. Duis elit sem, blandit vitae leo non, sodales blandit libero. Aliquam mi nulla, condimentum nec sollicitudin a, feugiat vel nulla. Vivamus luctus ornare risus eget pulvinar. Vivamus dolor dui, varius vitae velit ultrices, vulputate ultrices ligula.",
    tags: [],
  },
  {
    // https://www.reddit.com/r/battlestations/comments/fgmykb/my_place_of_zen/
    title: "My place of Zen.",
    img: "https://i.redd.it/5ofpt9vsexl41.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a purus ornare est eleifend mollis at sit amet diam. Sed nec vulputate sapien. Nulla dolor lacus, posuere molestie eleifend sit amet, viverra nec nulla. Integer tempor porttitor ante et consectetur. Phasellus a tempor ex. In sed ultrices velit, eu fringilla arcu. Duis elit sem, blandit vitae leo non, sodales blandit libero. Aliquam mi nulla, condimentum nec sollicitudin a, feugiat vel nulla. Vivamus luctus ornare risus eget pulvinar. Vivamus dolor dui, varius vitae velit ultrices, vulputate ultrices ligula.",
    tags: [],
  },
  {
    // https://www.reddit.com/r/battlestations/comments/avplup/my_minimal_battlestation/
    title: "My minimal battlestation",
    img: "https://i.redd.it/rlgkp253daj21.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a purus ornare est eleifend mollis at sit amet diam. Sed nec vulputate sapien. Nulla dolor lacus, posuere molestie eleifend sit amet, viverra nec nulla. Integer tempor porttitor ante et consectetur. Phasellus a tempor ex. In sed ultrices velit, eu fringilla arcu. Duis elit sem, blandit vitae leo non, sodales blandit libero. Aliquam mi nulla, condimentum nec sollicitudin a, feugiat vel nulla. Vivamus luctus ornare risus eget pulvinar. Vivamus dolor dui, varius vitae velit ultrices, vulputate ultrices ligula.",
    tags: [],
  },
  {
    // https://www.reddit.com/r/battlestations/comments/89rrxf/shes_finished_for_now/
    title: "She's finished. For now.",
    img: "https://i.redd.it/qr7oin2ejxp01.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a purus ornare est eleifend mollis at sit amet diam. Sed nec vulputate sapien. Nulla dolor lacus, posuere molestie eleifend sit amet, viverra nec nulla. Integer tempor porttitor ante et consectetur. Phasellus a tempor ex. In sed ultrices velit, eu fringilla arcu. Duis elit sem, blandit vitae leo non, sodales blandit libero. Aliquam mi nulla, condimentum nec sollicitudin a, feugiat vel nulla. Vivamus luctus ornare risus eget pulvinar. Vivamus dolor dui, varius vitae velit ultrices, vulputate ultrices ligula.",
    tags: [],
  },
  {
    // https://www.reddit.com/r/battlestations/comments/ub300a/current_battlestation_status_many_of_you_here/
    title: "Current battlestation status! Many of you here suggested grey walls so here it is.",
    img: "https://i.redd.it/jg5pr9za9jv81.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a purus ornare est eleifend mollis at sit amet diam. Sed nec vulputate sapien. Nulla dolor lacus, posuere molestie eleifend sit amet, viverra nec nulla. Integer tempor porttitor ante et consectetur. Phasellus a tempor ex. In sed ultrices velit, eu fringilla arcu. Duis elit sem, blandit vitae leo non, sodales blandit libero. Aliquam mi nulla, condimentum nec sollicitudin a, feugiat vel nulla. Vivamus luctus ornare risus eget pulvinar. Vivamus dolor dui, varius vitae velit ultrices, vulputate ultrices ligula.",
    tags: [],
  },
  {
    // https://www.reddit.com/r/battlestations/comments/tvr5gy/added_another_pegboard_to_organize_some_things/
    title: "Added another pegboard to organize some things",
    img: "https://i.redd.it/0jctz396dfr81.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a purus ornare est eleifend mollis at sit amet diam. Sed nec vulputate sapien. Nulla dolor lacus, posuere molestie eleifend sit amet, viverra nec nulla. Integer tempor porttitor ante et consectetur. Phasellus a tempor ex. In sed ultrices velit, eu fringilla arcu. Duis elit sem, blandit vitae leo non, sodales blandit libero. Aliquam mi nulla, condimentum nec sollicitudin a, feugiat vel nulla. Vivamus luctus ornare risus eget pulvinar. Vivamus dolor dui, varius vitae velit ultrices, vulputate ultrices ligula.",
    tags: [],
  },
  {
    // https://www.reddit.com/r/battlestations/comments/u2kfl4/simracing_upgrade_its_so_much_fun/
    title: "Simracing upgrade, it's so much fun.",
    img: "https://i.redd.it/p2w2b15yv8t81.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a purus ornare est eleifend mollis at sit amet diam. Sed nec vulputate sapien. Nulla dolor lacus, posuere molestie eleifend sit amet, viverra nec nulla. Integer tempor porttitor ante et consectetur. Phasellus a tempor ex. In sed ultrices velit, eu fringilla arcu. Duis elit sem, blandit vitae leo non, sodales blandit libero. Aliquam mi nulla, condimentum nec sollicitudin a, feugiat vel nulla. Vivamus luctus ornare risus eget pulvinar. Vivamus dolor dui, varius vitae velit ultrices, vulputate ultrices ligula.",
    tags: [],
  },
  {
    // https://www.reddit.com/r/battlestations/comments/ubhb0y/my_updated_setup_a_few_more_tweaks_needed_i/
    title: "My updated setup, a few more tweaks needed! I swapped to a lighter desk with drawers, simplified the desk space a little and a few other bits. Thoughts?",
    img: "https://i.redd.it/rxnj2z1xbnv81.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a purus ornare est eleifend mollis at sit amet diam. Sed nec vulputate sapien. Nulla dolor lacus, posuere molestie eleifend sit amet, viverra nec nulla. Integer tempor porttitor ante et consectetur. Phasellus a tempor ex. In sed ultrices velit, eu fringilla arcu. Duis elit sem, blandit vitae leo non, sodales blandit libero. Aliquam mi nulla, condimentum nec sollicitudin a, feugiat vel nulla. Vivamus luctus ornare risus eget pulvinar. Vivamus dolor dui, varius vitae velit ultrices, vulputate ultrices ligula.",
    tags: [],
  },
  {
    // https://www.reddit.com/r/battlestations/comments/npn7xw/finally_have_my_kawaiicyberpunk_dream_setup/
    title: "Finally have my kawaii/cyberpunk dream setup.",
    img: "https://i.redd.it/szfvq8vmil271.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a purus ornare est eleifend mollis at sit amet diam. Sed nec vulputate sapien. Nulla dolor lacus, posuere molestie eleifend sit amet, viverra nec nulla. Integer tempor porttitor ante et consectetur. Phasellus a tempor ex. In sed ultrices velit, eu fringilla arcu. Duis elit sem, blandit vitae leo non, sodales blandit libero. Aliquam mi nulla, condimentum nec sollicitudin a, feugiat vel nulla. Vivamus luctus ornare risus eget pulvinar. Vivamus dolor dui, varius vitae velit ultrices, vulputate ultrices ligula.",
    tags: [],
  },
  {
    // https://www.reddit.com/r/battlestations/comments/i8svhg/my_kawaii_battlestation/
    title: "My Kawaii Battlestation!",
    img: "https://i.redd.it/4hd0to6zyog51.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a purus ornare est eleifend mollis at sit amet diam. Sed nec vulputate sapien. Nulla dolor lacus, posuere molestie eleifend sit amet, viverra nec nulla. Integer tempor porttitor ante et consectetur. Phasellus a tempor ex. In sed ultrices velit, eu fringilla arcu. Duis elit sem, blandit vitae leo non, sodales blandit libero. Aliquam mi nulla, condimentum nec sollicitudin a, feugiat vel nulla. Vivamus luctus ornare risus eget pulvinar. Vivamus dolor dui, varius vitae velit ultrices, vulputate ultrices ligula.",
    tags: [],
  },
  {
    // https://www.reddit.com/r/battlestations/comments/nlwfgt/i_live_in_a_van_and_this_is_my_battle_station/
    title: "I live in a van and this is my battle station.",
    img: "https://i.redd.it/fghfbso1ek171.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a purus ornare est eleifend mollis at sit amet diam. Sed nec vulputate sapien. Nulla dolor lacus, posuere molestie eleifend sit amet, viverra nec nulla. Integer tempor porttitor ante et consectetur. Phasellus a tempor ex. In sed ultrices velit, eu fringilla arcu. Duis elit sem, blandit vitae leo non, sodales blandit libero. Aliquam mi nulla, condimentum nec sollicitudin a, feugiat vel nulla. Vivamus luctus ornare risus eget pulvinar. Vivamus dolor dui, varius vitae velit ultrices, vulputate ultrices ligula.",
    tags: [],
  },
  {
    // https://www.reddit.com/r/battlestations/comments/9vkifc/probably_the_weirdest_setup_youll_see_today/
    title: "Probably the weirdest setup you'll see today",
    img: "https://i.redd.it/zv1ydk7y6bx11.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a purus ornare est eleifend mollis at sit amet diam. Sed nec vulputate sapien. Nulla dolor lacus, posuere molestie eleifend sit amet, viverra nec nulla. Integer tempor porttitor ante et consectetur. Phasellus a tempor ex. In sed ultrices velit, eu fringilla arcu. Duis elit sem, blandit vitae leo non, sodales blandit libero. Aliquam mi nulla, condimentum nec sollicitudin a, feugiat vel nulla. Vivamus luctus ornare risus eget pulvinar. Vivamus dolor dui, varius vitae velit ultrices, vulputate ultrices ligula.",
    tags: [],
  },
  {
    // https://www.reddit.com/r/battlestations/comments/hp6m0s/closet_upgraded_again/
    title: "Closet upgraded ..again",
    img: "https://i.redd.it/v5w2p9d4v6a51.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a purus ornare est eleifend mollis at sit amet diam. Sed nec vulputate sapien. Nulla dolor lacus, posuere molestie eleifend sit amet, viverra nec nulla. Integer tempor porttitor ante et consectetur. Phasellus a tempor ex. In sed ultrices velit, eu fringilla arcu. Duis elit sem, blandit vitae leo non, sodales blandit libero. Aliquam mi nulla, condimentum nec sollicitudin a, feugiat vel nulla. Vivamus luctus ornare risus eget pulvinar. Vivamus dolor dui, varius vitae velit ultrices, vulputate ultrices ligula.",
    tags: [],
  },
  {
    // https://www.reddit.com/r/battlestations/comments/l9hq3d/i_think_my_backyard_battle_shed_is_finally/
    title: "I think my Backyard battle shed is finally complete",
    img: "https://i.redd.it/l55m6odjipe61.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a purus ornare est eleifend mollis at sit amet diam. Sed nec vulputate sapien. Nulla dolor lacus, posuere molestie eleifend sit amet, viverra nec nulla. Integer tempor porttitor ante et consectetur. Phasellus a tempor ex. In sed ultrices velit, eu fringilla arcu. Duis elit sem, blandit vitae leo non, sodales blandit libero. Aliquam mi nulla, condimentum nec sollicitudin a, feugiat vel nulla. Vivamus luctus ornare risus eget pulvinar. Vivamus dolor dui, varius vitae velit ultrices, vulputate ultrices ligula.",
    tags: [],
  },
  {
    // https://www.reddit.com/r/battlestations/comments/h9n8ab/happy_place/
    title: "Happy place.",
    img: "https://i.redd.it/zp5r8apum4551.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a purus ornare est eleifend mollis at sit amet diam. Sed nec vulputate sapien. Nulla dolor lacus, posuere molestie eleifend sit amet, viverra nec nulla. Integer tempor porttitor ante et consectetur. Phasellus a tempor ex. In sed ultrices velit, eu fringilla arcu. Duis elit sem, blandit vitae leo non, sodales blandit libero. Aliquam mi nulla, condimentum nec sollicitudin a, feugiat vel nulla. Vivamus luctus ornare risus eget pulvinar. Vivamus dolor dui, varius vitae velit ultrices, vulputate ultrices ligula.",
    tags: [],
  },
  {
    // https://www.reddit.com/r/battlestations/comments/ix0094/upgraded_my_closet_battlestation_a_little_messy/
    title: "Upgraded my closet battlestation. A little messy, but very cosy.",
    img: "https://i.redd.it/i1x9q5nr1io51.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a purus ornare est eleifend mollis at sit amet diam. Sed nec vulputate sapien. Nulla dolor lacus, posuere molestie eleifend sit amet, viverra nec nulla. Integer tempor porttitor ante et consectetur. Phasellus a tempor ex. In sed ultrices velit, eu fringilla arcu. Duis elit sem, blandit vitae leo non, sodales blandit libero. Aliquam mi nulla, condimentum nec sollicitudin a, feugiat vel nulla. Vivamus luctus ornare risus eget pulvinar. Vivamus dolor dui, varius vitae velit ultrices, vulputate ultrices ligula.",
    tags: [],
  },
  {
    // https://www.reddit.com/r/battlestations/comments/lugru8/decided_to_take_a_daytime_picture_i_like_it/
    title: "Decided to take a daytime picture! I like it!",
    img: "https://i.redd.it/p00vsp4268k61.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a purus ornare est eleifend mollis at sit amet diam. Sed nec vulputate sapien. Nulla dolor lacus, posuere molestie eleifend sit amet, viverra nec nulla. Integer tempor porttitor ante et consectetur. Phasellus a tempor ex. In sed ultrices velit, eu fringilla arcu. Duis elit sem, blandit vitae leo non, sodales blandit libero. Aliquam mi nulla, condimentum nec sollicitudin a, feugiat vel nulla. Vivamus luctus ornare risus eget pulvinar. Vivamus dolor dui, varius vitae velit ultrices, vulputate ultrices ligula.",
    tags: [],
  },
  {
    // https://www.reddit.com/r/battlestations/comments/sxan9z/meet_my_actual_setup/
    title: "Meet my actual setup.",
    img: "https://i.redd.it/9so2uih9t1j81.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a purus ornare est eleifend mollis at sit amet diam. Sed nec vulputate sapien. Nulla dolor lacus, posuere molestie eleifend sit amet, viverra nec nulla. Integer tempor porttitor ante et consectetur. Phasellus a tempor ex. In sed ultrices velit, eu fringilla arcu. Duis elit sem, blandit vitae leo non, sodales blandit libero. Aliquam mi nulla, condimentum nec sollicitudin a, feugiat vel nulla. Vivamus luctus ornare risus eget pulvinar. Vivamus dolor dui, varius vitae velit ultrices, vulputate ultrices ligula.",
    tags: [],
  },
  {
    // https://www.reddit.com/r/battlestations/comments/lbop1s/my_first_contribution_wfh_setup_as_a_designer/
    title: "My first contribution - WFH setup as a designer! :)",
    img: "https://i.redd.it/1rkm7b80w9f61.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a purus ornare est eleifend mollis at sit amet diam. Sed nec vulputate sapien. Nulla dolor lacus, posuere molestie eleifend sit amet, viverra nec nulla. Integer tempor porttitor ante et consectetur. Phasellus a tempor ex. In sed ultrices velit, eu fringilla arcu. Duis elit sem, blandit vitae leo non, sodales blandit libero. Aliquam mi nulla, condimentum nec sollicitudin a, feugiat vel nulla. Vivamus luctus ornare risus eget pulvinar. Vivamus dolor dui, varius vitae velit ultrices, vulputate ultrices ligula.",
    tags: [],
  },
  {
    // https://www.reddit.com/r/battlestations/comments/rv2cme/my_setup_has_really_grown_on_me/
    title: "My setup has really grown on me",
    img: "https://i.redd.it/et1x00kkbh981.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a purus ornare est eleifend mollis at sit amet diam. Sed nec vulputate sapien. Nulla dolor lacus, posuere molestie eleifend sit amet, viverra nec nulla. Integer tempor porttitor ante et consectetur. Phasellus a tempor ex. In sed ultrices velit, eu fringilla arcu. Duis elit sem, blandit vitae leo non, sodales blandit libero. Aliquam mi nulla, condimentum nec sollicitudin a, feugiat vel nulla. Vivamus luctus ornare risus eget pulvinar. Vivamus dolor dui, varius vitae velit ultrices, vulputate ultrices ligula.",
    tags: [],
  },
  {
    // https://www.reddit.com/r/battlestations/comments/ioqcow/update_balanced_out_my_hexagon_wall_really_liking/
    title: "Update! Balanced out my hexagon wall, really liking this look better!",
    img: "https://i.redd.it/begemp8p1wl51.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a purus ornare est eleifend mollis at sit amet diam. Sed nec vulputate sapien. Nulla dolor lacus, posuere molestie eleifend sit amet, viverra nec nulla. Integer tempor porttitor ante et consectetur. Phasellus a tempor ex. In sed ultrices velit, eu fringilla arcu. Duis elit sem, blandit vitae leo non, sodales blandit libero. Aliquam mi nulla, condimentum nec sollicitudin a, feugiat vel nulla. Vivamus luctus ornare risus eget pulvinar. Vivamus dolor dui, varius vitae velit ultrices, vulputate ultrices ligula.",
    tags: [],
  },
  {
    // https://www.reddit.com/r/battlestations/comments/kyqfbq/my_setup_project_of_2020/
    title: "My Setup Project of 2020.",
    img: "https://i.redd.it/gqbtvv725rb61.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a purus ornare est eleifend mollis at sit amet diam. Sed nec vulputate sapien. Nulla dolor lacus, posuere molestie eleifend sit amet, viverra nec nulla. Integer tempor porttitor ante et consectetur. Phasellus a tempor ex. In sed ultrices velit, eu fringilla arcu. Duis elit sem, blandit vitae leo non, sodales blandit libero. Aliquam mi nulla, condimentum nec sollicitudin a, feugiat vel nulla. Vivamus luctus ornare risus eget pulvinar. Vivamus dolor dui, varius vitae velit ultrices, vulputate ultrices ligula.",
    tags: [],
  },
  {
    // https://www.reddit.com/r/battlestations/comments/ecfohf/nature_meets_tech_the_51_gaming_build/
    title: "Nature meets tech : The 5.1 gaming build",
    img: "https://i.redd.it/7ezi3m6xff541.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a purus ornare est eleifend mollis at sit amet diam. Sed nec vulputate sapien. Nulla dolor lacus, posuere molestie eleifend sit amet, viverra nec nulla. Integer tempor porttitor ante et consectetur. Phasellus a tempor ex. In sed ultrices velit, eu fringilla arcu. Duis elit sem, blandit vitae leo non, sodales blandit libero. Aliquam mi nulla, condimentum nec sollicitudin a, feugiat vel nulla. Vivamus luctus ornare risus eget pulvinar. Vivamus dolor dui, varius vitae velit ultrices, vulputate ultrices ligula.",
    tags: [],
  },
  {
    // https://www.reddit.com/r/battlestations/comments/idvq7t/fourth_monitor_added_lets_have_a_chill_friday/
    title: "Fourth monitor added! Let’s have a chill Friday shall we!",
    img: "https://i.redd.it/pbhd49ijmci51.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a purus ornare est eleifend mollis at sit amet diam. Sed nec vulputate sapien. Nulla dolor lacus, posuere molestie eleifend sit amet, viverra nec nulla. Integer tempor porttitor ante et consectetur. Phasellus a tempor ex. In sed ultrices velit, eu fringilla arcu. Duis elit sem, blandit vitae leo non, sodales blandit libero. Aliquam mi nulla, condimentum nec sollicitudin a, feugiat vel nulla. Vivamus luctus ornare risus eget pulvinar. Vivamus dolor dui, varius vitae velit ultrices, vulputate ultrices ligula.",
    tags: [],
  },
  {
    // https://www.reddit.com/r/battlestations/comments/hm5w4n/been_told_to_share_my_racing_rig_to_here/
    title: "Been told to share my Racing rig to here!",
    img: "https://i.redd.it/uxt66xb928951.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a purus ornare est eleifend mollis at sit amet diam. Sed nec vulputate sapien. Nulla dolor lacus, posuere molestie eleifend sit amet, viverra nec nulla. Integer tempor porttitor ante et consectetur. Phasellus a tempor ex. In sed ultrices velit, eu fringilla arcu. Duis elit sem, blandit vitae leo non, sodales blandit libero. Aliquam mi nulla, condimentum nec sollicitudin a, feugiat vel nulla. Vivamus luctus ornare risus eget pulvinar. Vivamus dolor dui, varius vitae velit ultrices, vulputate ultrices ligula.",
    tags: [],
  }
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