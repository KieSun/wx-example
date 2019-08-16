const router = require('koa-router')()
const axios = require('axios')
const queryString = require('query-string')
const { getAuthRedirectURI, getCodeURI } = require('../utils')
const { h5 } = require('../config')
const { appId, appSecret } = h5
router.prefix('/api')

router.get('/auth', ctx => {
  const { scope, url } = queryString.parse(ctx.url.split('/api/auth?')[1])
  const wxURL = getAuthRedirectURI({
    appId,
    redirect_uri: url,
    scope
  })
  ctx.body = {
    url: wxURL
  }
})

router.get('/getCode', async ctx => {
  const { code, url } = queryString.parse(ctx.url.split('/api/getCode?')[1])
  const requestUrl = getCodeURI({
    appId,
    secret: appSecret,
    code
  })
  const data = await axios.get(requestUrl)
  console.log(data)
  ctx.redirect(url)
})

module.exports = router
