import React, { Fragment } from "react"
import PropTypes from "prop-types"

const Choices = ({ idx, name, value, text }) => (
  <Fragment>
    <input
      type="radio"
      name={name}
      value={value}
      id={`${name}-${idx}`}
      hidden
    />
    <label 
      className="bg-gradient-light p-4 rounded" 
      htmlFor={`${name}-${idx}`}
    >
      {text}
    </label>
  </Fragment>
)

Choices.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  idx: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired
}

export default Choices
