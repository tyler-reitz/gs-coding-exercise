import React from "react"
import { mount, shallow } from "enzyme"
import { MemoryRouter } from "react-router-dom"

import App from "./App"
import Assessment from "./components/assessment"
import FourOhFour from "./components/404"

describe("App", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<App />)
    expect(wrapper.length).toBe(1)
  })

  describe("Router", () => {
    const setup = route =>
      mount(
        <MemoryRouter initialEntries={[route]} initialIndex={0}>
          <App />
        </MemoryRouter>
      )

    describe("/*", () => {
      it("invalid path should redirect to 404", () => {
        const wrapper = setup("/random")

        expect(wrapper.find(FourOhFour)).toHaveLength(1)
      })

      it("invalid path should not render Assessment", () => {
        const wrapper = setup("/random")

        expect(wrapper.find(Assessment)).toHaveLength(0)
      })
    })

    describe("/assessment", () => {
      it("it renders", () => {
        const wrapper = setup("/assessment")

        expect(wrapper.find(Assessment)).toHaveLength(1)
      })

      it("does not render a 404", () => {
        const wrapper = setup("/assessment")

        expect(wrapper.find(FourOhFour)).toHaveLength(0)
      })
    })
  })
})
