import React from "react"
import PropTypes from "prop-types"

const Questions = ({ title, question }) => (
  <div>
    <h1>{title}</h1>
    <p className="lead">{question}</p>
  </div>
)

Questions.propTypes = {
  title: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired
}

export default Questions
