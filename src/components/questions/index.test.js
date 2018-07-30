import React from "react"
import { shallow } from "enzyme"
import { assertPropTypes } from "check-prop-types"

import Questions from "./"

describe("Questions", () => {
  const props = {
    title: "Question 1",
    question: "Is it… ?"
  }
  it("renders", () => {
    const wrapper = shallow(<Questions {...props} />)
    expect(wrapper.exists()).toBe(true)
  })

  it("does not throw with expected props", () => {
    const propError = assertPropTypes(
      Questions.propTypes,
      props,
      "prop",
      Questions.name
    )

    expect(propError).toBeUndefined()
  })

  it("renders a question title", () => {
    const wrapper = shallow(<Questions {...props} />)

    const titleTag = wrapper.find("h1")
    expect(titleTag.exists()).toBe(true)
    expect(titleTag.text()).toEqual(props.title)
  })

  it("renders the question text", () => {
    const wrapper = shallow(<Questions {...props} />)

    expect(wrapper.find("p.lead").exists()).toBe(true)
    expect(wrapper.find("p.lead").text()).toBe(props.question)
  })

  it("passes props down to it's root component", () => {
    const propWithClassName = { ...props, className: "some-class" }
    const wrapper = shallow(<Questions {...propWithClassName} />)
  })
})
