const initialState = {
    todo: []
}
export const Reduser = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_TODO' :
        return {...state, todo:[...state.todo,
            {
                id: state.todo.length ? state.todo[state.todo.length -1 ].id + 1 : 1,
                text:action.payload,
                image:action.payload,
             }]};

        default:
            return state;
    }
}