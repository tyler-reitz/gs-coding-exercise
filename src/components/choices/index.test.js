import React from "react"
import { shallow } from "enzyme"
import checkPropTypes from "check-prop-types"

import Choices from "./"

describe("Choices", () => {
  let props = {
    choices: []
  }

  it("renders", () => {
    const wrapper = shallow(<Choices {...props} />)
    expect(wrapper.exists()).toBe(true)
  })

  it("doesn't throw with expected props", () => {
    const propErrors = checkPropTypes(
      Choices.propTypes,
      props,
      "prop",
      Choices.name
    )

    expect(propErrors).toBeUndefined()
  })

  it("renders the correct amount of choices", () => {
    const choices = Array(4).fill(null)
    const wrapper = shallow(<Choices choices={choices} />)
    expect(wrapper.children().length).toBe(4)
  })
})
