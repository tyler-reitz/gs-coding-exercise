import React from "react"
import PropTypes from "prop-types"

import Choice from "../choice"

const Choices = ({ choices }) => (
  <div>
    {choices.map((choice, idx) => (
      <div key={`${choice.name}-${idx}`}>
        <Choice {...choice} idx={idx} />
      </div>
    ))}
  </div>
)

Choices.propTypes = {
  choices: PropTypes.array.isRequired
}

export default Choices
