import React, { Component } from "react"
import { connect } from "react-redux"

import Questions from "../questions"
import Choices from "../choices"
import Stepper from "../stepper"
import GoBack from "../goback"

import { loadAssessment } from "../../actions"

export class Assessment extends Component {

  componentDidMount() {
    this.props.loadAssessment()
  }

  render() {
    const { assessment = [], currentStep = 0 } = this.props

    return (
      <div className="card p-5 m-lg-5 assessment-border">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <GoBack currentStep={2} />
          <Stepper current={currentStep + 1} total={assessment.length} />
        </div>
        <Questions
          className="my-2"
          title="What is Lorem Ipsum…"
          question="Lorem ipsum is simply dummy text of the printing industry. Lorem Ipsum has been industry's standard dummy text ever since since the 1500s"
        />
        <Choices
          className="my-3"
          choices={assessment[0] ?  assessment[0].choices : []}
        />
      </div>
    )
  } 
}

const mapStateToProps = (state) => state

export default connect(
  mapStateToProps,
  { loadAssessment }
)(Assessment)
