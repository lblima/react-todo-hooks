export default function AppReducer(state, action) {
    switch (action.type) {
      case "reset":
        return action.payload;
      case "add": 
        return [
          ...state,
          {
            id: Date.now(),
            text: '',
            completed: false
          }
        ];
      case "delete":
        return state.filter(item => item.id !== action.payload);
      case "complete":
        return state.map(item => {
            if (item.id === action.payload) {
              return {
                ...item,
                completed: !item.completed
              }
            }
  
            return item;
          }
        );
      case "change":
        return state.map(item => {
            if (item.id === action.payload.id) {
              return {
                ...item,
                text: action.payload.text
              }
            }
  
            return item;
          }
        );
      default:
        break;
    }
  }