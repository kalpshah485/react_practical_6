import React from 'react'
import { useDispatch } from 'react-redux';
import DeleteBtn from './Btns/DeleteBtn'
import LockBtn from './Btns/LockBtn'
import { addSelectedUser } from '../../../../redux/actions'
import Avatar from '../../Avatar/Avatar'
import Email from '../../Email/Email'
import Name from '../../Name/Name'
import Role from './Role/Role'
import Status from './Status/Status'

function User({ user }) {
    const dispatch = useDispatch();
    return (
        <tr>
            <td>
                <div className="row" onMouseEnter={() => dispatch(addSelectedUser(user))}>
                    <div className="col-2">
                        <Avatar avatar={user.avatar} size="img-small" />
                    </div>
                    <div className="col m-auto">
                        <Name first_name={user.first_name} last_name={user.last_name} />
                        <Email email={user.email} />
                    </div>
                </div>
            </td>
            <td>
                <Status user={user} />
            </td>
            <td>
                <div className="row">
                    <div className="col">
                        <Role user={user} />
                    </div>
                    <div className="col text-muted">
                        {user.role === 'Owner' ? <LockBtn /> : <DeleteBtn user={user} />}
                    </div>
                </div>
            </td>
        </tr>
    )
}

export default User