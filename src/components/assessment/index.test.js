import React from "react"
import { shallow } from "enzyme"

import Assessment from "./"

describe("Assessment", () => {
  it("renders", () => {
    const wrapper = shallow(<Assessment />)
    expect(wrapper.length).toBe(1)
  })

  it("has a title", () => {
    const wrapper = shallow(<Assessment />)
    expect(wrapper.children().text()).toBe("Assessment")
  })
})
