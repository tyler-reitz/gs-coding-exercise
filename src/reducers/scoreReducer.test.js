import scoreReducer from "./scoreReducer"
import { actionTypes, setScore } from "../actions"

describe("Score Reducer", () => {
  const existingScore = [1,2,3]

  it("sets default state", () => {
    expect(scoreReducer()).toEqual([])
  })

  it("returns existing state", () => {
    expect(scoreReducer(existingScore)).toEqual(existingScore)
  })

  it("adds scores in the correct order", () => {
    expect(scoreReducer([], setScore(2, 0))).toEqual([2])
  })
  
  it("adds scores in the correct order", () => {
    expect(scoreReducer(existingScore, setScore(1, 2))).toEqual([1,2,1])
  })
})
