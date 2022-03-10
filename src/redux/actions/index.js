import { v4 as uuidv4 } from 'uuid';
export const fetchUsers = (page_num) => {
    return async (dispatch) => {
        try {
            dispatch(loading(true));
            const res = await fetch(`https://reqres.in/api/users?page=${page_num}`);
            let res_data = await res.json();
            dispatch(pagination(res_data.page, res_data.total_pages));
            console.log(res_data);
            res_data.data.forEach((user, index) => {
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
            dispatch(fetchUsersData(res_data.data));
        } catch (error) {
            console.log(error.message);
        } finally {
            setTimeout(() => dispatch(loading(false)), 500);
        }
    }
}
export const loading = (flag) => {
    return { type: 'LOADING', payload: flag }
}
export const pagination = (curPage, total_pages) => {
    return { type: 'PAGE_STATUS', payload: { curPage, total_pages } };
}
export const fetchUsersData = (users) => {
    return { type: 'FETCH_USERS', payload: users }
}
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