import React from "react"
import { shallow } from "enzyme"
import checkPropTypes from "check-prop-types"

import Score from "./"

describe("Score", () => {
  const props = {
    score: [1,2,3]
  }

  it("renders", () => {
    const wrapper = shallow(<Score {...props} />)
    expect(wrapper.exists()).toBe(true)
  })

  it("does not throw with expected props", () => {
    const propErrors = checkPropTypes(
      Score.propTypes,
      props,
      "prop",
      Score.name
    )

    expect(propErrors).toBeUndefined()
  })

  it("displays a score", () => {
    const wrapper = shallow(<Score {...props} />)
    expect(wrapper.find("p").text()).toMatch(/^\d+$/)
  })
})
