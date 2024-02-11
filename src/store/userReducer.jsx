export const ADD_USER = "users/addUser";
export const SET_USERS = "users/setUsers";
export const DELETE_USER = "users/deleteUser";
export const SET_CURRENT_PAGE = "users/setCurentPage";
export const SET_TOTAL_PAGES = "users/setTotalPages";
export const SET_SEARCH = "users/setSearch";
export const SET_SORT_TOKENS = "users/setSortTokens";
export const CURRENT_ID = "users/currentId";

 const initialState = {
   users: [],
   currentPage: 1,
 };

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
        totalCount: action.payload.totalСount,
      };
    case SET_USERS:
      return { ...state, users: action.payload };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case SET_TOTAL_PAGES:
      return {
        ...state,
        totalPages: action.payload,
      };
    //ПОИСК input
    case SET_SEARCH:
      return { ...state, search: action.payload };
    case SET_SORT_TOKENS:
      return { ...state, orderBy: action.payload };
    case CURRENT_ID:
      return { ...state, currentId: action.payload };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    default:
      return state;
  }
};

export const setCurrentPage = (page) => ({
  type: SET_CURRENT_PAGE,
  payload: page
});
 export const setSortTokens = (orderBy) => ({
   type: SET_SORT_TOKENS,
   payload: orderBy,
 });

