import React from "react"
import PropTypes from "prop-types"

const Stepper = ({ current, total }) => (
  <span className="ml-auto">{`Step ${current || 1} of ${total}`}</span>
)

Stepper.propTypes = {
  total: PropTypes.number.isRequired,
  current: PropTypes.number.isRequired
}

export default Stepper
