var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuestionSchema = new Schema({
  order: Number,
  qType: String,
  label: String,
  answers: Array,
  question: String
});
var UserResponseSchema = new Schema({
  uId: Number,
  a: String
});  

var AnswerSchema = new Schema({
  _id: Schema.Types.ObjectId,
  graph_type: String,
  userResponses: [UserResponseSchema]
  
}); 

 
mongoose.model( 'Question', QuestionSchema );
mongoose.model( 'Answer', AnswerSchema );



mongoose.set('debug', true);
mongoose.connect( 'mongodb://localhost/wherewebreathe' );


//var CatSchema = new Schema({
   // name : String,
   // weight : Number,
   // breed : String
//});

//mongoose.model( 'Cat', CatSchema );


//Image.schema.path('desc').validate(function (value) {
  // example: //return /blue|green|white|red|orange|periwinkle/i.test(value);
  //return (value.split(' ').length > 1000);
//}, 'Description must be less than 1000 words');

//mongoose.connect( 'mongodb://localhost/wherewebreathe_test' );


