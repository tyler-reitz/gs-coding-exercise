import { storeFactory } from "./testUtils"
import { loadAssessment, setCurrentStep, setScore } from "./actions"
import { incrementStep, decrementStep } from "./utils"

describe("Action-Reducers Interaction", () => {
  describe("loadAssessment", () => {
    const store = storeFactory()

    it("initialy loads state", () => {
      store.dispatch(loadAssessment())
    })
  })

  describe("setCurrentStep", () => {
    it("update the current step from 0 to 1", () => {
      const store = storeFactory()
      store.dispatch(setCurrentStep(incrementStep(0, 3)))
      expect(store.getState().currentStep).toBe(1)
    })

    it("updates the current step from 1 to 0", () => {
      const store = storeFactory({ currentStep: 1, assessment: [] })
      store.dispatch(setCurrentStep(decrementStep(0, 3)))
      expect(store.getState().currentStep).toBe(0)
    })

    it("doesn't update beyond the total length of the assessment", () => {
      const store = storeFactory({ currentStep: 3, assessment: [] })
      store.dispatch(setCurrentStep(incrementStep(3, 3)))
      expect(store.getState().currentStep).toBe(3)
    })
  })

  describe("setScore", () => {
    it("updates the score with the current choices value", () => {
      const store = storeFactory({ currentStep: 0, assessment: [], score: []})
      store.dispatch(setScore(3, 0))
      expect(store.getState().score).toEqual([3])
    })
  })
})
