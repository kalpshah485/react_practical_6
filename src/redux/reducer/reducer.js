import { v4 as uuidv4 } from 'uuid';
var initialState = {
    loading: true,
    selectedUser: null,
    users: [
        {
            id: uuidv4(),
            first_name: 'John1',
            last_name: 'Wick1',
            email: 'john1@example.com',
            avatar: "https://reqres.in/img/faces/1-image.jpg",
            status: "Active",
            role: "Owner"
        },
        {
            id: uuidv4(),
            first_name: 'John2',
            last_name: 'Wick2',
            email: 'john2@example.com',
            avatar: "https://reqres.in/img/faces/2-image.jpg",
            status: "Inactive",
            role: "Read"
        },
        {
            id: uuidv4(),
            first_name: 'John3',
            last_name: 'Wick3',
            email: 'john3@example.com',
            avatar: "https://reqres.in/img/faces/3-image.jpg",
            status: "Inactive",
            role: "Read"
        },
        {
            id: uuidv4(),
            first_name: 'John4',
            last_name: 'Wick4',
            email: 'john4@example.com',
            avatar: "https://reqres.in/img/faces/4-image.jpg",
            status: "Inactive",
            role: "Read"
        },
        {
            id: uuidv4(),
            first_name: 'John5',
            last_name: 'Wick5',
            email: 'john5@example.com',
            avatar: "https://reqres.in/img/faces/5-image.jpg",
            status: "Inactive",
            role: "Read"
        },
        {
            id: uuidv4(),
            first_name: 'John6',
            last_name: 'Wick6',
            email: 'john6@example.com',
            avatar: "https://reqres.in/img/faces/6-image.jpg",
            status: "Inactive",
            role: "Manager"
        },
        {
            id: uuidv4(),
            first_name: 'John7',
            last_name: 'Wick7',
            email: 'john7@example.com',
            avatar: "https://reqres.in/img/faces/7-image.jpg",
            status: "Inactive",
            role: "Read"
        },
        {
            id: uuidv4(),
            first_name: 'John8',
            last_name: 'Wick8',
            email: 'john8@example.com',
            avatar: "https://reqres.in/img/faces/8-image.jpg",
            status: "Inactive",
            role: "Read"
        },
        {
            id: uuidv4(),
            first_name: 'John9',
            last_name: 'Wick9',
            email: 'john9@example.com',
            avatar: "https://reqres.in/img/faces/9-image.jpg",
            status: "Inactive",
            role: "Read"
        },
        {
            id: uuidv4(),
            first_name: 'John10',
            last_name: 'Wick10',
            email: 'john10@example.com',
            avatar: "https://reqres.in/img/faces/10-image.jpg",
            status: "Inactive",
            role: "Read"
        },
        {
            id: uuidv4(),
            first_name: 'John11',
            last_name: 'Wick11',
            email: 'john11@example.com',
            avatar: "https://reqres.in/img/faces/11-image.jpg",
            status: "Inactive",
            role: "Read"
        },
        {
            id: uuidv4(),
            first_name: 'John12',
            last_name: 'Wick12',
            email: 'john12@example.com',
            avatar: "https://reqres.in/img/faces/12-image.jpg",
            status: "Inactive",
            role: "Read"
        }
    ]
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_SELECTED_USER": return { ...state, selectedUser: action.payload };
        case "REMOVE_SELECTED_USER": return { ...state, selectedUser: null };
        case "DELETE_USER":
            let selectUser = state.selectedUser;
            if (selectUser.id === action.payload) {
                selectUser = null;
            }
            let userList = state.users;
            userList = userList.filter((user) => {
                return !(user.id === action.payload)
            })
            return { ...state, users: userList, selectedUser: selectUser };
        case "UPDATE_STATUS":
            let selectedUser = {...state.selectedUser};
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