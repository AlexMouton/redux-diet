export const ActionTypeReset = (keys, init) =>
  (state = init, action) => {
    if(keys.includes(action.type)) {
      return init
    }
    return state
  }
