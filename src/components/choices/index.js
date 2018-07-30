import React from "react"
import PropTypes from "prop-types"

const Choices = ({ choices }) => (
  <div>{choices.map(choice => <div key={choice}>{choice}</div>)}</div>
)

Choices.propTypes = {
  choices: PropTypes.array.isRequired
}

export default Choices
