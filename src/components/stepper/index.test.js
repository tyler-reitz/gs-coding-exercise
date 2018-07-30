import React from "react"
import { shallow } from "enzyme"
import checkPropTypes from "check-prop-types"

import Stepper from "./"

describe("Stepper", () => {
  const props = {
    total: 4,
    current: 2
  }

  it("renders", () => {
    const wrapper = shallow(<Stepper {...props} />)
    expect(wrapper.exists()).toBe(true)
  })

  it("doesn't throw an exception with expected props", () => {
    const propErrors = checkPropTypes(
      Stepper.propTypes,
      props,
      "prop",
      Stepper.name
    )

    expect(propErrors).toBeUndefined()
  })

  it("renders the appropriate length/total length of the assessment", () => {
    const wrapper = shallow(<Stepper {...props} />)
    expect(wrapper.text()).toContain(props.total.toString())
  })

  it("renders the appropriate current place in the assessment", () => {
    const wrapper = shallow(<Stepper {...props} />)
    expect(wrapper.text()).toContain(props.current.toString())
  })
})
