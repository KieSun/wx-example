export function getAuthRedirectURI({
  appid,
  redirect_uri,
  scope,
  state = 'STATE'
}) {
  const redirectURI = encodeURIComponent(redirect_uri)
  return `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${redirectURI}&response_type=code&scope=${scope}&state=${state}#wechat_redirect`
}
