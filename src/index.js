'use strict'

const express = require('express')
const bodyParser = require('body-parser')

function api (provider) {
  const router = express.Router('/')

  router.use(bodyParser.json())
  router.use(bodyParser.urlencoded({ extended: false }))

  let {discover, jwks, register, authorize, token, userinfo, logout } = provider

  router.get('/.well-known/openid-configuration', discover.bind(provider))
  router.get('/jwks', jwks.bind(provider))
  router.post('/register', register.bind(provider))
  router.get('/authorize', authorize.bind(provider))
  router.post('/authorize', authorize.bind(provider))
  router.post('/token', token.bind(provider))
  router.get('/userinfo', userinfo.bind(provider))
  router.get('/logout', logout.bind(provider))

  return router
}

module.exports = api
