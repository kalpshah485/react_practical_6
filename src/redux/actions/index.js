import { v4 as uuidv4 } from 'uuid';
export const fetchUsers = (num) => {
    return async (dispatch) => {
        const res = await fetch('https://reqres.in/api/users?page=1');
        let users = await res.json();
        users.data.forEach((user, index) => {
            console.log(typeof index);
            user.id = uuidv4();
            if (Math.random() >= 0.5) {
                user.status = "Active";
            } else {
                user.status = "Inactive";
            }
            if (index === 0) {
                user.status = "Active";
                user.role = "Owner";
            } else {
                if (Math.random() >= 0.5) {
                    user.role = "Read";
                } else {
                    user.role = "Manager";
                }
            }
        })
        dispatch({ type: 'FETCH_USERS', payload: users.data });
    }
}
// export const loaded = () => {
//     return {type: 'LOADED',task: false}
// }
export const updateStatus = (user, status) => {
    return { type: 'UPDATE_STATUS', payload: { id: user.id, status: status } }
}
export const updateRole = (user, role) => {
    return { type: 'UPDATE_ROLE', payload: { id: user.id, role: role } }
}
export const deleteUser = (id) => {
    return { type: 'DELETE_USER', payload: id }
}
export const addSelectedUser = (user) => {
    return { type: 'ADD_SELECTED_USER', payload: user }
}