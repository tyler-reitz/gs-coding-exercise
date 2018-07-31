import React from "react"
import { shallow } from "enzyme"

import ConnectedAssessment, { Assessment } from "./"
import Questions from "../questions"
import Choices from "../choices"
import Stepper from "../stepper"
import GoBack from "../goback"

import { storeFactory } from "../../testUtils"

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

  it("renders a stepper", () => {
    const wrapper = shallow(<Assessment />)
    expect(wrapper.find(Stepper).exists()).toBe(true)
  })

  it("renders a stepper", () => {
    const wrapper = shallow(<Assessment />)
    expect(wrapper.find(GoBack).exists()).toBe(true)
  })

  describe("Store connection", () => {
    const setup = (initialState) => {
      const store = storeFactory()
      const wrapper = shallow(<ConnectedAssessment store={store} />).dive()
      return wrapper 
    }

    it("renders", () => {
      const wrapper = setup()
      expect(wrapper.exists()).toBe(true)
    })


    it("loads state on mount", () => {
      const loadAssessmentMock = jest.fn()
      const wrapper = shallow(<Assessment loadAssessment={loadAssessmentMock} />)
      wrapper.instance().componentDidMount()
      expect(loadAssessmentMock.mock.calls.length).toBe(1)
    })
  })
})
