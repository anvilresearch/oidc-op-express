'use strict'

const express = require('express')

function api (provider) {
  const router = express.Router('/')

  let {discover, jwks, register, authorize, token, userinfo} = provider

  router.get('/.well-known/openid-configuration', discover.bind(provider))
  router.get('/jwks', jwks.bind(provider))
  router.post('/register', register.bind(provider))
  router.get('/authorize', authorize.bind(provider))
  router.post('/authorize', authorize.bind(provider))
  router.post('/token', token.bind(provider))
  router.get('/userinfo', userinfo.bind(provider))

  return router
}

module.exports = api
