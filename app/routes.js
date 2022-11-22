const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/edit-record-action', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var action = req.body.action;

  if(action == 'save'){
    res.redirect('/confirmation-saved')
  } else {
    res.redirect('/confirmation-discarded')
  }

})

router.post('/edit-set-action', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var action = req.body.action;

  if(action == 'add'){
    res.redirect('/search')
  } else if(action == 'edit') {
    res.redirect('/edit-set-details')
  } else {
    res.redirect('/dashboard')
  }

})

router.post('/dashboard-action', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var action = req.body.action;

  if(action == 'add'){
    res.redirect('/edit-set-details')
  } else {
    res.redirect('/dashboard')
  }

})

router.post('/login-post', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var username = req.session.data['username']
  var password = req.session.data['password']

  // Check whether the variable matches a condition
  if (username == '1234' && password == '1234'){
    // Send user to next page
    res.redirect('/dashboard')
  } else {
    // Send user to ineligible page
    res.redirect('/login-invalid')
  }

})

module.exports = router
