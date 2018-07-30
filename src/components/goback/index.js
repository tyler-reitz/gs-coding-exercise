import React from "react"
import PropTypes from "prop-types"

const GoBack = ({ currentStep }) =>
  currentStep > 0 && <img src="images/prev.jpg" alt="back arrow" />

GoBack.propTypes = {
  currentStep: PropTypes.number.isRequired
}

export default GoBack
