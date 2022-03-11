// import { v4 as uuidv4 } from 'uuid';
var initialState = {
    loading: true,
    selectedUser: null,
    pagination: null,
    page_data: [],
    users: []
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOADING": return { ...state, loading: action.payload };
        case 'FETCH_USERS': return { ...state, users: action.payload };
        case 'PAGE_STATUS': return { ...state, pagination: action.payload, selectedUser: null };
        case 'UPDATE_PAGE_DATA':
            let pageList = [...state.page_data];
            pageList[state.pagination.curPage - 1] = action.payload;
            return { ...state, page_data: pageList };
        case "ADD_SELECTED_USER": return { ...state, selectedUser: action.payload };
        case "REMOVE_SELECTED_USER": return { ...state, selectedUser: null };
        case "DELETE_USER":
            let selectUser = state.selectedUser;
            if (selectUser && selectUser.id === action.payload) {
                selectUser = null;
            }
            let userList = [...state.users];
            userList = userList.filter((user) => {
                return !(user.id === action.payload)
            })
            return { ...state, users: userList, selectedUser: selectUser };
        case "UPDATE_STATUS":
            let selectedUser = { ...state.selectedUser };
            if (selectedUser.id === action.payload.id) {
                selectedUser.status = action.payload.status
            }
            let usersList = [...state.users];
            usersList.forEach((user, index) => {
                if (user.id === action.payload.id) {
                    usersList[index].status = action.payload.status;
                }
            });
            return { ...state, users: usersList, selectedUser: selectedUser };
        case "UPDATE_ROLE":
            let usrList = [...state.users];
            usrList.forEach((user, index) => {
                if (user.id === action.payload.id) {
                    usrList[index].role = action.payload.role;
                }
            });
            return { ...state, users: usrList }
        default: return state;
    }
}
export default reducer;