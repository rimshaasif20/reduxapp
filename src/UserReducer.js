import { ADD_USER, UPDATE_USER, DELETE_USER, SEARCH_USER, EDIT_USER } from './Actions';

const initialState = {
  users: [], // Initialize as an empty array
  editingUser: null,
};

const UserReducer = (state = initialState, action) => {
 
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
      case EDIT_USER:
      return {
        ...state,
        editingUser:  action.payload,
      };
    case  UPDATE_USER:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? action.payload : user
        ),
      };
   case DELETE_USER:
        return {
          ...state,
          users: state.users.filter((user) => user.id !== action.payload),
        };
      
        case SEARCH_USER:
          const searchQuery = action.payload.toLowerCase();
          const filteredUsers = state.users.filter((user) =>
            user.username.toLowerCase().includes(searchQuery)
          );
          return {
            ...state,
            users: filteredUsers,
          };
    default:
      return state;
  }
};

export default UserReducer;
