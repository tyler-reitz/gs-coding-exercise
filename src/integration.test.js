import { storeFactory } from "./testUtils"
import { loadAssessment, setCurrentStep } from "./actions"

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
      store.dispatch(setCurrentStep(1))
      expect(store.getState().currentStep).toBe(1)
    })

    it("updates the current step from 1 to 0", () => {
      const store = storeFactory({ currentStep: 1, assessment: [] })
      store.dispatch(setCurrentStep(0))
      expect(store.getState().currentStep).toBe(0)
    })
  })
})
