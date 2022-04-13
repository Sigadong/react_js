import * as React from 'react'

const ConditionalRendering = () => {
  const isLogin = true
  const userName = 'Irwan'
  // const message = isLogin ? 'Anda sudah login' : 'Silahkan login'

  return <div>
    {isLogin ? <b>User {userName} sudah login</b> : 'Silahkan login'}
  </div>
}

export default ConditionalRendering