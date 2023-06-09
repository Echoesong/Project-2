// crud-helper.js
/*---
Used to perform CRUD external to the application

To use (don't type the $'s):
  1. Open a Node REPL in Terminal:
        $ node

  2. Load this crud-helper.js module
        $ .load crud-helper.js

  3. When done CRUDing, exit the REPL with:
        $ .exit (or ctrl-D, or ctrl-C twice)

Note that if any changes are made to the models or
this module, exit
---*/


// If the db connection string is in a .env file,
// we need to process it just like in server.js
require('dotenv').config();
// Connect to the database
require('./config/database');
const mongoose = require('mongoose')
/*--- Require the app's Mongoose models ---*/
const Icebreaker = require('./models/Icebreaker');


/*--- Define Variables to Hold Documents ---*/
let icebreaker, icebreakers;


/*--- Example ---*/

// console.log all movie documents
// Preview of promise syntax - coming SOON!
// Movie.find({}).then(console.log);



function deleteAll(){
    Icebreaker.deleteMany({})
    .then(function(results){
        console.log(results)
    })
    .catch(function(err){
        console.log(err)
    })
    .finally(function(){
        process.exit()
    })
}

deleteAll()


console.log('Time to CRUD!');