import React from 'react';
import HoverUser from './HoverUser/HoverUser';
import UserTable from './UserTable/UserTable';
function UserList() {
    return (
        <>
            <div className="row m-0">
                <div className="col-8">
                    <UserTable />
                </div>
                <div className="col">
                    <HoverUser />                    
                </div>
            </div>
        </>
    )
}

export default UserList