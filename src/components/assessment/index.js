import React, { Component } from "react"

import Questions from "../questions"
import Choices from "../choices"
import Stepper from "../stepper"
import GoBack from "../goback"

export default () => (
  <div>
    <GoBack currentStep={2} />
    <Stepper current={2} total={4} />
    <Questions
      title="What is Lorem Ipsum…"
      question="Lorem ipsum is simply dummy text of the printing industry. Lorem Ipsum has been industry's standard dummy text ever since since the 1500s"
    />
    <Choices
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
