import assessmentReducer from "./assessment"

describe("Reducers - assessment", () => {
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

  it("returns an array as default state", () => {
    const assessment = assessmentReducer()
    expect(assessment).toEqual([])
  })

  it("returns the correct state shape ", () => {
    const assessment = assessmentReducer(stateShape)
    expect(assessment).toEqual(stateShape)
  })
})
