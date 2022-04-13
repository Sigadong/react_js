import * as React from 'react';

const Hello = ({ name }) => {
  return <div>Hello {name}</div>
}

// Memberikan nilai defaut pada props
Hello.defaultProps = {
  name: 'anonim'
}

export default Hello;