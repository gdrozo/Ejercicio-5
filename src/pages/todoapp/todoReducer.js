export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'add':
      return [...state, action.payload];
    case 'delete':
          return state.filter(e => e.id !== action.payload);
    case 'toggle':
      return state.map(e => {
        if(e.id === action.payload){
          return {...e, done: !e.done}
        }
        return e
      })
    default:
      return state;
  }
};
