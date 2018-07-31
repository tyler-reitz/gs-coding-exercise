import React, { Fragment, Component } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"

import { setCurrentStep, setScore } from "../../actions"
import { incrementStep } from "../../utils"

export class Choice extends Component {
  render() {
    const { idx, name, value, text, total, currentStep, setScore = () => {}, setCurrentStep = () => {} } = this.props

    return (
      <Fragment>
        <input
          type="radio"
          name={name}
          value={value}
          id={`${name}-${idx}`}
          hidden
        />
        <label 
          onClick={() => {
            if (currentStep <= total - 1) {
              setCurrentStep(incrementStep(currentStep, total))
              setScore(value, currentStep)
            }
          }}
          className="bg-gradient-light p-4 rounded" 
          htmlFor={`${name}-${idx}`}
        >
          {text}
        </label>
      </Fragment>
    )
  }
}

Choice.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  idx: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired
}

export default connect(
  ({ currentStep, assessment }) => ({ currentStep, total: assessment.length }),
  { setCurrentStep, setScore }
)(Choice)
