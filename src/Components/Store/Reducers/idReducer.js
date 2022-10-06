const initState = {
  id: 0,
  title: "",
};

export default (state = initState, action) => {
  switch (action.type) {
    case "Addby": {
      return {
        ...state,
        id: state.id + action.value,
      };
    }

    case "ChangeTitle": {
      return {
        ...state,
        title: action.newTitle,
      };
    }
    default:
      return state;
  }
};
