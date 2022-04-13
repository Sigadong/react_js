import * as React from 'react'
import PropTypes from 'prop-types'

const Button = ({ onCustomClick, caption }) => {
  return <button style={{ border: '2px solid blue' }} onClick={onCustomClick}>
    {caption}
  </button>
}

Button.propTypes = {
  caption: PropTypes.string.isRequired,
  onCustomClick: PropTypes.func.isRequired,
}

export default Button