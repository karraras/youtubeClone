function Reduce(state, action) {
  if (action.type === "active") {
    return {
      ...state,
      clicked: action.payload,
    };
  }
  if (action.type === "openSide") {
    return {
      ...state,
      openSide: !state.openSide,
    };
  }
  if (action.type === "getData") {
    return {
      ...state,
      results: action.payload,
    };
  }
  if (action.type === "Search") {
    return {
      ...state,
      searchTerm: action.payload,
    };
  }
  if (action.type === "LoadingTrue") {
    return {
      ...state,
      loading: true,
    };
  }
  if (action.type === "LoadingFalse") {
    return {
      ...state,
      loading: false,
    };
  }
  return state;
}

export default Reduce;
