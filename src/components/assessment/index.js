import React, { Component } from "react"
import { connect } from "react-redux"

import Questions from "../questions"
import Choices from "../choices"
import Stepper from "../stepper"
import GoBack from "../goback"
import Score from "../score"

import { loadAssessment } from "../../actions"

export class Assessment extends Component {

  componentDidMount() {
    this.props.loadAssessment()
  }

  render() {
    const { assessment = [], currentStep = 0, score = [] } = this.props

    return (
      <div className="card p-5 m-lg-5 assessment-border">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <GoBack currentStep={currentStep} />
          <Stepper current={currentStep} total={assessment.length} />
        </div>
        <Questions
          className="my-2"
          title={assessment[currentStep] ? assessment[currentStep].title : ''}
          question={assessment[currentStep] ? assessment[currentStep].text : ''}
        />
        <Choices
          className="my-3"
          choices={assessment[currentStep] ?  assessment[currentStep].choices : []}
        />
        { 
          score.length >= assessment.length && currentStep === assessment.length  && <Score score={score} /> 
        }
      </div>
    )
  } 
}

const mapStateToProps = (state) => state

export default connect(
  mapStateToProps,
  { loadAssessment }
)(Assessment)
