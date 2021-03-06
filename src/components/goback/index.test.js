import React from "react"
import { shallow } from "enzyme"
import checkPropTypes from "check-prop-types"

import { GoBack } from "./"

describe("GoBack", () => {
  const props = {
    currentStep: 2,
    setCurrentStep: jest.fn()
  }

  it("renders", () => {
    const wrapper = shallow(<GoBack {...props} />)
    expect(wrapper.exists()).toBe(true)
  })

  it("doesn't throw with expected props", () => {
    const propErrors = checkPropTypes(
      GoBack.propTypes,
      props,
      "prop",
      GoBack.name
    )

    expect(propErrors).toBeUndefined()
  })

  it("renders if the currentStep is greater than 0", () => {
    const wrapper = shallow(<GoBack {...props} />)
    expect(wrapper.exists()).toBe(true)
  })

  it("doesn't render if the currentStep is less than one", () => {
    const wrapper = shallow(<GoBack setCurrentStep={() => {}}currentStep={0} />)
    expect(wrapper.isEmptyRender()).toBe(true)
  })

  it("renders an image", () => {
    const wrapper = shallow(<GoBack {...props} />)
    expect(wrapper.find("img")).toHaveLength(1)
  })

  it("allows users to go back a step", () => {
    const setCurrentStepMock = jest.fn()
    const newProps = { ...props, setCurrentStep: setCurrentStepMock } 
    const wrapper = shallow(<GoBack {...newProps} />)
    wrapper.simulate("click")
    expect(setCurrentStepMock.mock.calls.length).toBe(1)
  })
})
