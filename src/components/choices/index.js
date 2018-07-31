import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import Choice from "../choice"

const Choices = ({ choices, className }) => (
  <div className={classNames(className, "d-md-flex", "justify-content-center")}>
    {choices.map((choice, idx) => (
      <div className="mx-md-3 my-1" key={`${choice.name}-${idx}`}>
        <Choice name="foo" {...choice} idx={idx} />
      </div>
    ))}
  </div>
)

Choices.propTypes = {
  choices: PropTypes.array.isRequired,
  className: PropTypes.string
}

export default Choices
