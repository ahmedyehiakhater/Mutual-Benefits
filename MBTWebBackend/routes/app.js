var express = require('express');
var router = express.Router();
var User = require('../models/user');
router.get('/getusers', function (req, res, next) {
       
    User.find({}, function(err, result){
        res.send(result);
    });
    // User.db.find;

});
router.post('/', function (req, res, next) {
    var user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password,
        email: req.body.email
    });
    // console.log(req.body);
    user.save().then(item => {
        res.send("item saved to database");
      })
      .catch(err => {
          console.log(err);
        res.status(400).send("unable to save to database");
      });
});
function getUsers() {
    return User.find();
}
// router.get('/campaign/:cmp', function (req, res, next) {
//     res.render('node', {campaigns: req.params.cmp});
// });
// router.post('/campaign',function (req, res, next){
//     var campaign = req.body.campaignName;
//     res.redirect('/campaign/' + campaign)
// });
module.exports = router;
