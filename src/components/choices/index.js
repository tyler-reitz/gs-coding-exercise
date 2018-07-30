import React from "react"
import PropTypes from "prop-types"

import Choice from "../choice"

const Choices = ({ choices, className }) => (
  <div className={className}>
    {choices.map((choice, idx) => (
      <div key={`${choice.name}-${idx}`}>
        <Choice {...choice} idx={idx} />
      </div>
    ))}
  </div>
)

Choices.propTypes = {
  choices: PropTypes.array.isRequired,
  className: PropTypes.string
}

export default Choices
