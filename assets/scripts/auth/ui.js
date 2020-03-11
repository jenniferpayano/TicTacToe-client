'use strict'
const store = require('../store')

const signUpSuccess = function (data) {
  $('#message').text('Signed up Successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('signUpSuccess data is:', data)
}

const signUpFailure = function (error) {
  $('#message').text('Error on sign up')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.log('signUpFailure data is:', error)
}
const signInSuccess = function (data) {
  $('#message').text('Signed In Successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('signInSuccess data is:', data)
  store.user = data.user
}
const signInFailure = function (error) {
  $('#message').text('Error on sign in')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.log('signInFailure data is:', error)
}
const changePasswordSuccess = function (data) {
  $('#message').text('Password changed Successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
}
const changePasswordFailure = function (error) {
  $('#message').text('Failed to change password')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.log('changePassword data is:', error)
}

const signOutSuccess = function (data) {
  $('#message').text('Signed out Successfully')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('signOutSuccess data is:', data)
}
const signOutFailure = function (error) {
  $('#message').text('Error on sign out')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.log('signOutFailure data is:', error)
}
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure

}
