import React, { Component } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"

import { setCurrentStep } from "../../actions"

export class GoBack extends Component {
  render() {
    const { currentStep, setCurrentStep } = this.props

    return (
      currentStep > 0 && <img onClick={() => setCurrentStep(currentStep - 1)} src="images/prev.jpg" alt="back arrow" />
    )
  }
}

GoBack.propTypes = {
  currentStep: PropTypes.number.isRequired,
  setCurrentStep: PropTypes.func.isRequired
}

export default connect(
  state => state,
  { setCurrentStep }
)(GoBack)
