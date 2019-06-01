
const v1 = require('./survey_v1.json');
var Blank = require('../../models/blank');
   

//Test
module.exports.createSurvey = function() {
  Blank.create(v1.z_fashion_v1, function(err, Blanks) {
    if (err) {
      console.log(err);
    }
  })
}

