import React, { Component } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"

import { setCurrentStep } from "../../actions"
import { decrementStep } from "../../utils"

export class GoBack extends Component {
  render() {
    const { currentStep, setCurrentStep, total } = this.props

    return (
      currentStep > 0 && <img onClick={() => setCurrentStep(decrementStep(currentStep, total))} src="images/prev.jpg" alt="back arrow" />
    )
  }
}

GoBack.propTypes = {
  currentStep: PropTypes.number.isRequired,
  setCurrentStep: PropTypes.func.isRequired
}

export default connect(
  ({ currentStep, assessment }) => ({ currentStep, total: assessment.length }),
  { setCurrentStep }
)(GoBack)
