export const Sequence = (reducers) =>
  (state, action) =>
    reducers.map( (reducer) => reducer(state, action) ).find( (s) => s != state ) || state
