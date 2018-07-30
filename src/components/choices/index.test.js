import React from "react"
import { shallow } from "enzyme"
import checkPropTypes from "check-prop-types"

import Choices from "./"
import Choice from "../choice"

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
    const choices = Array(4).fill({
      name: "some question",
      value: Math.round(Math.random() * 100),
      text: "The questions's text"
    })
    const wrapper = shallow(<Choices choices={choices} />)
    expect(wrapper.find(Choice).length).toBe(4)
  })

  it("passes props down to it's root component", () => {
    const propWithClassName = { ...props, className: "some-class" }
    const wrapper = shallow(<Choices {...propWithClassName} />)
  })
})
