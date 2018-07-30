import React from "react"
import PropTypes from "prop-types"

const Choices = ({ idx, name, value, text }) => (
  <div>
    <input
      type="radio"
      name={name}
      value={value}
      id={`${name}-${idx}`}
      hidden
    />
    <label htmlFor={`${name}-${idx}`}>{text}</label>
  </div>
)

Choices.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  idx: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired
}

export default Choices
