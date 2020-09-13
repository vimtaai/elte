import { ADD_MESSAGE, DELETE_MESSAGE } from "./actions";

export function messagesReducer(state = [], action) {
  const { type } = action;
  console.log(type);

  if (type === ADD_MESSAGE) {
    const { message: messageToAdd } = action;
    return [...state, messageToAdd];
  }

  if (type === DELETE_MESSAGE) {
    const { message: messageToDelete } = action;
    return state.filter((message) => message.id !== messageToDelete.id);
  }

  return state;
}
