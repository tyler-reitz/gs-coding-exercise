export const incrementStep = (step, total) => 
  step < total ? step + 1 : total

export const decrementStep = (step, total) =>
  step > 0 ? step - 1 : 0
