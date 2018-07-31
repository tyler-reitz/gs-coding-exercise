import { actionTypes, loadAssessment } from "./"

import { stateShape } from "./"

describe("Actions", () => {
  describe("Load Assessment", () => {
    it("return the correct action type", () => {
      expect(loadAssessment().type).toBe(actionTypes.LOAD_ASSESSMENT)
    })
    it("return the correct payload", () => {
      expect(loadAssessment().payload).toEqual(stateShape)
    })
  })
})
