import React from "react"
import { shallow } from "enzyme"

import Assessment from "./"
import Questions from "../questions"

describe("Assessment", () => {
  it("renders", () => {
    const wrapper = shallow(<Assessment />)
    expect(wrapper.length).toBe(1)
  })

  it("renders questions", () => {
    const wrapper = shallow(<Assessment />)
    expect(wrapper.find(Questions).exists()).toBe(true)
  })
})
