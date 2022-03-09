import React from 'react';
import StatusDropDown from './StatusDropDown';

function Status({ user }) {
    if (user.status === "Active") {
        return (
            <div className="text-success">
                <small>
                    {user.status}
                </small>
            </div>);
    } else {
        return <StatusDropDown user={user} />
    }
}

export default Status