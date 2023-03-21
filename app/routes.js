const express = require('express')
const router = express.Router()

// Iteration 1 start ###############################################

// Add your routes here - above the module.exports line
// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/iteration-1/edit-record-action', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var action = req.body.action;

  if(action == 'save'){
    res.redirect('/iteration-1/confirmation-saved')
  } else if(action == 'add-creator'){
    res.redirect('/iteration-1/edit-record-add-creator#creator-2')
  } else if(action == 'remove-creator'){
    res.redirect('/iteration-1/edit-record#select-creator')
  } else if(action == 'calculateDates'){
    res.redirect('/iteration-1/edit-record#covering-dates')
  } else {
    res.redirect('/iteration-1/confirmation-discarded')
  }

})

router.post('/iteration-1/login-post', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var username = req.session.data['username']
  var password = req.session.data['password']

  // Check whether the variable matches a condition
  if (username == '1234' && password == '1234'){
    // Send user to next page
    res.redirect('/iteration-1/edit-set')
  } else if (username == '' && password == '') {
    // Send user to ineligible page
    res.redirect('/iteration-1/login-invalid')
  } else {
    res.redirect('/iteration-1/login-error')
  }

})

router.post('/iteration-1/edit-set-action', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  //var action = req.body.action;
  res.redirect('/iteration-1/edit-set')

})



// Iteration 2 start ##############################################

// Add your routes here - above the module.exports line
// Run this code when a form is submitted to 'juggling-balls-answer'



router.post('/iteration-2/login-post', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var username = req.session.data['username']
  var password = req.session.data['password']

  // Check whether the variable matches a condition
  if (username == '1234' && password == '1234'){
    // Send user to next page
    res.redirect('/iteration-2/dashboard')
  } else {
    // Send user to ineligible page
    res.redirect('/iteration-2/login-invalid')
  }

})

router.post('/iteration-2/edit-record-action', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var action = req.body.action;

  if(action == 'save'){
    res.redirect('/iteration-2/confirmation-saved')
  } else {
    res.redirect('/iteration-2/confirmation-discarded')
  }

})

router.post('/iteration-2/edit-set-action', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var action = req.body.action;

  if(action == 'add'){
    res.redirect('/iteration-2/search')
  } else if(action == 'edit') {
    res.redirect('/iteration-2/edit-set-details')
  } else {
    res.redirect('/iteration-2/dashboard')
  }

})

router.post('/iteration-2/dashboard-action', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var action = req.body.action;

  if(action == 'add'){
    res.redirect('/iteration-2/edit-set-details')
  } else {
    res.redirect('iteration-2/dashboard')
  }

})




// Iteration 2-1

router.post('/iteration-2-1/login-post', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var username = req.session.data['username']
  var password = req.session.data['password']

  // Check whether the variable matches a condition
  if (username == '1234' && password == '1234'){
    // Send user to next page
    res.redirect('/iteration-2-1/dashboard')
  } else {
    // Send user to ineligible page
    res.redirect('/iteration-2-1/login-invalid')
  }

})

router.post('/iteration-2-1/dashboard-action', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var action = req.body.action;

  if(action == 'add'){
    res.redirect('/iteration-2-1/search')
  } else {
    res.redirect('iteration-2-1/dashboard')
  }

})

router.post('/iteration-2-1/edit-set-action', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  //var action = req.body.action;
  res.redirect('/iteration-2-1/edit-set')

})

router.post('/iteration-2-1/edit-record-action', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var action = req.body.action;

  if(action == 'save'){
    res.redirect('/iteration-2-1/confirmation-saved')
  } else if(action == 'add-creator'){
    res.redirect('/iteration-2-1/edit-record-add-creator')
  } else if(action == 'remove-creator'){
    res.redirect('/iteration-2-1/edit-record#select-creator')
  } else if(action == 'calculateDates'){
    res.redirect('/iteration-2-1/edit-record#covering-dates')
  } else {
    res.redirect('/iteration-2-1/confirmation-discarded')
  }

})




// Iteration 2-1

router.post('/iteration-2-1/login-post', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var username = req.session.data['username']
  var password = req.session.data['password']

  // Check whether the variable matches a condition
  if (username == '1234' && password == '1234'){
    // Send user to next page
    res.redirect('/iteration-2-1/dashboard')
  } else {
    // Send user to ineligible page
    res.redirect('/iteration-2-1/login-invalid')
  }

})

// iteration 2-2

router.post('/iteration-2-2/dashboard-action', function (req, res) {

  var action = req.body.action;

  if(action == 'add'){
    res.redirect('/iteration-2-2/search')
  } else {
    res.redirect('iteration-2-2/dashboard')
  }

})

router.post('/iteration-2-2/edit-set-action', function (req, res) {


  //var action = req.body.action;
  res.redirect('/iteration-2-1/edit-set')

})

router.post('/iteration-2-2/edit-record-action', function (req, res) {

 
  var action = req.body.action;

  if(action == 'save'){
    res.redirect('/iteration-2-2/confirmation-saved')
  } else if(action == 'add-creator'){
    res.redirect('/iteration-2-2/edit-record-add-creator')
  } else if(action == 'remove-creator'){
    res.redirect('/iteration-2-2/edit-record#select-creator')
  } else if(action == 'calculateDates'){
    res.redirect('/iteration-2-2/edit-record#covering-dates')
  } else {
    res.redirect('/iteration-2-2/confirmation-discarded')
  }

})

module.exports = router



// iteration 2-3

router.post('/iteration-2-3/dashboard-action', function (req, res) {

  var action = req.body.action;

  if(action == 'add'){
    res.redirect('/iteration-2-3/search')
  } else {
    res.redirect('iteration-2-3/dashboard')
  }

})

router.post('/iteration-2-3/edit-set-action', function (req, res) {


  //var action = req.body.action;
  res.redirect('/iteration-2-3/edit-set')

})

router.post('/iteration-2-3/edit-record-action', function (req, res) {

 
  var action = req.body.action;

  if(action == 'save'){
    res.redirect('/iteration-2-3/confirmation-saved')
  } else if(action == 'add-creator'){
    res.redirect('/iteration-2-2/edit-record-add-creator')
  } else if(action == 'remove-creator'){
    res.redirect('/iteration-2-2/edit-record#select-creator')
  } else if(action == 'calculateDates'){
    res.redirect('/iteration-2-2/edit-record#covering-dates')
  } else {
    res.redirect('/iteration-2-2/confirmation-discarded')
  }

})


router.post('/iteration-2-3/searchResultsAction', function (req, res) {

  var whatToDoSearchResults = req.session.data['searchResultsAction']
  if (whatToDoSearchResults == 'Add selected records to a new Work Set'){
    res.redirect('create-work-set')
  } else {
    res.redirect('add-existing-work-set')
  }

})

router.post('/iteration-2-3/selectWorkSetAction', function (req, res) {

  var workSetAction = req.session.data['workSetAction']
  if (workSetAction == 'Add records and continue searching' || workSetAction == 'Create Work Set and search more records'){
    res.redirect('search-results')
  } else {
    res.redirect('view-work-set')
  }

})

module.exports = router