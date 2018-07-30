import { actionTypes, loadAssessment } from "./"

const stateShape = [{
  title: "What is Lorem Ipsum…",
  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  choices: [{
    text: "yes",
    value: 1
  }, {
    text: "no",
    value: 0
  }]
}]

describe("Actions", () => {
  describe("Load Assessment", () => {
    it("return the correct action type", () => {
      expect(loadAssessment()).toEqual({
        type: actionTypes.LOAD_ASSESSMENT,
      })
    })
    it("return the correct payload", () => {
      expect(loadAssessment()).toEqual({
        payload: stateShape
      })
    })
  })
})
