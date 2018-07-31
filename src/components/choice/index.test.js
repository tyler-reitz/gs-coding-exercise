import React from "react"
import { shallow } from "enzyme"
import checkPropTypes from "check-prop-types"

import { Choice } from "./"
import { storeFactory } from "../../testUtils"

describe("Choice", () => {
  const props = {
    name: "nameOfRadioGroup",
    value: 2,
    idx: 1,
    text: "text of the choice"
  }

  describe("input[type='radio']", () => {
    it("renders", () => {
      const wrapper = shallow(<Choice {...props} />)
      expect(wrapper.exists()).toBe(true)
    })

    it("doesn't throw with expected props", () => {
      const propErrors = checkPropTypes(
        Choice.propTypes,
        props,
        "prop",
        Choice.name
      )

      expect(propErrors).toBeUndefined()
    })

    it("renders a radio button", () => {
      const wrapper = shallow(<Choice {...props} />)
      expect(wrapper.find("input[type='radio']").exists()).toBe(true)
    })

    it("associates the radio button with a group", () => {
      const wrapper = shallow(<Choice {...props} />)
      const radioButton = wrapper.find(`[name="${props.name}"]`)
      expect(wrapper.find("input[type='radio']").props().name).toBe(props.name)
    })

    it("associates the radio button with a value", () => {
      const wrapper = shallow(<Choice {...props} />)
      const radioButton = wrapper.find("input[type='radio']")
      expect(wrapper.find("input[type='radio']").props().value).toBe(
        props.value
      )
    })

    it("accociates the radio button with a label", () => {
      const wrapper = shallow(<Choice {...props} />)
      const radioButton = wrapper.find("input[type='radio']")
      expect(wrapper.find("input[type='radio']").props().id).toBe(
        `${props.name}-${props.idx}`
      )
    })

    it("is hidden", () => {
      const wrapper = shallow(<Choice {...props} />)
      const radioButton = wrapper.find("input[type='radio']")
      expect(wrapper.find("input[type='radio']").props().hidden).toBe(true)
    })
  })

  describe("label", () => {
    it("renders", () => {
      const wrapper = shallow(<Choice {...props} />)
      expect(wrapper.find("label").exists()).toBe(true)
    })

    it("text equals input value", () => {
      const wrapper = shallow(<Choice {...props} />)
      expect(wrapper.find("label").text()).toBe(props.text)
    })

    it("associate the label with an input", () => {
      const wrapper = shallow(<Choice {...props} />)
      expect(wrapper.find("label").props().htmlFor).toBe(
        `${props.name}-${props.idx}`
      )
    })

    it("calls setCurrentStep onClick", () => {
      const setCurrentStepMock = jest.fn()
      const store = storeFactory()
      const wrapper = shallow(<Choice {...props} setCurrentStep={setCurrentStepMock} />)
      wrapper.find("label").simulate("click")
      expect(setCurrentStepMock.mock.calls.length).toBe(1)
    })
  })
})
