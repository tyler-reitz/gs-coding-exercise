import React from "react"
import { shallow } from "enzyme"

import Assessment from "./"
import Questions from "../questions"
import Choices from "../choices"
import Stepper from "../stepper"

describe("Assessment", () => {
  it("renders", () => {
    const wrapper = shallow(<Assessment />)
    expect(wrapper.length).toBe(1)
  })

  it("renders questions", () => {
    const wrapper = shallow(<Assessment />)
    expect(wrapper.find(Questions).exists()).toBe(true)
  })

  it("renders choices", () => {
    const wrapper = shallow(<Assessment />)
    expect(wrapper.find(Choices).exists()).toBe(true)
  })

  it("renders a steppr", () => {
    const wrapper = shallow(<Assessment />)
    expect(wrapper.find(Stepper).exists()).toBe(true)
  })
})
