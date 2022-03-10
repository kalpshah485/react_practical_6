import React from 'react';
import { useSelector } from 'react-redux';
import Pagination from '../Pagination/Pagination';
import HoverUser from './HoverUser/HoverUser';
import UserTable from './UserTable/UserTable';
function UserList() {
    const loading = useSelector(state => state.reducer.loading);
    if (loading) {
        return (
            <div className="container-fluid opacity-50">
                <div className={`d-flex justify-content-center loading`}>
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <>
                <div className={`row m-0`}>
                    <div className="col-8">
                        <UserTable />
                        <Pagination />
                    </div>
                    <div className="col">
                        <HoverUser />
                    </div>
                </div>
            </>
        )
    }
}

export default UserList