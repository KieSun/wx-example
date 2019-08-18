function getAuthRedirectURI({ appId, redirect_uri, scope, state = 'STATE' }) {
  const redirectURI = encodeURIComponent(redirect_uri)
  return `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appId}&redirect_uri=${redirectURI}&response_type=code&scope=${scope}&state=${state}#wechat_redirect`
}

function getTokenURI({ appId, secret, code }) {
  return `https://api.weixin.qq.com/sns/oauth2/access_token?appid=${appId}&secret=${secret}&code=${code}&grant_type=authorization_code`
}

module.exports = {
  getAuthRedirectURI,
  getTokenURI
}
