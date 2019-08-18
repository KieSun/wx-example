const router = require('koa-router')()
const axios = require('axios')
const { getAuthRedirectURI, getTokenURI } = require('../utils')
const { h5 } = require('../config')
const { appId, appSecret } = h5
router.prefix('/api')

router.get('/auth', ctx => {
  const { scope, url } = ctx.query
  const wxURL = getAuthRedirectURI({
    appId,
    redirect_uri: `http://local.yuchengkai.org:8080/api/getToken?url=${url}`,
    scope
  })
  ctx.redirect(wxURL)
})

router.get('/getToken', async ctx => {
  const { code, url } = ctx.query
  const requestUrl = getTokenURI({
    appId,
    secret: appSecret,
    code
  })
  const { data } = await axios.get(requestUrl)
  const success = data && !data.errmsg
  if (success)
    ctx.cookies.set('openId', data.openid, {
      maxAge: 30 * 60 * 60 * 24,
      httpOnly: false // 是否只用于http请求中获取
    })
  if (url) {
    ctx.redirect(url)
  } else {
    if (success) {
      ctx.body = {
        success: true
      }
    } else {
      ctx.body = {
        success: false,
        errmsg: data.errmsg
      }
    }
  }
})

module.exports = router
