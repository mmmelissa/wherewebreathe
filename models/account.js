var mongoose = require('mongoose');
mongoose.set('debug', false);
var userDB = mongoose.connect('mongodb://localhost/wherewebreathe');
//var userDB = mongoose.connect('mongodb://localhost/wherewebreathe');

var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
  //'_id' used as userID for linking to other tables, autogenerated by DB
  //password registered from newusers table stored as salt and hash
    username: String,
    salt: String,
    hash: String, 
    email: String,
    HID: String, 
    firstLogin: Boolean,
    visInternet: Boolean,
    visResearch: Boolean,
    passReset: String,
    answered: Array
});

var NewUser = new Schema({
    username: String,
    password: String, 
    email: String,
    HID: String, 
    token: String
});
User.plugin(passportLocalMongoose, {usernameField: "email"});

User.methods.resetPassword = function resetPassword(id, cb){
  //this.model('User').find({_id: id}, function(err, data){
   cb("data");
  //})
 
};
NewUser.plugin(passportLocalMongoose, {usernameField: "email"});

//module.exports = userDB.model('Account', Account);
module.exports = {
    user: userDB.model('user', User),
    newuser: userDB.model('newuser', NewUser)
};

