import React from 'react';
import Pagination from '../Pagination/Pagination';
import HoverUser from './HoverUser/HoverUser';
import UserTable from './UserTable/UserTable';
function UserList() {
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

export default UserList