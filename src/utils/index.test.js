import { incrementStep } from "./"

describe("utils", () => {
  describe("incrementStep", () => {
    it("increments from zero", () => {
      expect(incrementStep(0, 3)).toBe(1)
    })
    it("increments from 1", () => {
      expect(incrementStep(1, 3)).toBe(2)
    })
    it("does not incremnet past total", () => {
      expect(incrementStep(3, 3)).toBe(3)
    })
  })
})
