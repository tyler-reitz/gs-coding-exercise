import React from "react"
import PropTypes from "prop-types"

const Questions = ({ title, question, className }) => (
  <div className={className}>
    <h1 className="mb-3">{title}</h1>
    <p className="lead">{question}</p>
  </div>
)

Questions.propTypes = {
  title: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  className: PropTypes.string
}

export default Questions
