import dataState from "../state/dataState";

export function textReducer(state = dataState, action) {
    const copyState = { ...state };
    switch (action.type) {
        case 'changeText':
            copyState.data = {
                ...copyState.data,
                text: action.payload.add
            }
            break;
        case 'inputBulk':
            copyState.data.saveData = [...action.payload.data.map(user => user.name)]
            break;

    }
    return copyState
}