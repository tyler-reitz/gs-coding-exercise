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
  title: "What is Lorem Ipsum…",
  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
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
  SET_CURRENT_STEP: "SET_CURRENT_STEP"
}

export const loadAssessment = () => ({
  type: actionTypes.LOAD_ASSESSMENT,
  payload: stateShape
})

export const setCurrentStep = (step) => ({
  type: actionTypes.SET_CURRENT_STEP,
  payload: { step }
})
