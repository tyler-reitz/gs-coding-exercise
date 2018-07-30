import React, { Component } from "react"

import Questions from "../questions"
import Choices from "../choices"
import Stepper from "../stepper"
import GoBack from "../goback"

export default () => (
  <div className="card p-5 m-lg-5 assessment-border">
    <div className="d-flex justify-content-between align-items-center mb-3">
      <GoBack currentStep={2} />
      <Stepper current={2} total={4} />
    </div>
    <Questions
      className="my-2"
      title="What is Lorem Ipsum…"
      question="Lorem ipsum is simply dummy text of the printing industry. Lorem Ipsum has been industry's standard dummy text ever since since the 1500s"
    />
    <Choices
      className="my-3"
      choices={[
        {
          name: "some question",
          value: 3,
          text: "here are some facts we expect you to know"
        },
        {
          name: "some question",
          value: 3,
          text: "here are some facts we expect you to know"
        },
        {
          name: "some question",
          value: 3,
          text: "here are some facts we expect you to know"
        },
        {
          name: "some question",
          value: 3,
          text: "here are some facts we expect you to know"
        }
      ]}
    />
  </div>
)
