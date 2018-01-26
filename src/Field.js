export const Field = (parent, key, foreign) => {
  foreign = foreign || key
  return (state, action) => {
    const init = ''
    state = state || init
    if(action.type == `set ${parent}`) {
      return action[parent][foreign] && {...action[parent][foreign]} || init
    }
    else if (aciton.type == `set ${key}`) {
      return action[key] && {...action[key]} || init
    }
    return state
  }
}
