import React from "react"
import { shallow } from "enzyme"

import FourOhFour from "./index"

describe("404", () => {
  let wrapper

  beforeEach(() => (wrapper = shallow(<FourOhFour />)))
  it("renders", () => {
    expect(wrapper.exists()).toBe(true)
  })

  it("provides an appropriate error message", () => {
    expect(wrapper.children().text()).toBe("Error! 404")
  })
})
