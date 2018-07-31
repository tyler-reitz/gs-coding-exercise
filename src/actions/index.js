export const stateShape = [{
  title: "What is Lorem Ipsum…",
  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  choices: [{
    text: "yes",
    value: 1
  }, {
    text: "no",
    value: 0
  }]
}, {
  title: "Where Does It Come From",
  text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a place of classical Latin Literature from 45 BC, making it over 200 years old.",
  choices: [{
    text: "Whaterver!",
    value: 1
  }, {
    text: "Ohk!!",
    value: 2
  }, {
    text: "Hmmm… Maybe",
    value: 3
  }, {
    text: "Yeah!!",
    value: 4
  }]
}, {
  title: "Actual Lorem Ipsum",
  text: "loremaLoressitatibus aliquid sunt voluptatibus at recusandae tenetur. Facere iusto ut vel ducimus tenetur. Dolore rem magni aut molestiae fugiat magni ullam sed.",
  choices: [{
    text: "yes",
    value: 1
  }, {
    text: "no",
    value: 0
  }]
}]

export const actionTypes = {
  LOAD_ASSESSMENT: "LOAD_ASSESSMENT",
  SET_CURRENT_STEP: "SET_CURRENT_STEP",
  SET_SCORE: "SET_SCORE"
}

export const loadAssessment = () => ({
  type: actionTypes.LOAD_ASSESSMENT,
  payload: stateShape
})

export const setCurrentStep = (step, total) => ({
  type: actionTypes.SET_CURRENT_STEP,
  payload: { step, total }
})

export const setScore = (value, step) => ({
  type: actionTypes.SET_SCORE,
  payload: { value, step }
})
