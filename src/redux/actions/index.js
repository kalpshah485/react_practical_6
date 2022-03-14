import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';

export const fetchUsers = (page_num, total_pages, page_data) => {
    return async (dispatch) => {
        if (page_data && page_data[page_num - 1]) {
            dispatch(pagination(page_num, total_pages));
            dispatch(fetchUsersData(page_data[page_num - 1]));
        } else {
            try {
                dispatch(loading(true));
                const res = await fetch(`https://reqres.in/api/users?page=${page_num}`);
                let res_data = await res.json();
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
                });
                dispatch(pagination(res_data.page, res_data.total_pages));
                dispatch(updatePageData(res_data.data));
                dispatch(fetchUsersData(res_data.data));
                toast.success(`page ${page_num} loaded successfully.`,{
                    autoClose: 2000,
                    theme: "colored"
                })
            }
            catch (error) {
                console.log(error.message);
                toast.error(error.message,{
                    autoClose: 2000,
                    theme: "colored"
                });
            } finally {
                dispatch(loading(false));
            }
        }
    }
}
export const loading = (flag) => {
    return { type: 'LOADING', payload: flag }
}
export const pagination = (curPage, total_pages) => {
    return { type: 'PAGE_STATUS', payload: { curPage, total_pages } };
}
export const updatePageData = (data) => {
    return { type: 'UPDATE_PAGE_DATA', payload: data };
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