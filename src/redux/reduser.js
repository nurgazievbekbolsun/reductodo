const initialState = {
  todo: [],
};
export const Reduser = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todo: [
          ...state.todo,
          {
            id: state.todo.length
              ? state.todo[state.todo.length - 1].id + 1
              : 1,
            text: action.payload,
            // image:action.payload,
          },
        ],
      };
    case "DEL_TODO":
      return {
        ...state,
        todo: state.todo.filter((el) => el.id !== action.payload.id),
      };
      case 'ALL_DEL':
        return {...state,todo: state.todo.filter((el) => el.id === action.payload.id)};
    default:
      return state;
  }
};
