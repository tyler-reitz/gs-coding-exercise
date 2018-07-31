import React from "react"
import PropTypes from "prop-types"

const Score = ({ score = [] }) => <div>
    <h1>Your Score Is!</h1>
    <p className="display-4">{score.reduce((acc, s) => acc + s, 0)}</p>
  </div>

Score.propTypes = {
  score: PropTypes.array.isRequired
}

export default Score
