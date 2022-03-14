import React from 'react';
import { useDispatch } from 'react-redux';
import { updateStatus } from '../../../../../redux/actions';

function StatusDropDown({ user }) {
    const dispatch = useDispatch();
    return (
        <div className="dropdown m-0 p-0">
            <button className="btn btn-white dropdown-toggle m-0 p-0" type="button" id="statusDropDown" data-bs-toggle="dropdown" aria-expanded="false">
                <small>
                    {user.status}
                </small>
            </button>
            <ul className="dropdown-menu" aria-labelledby="statusDropDown">
                <li>
                    <div className="dropdown-item" onClick={() => dispatch(updateStatus(user, "Active"))}>
                        <small>
                            Active
                        </small>
                    </div>
                </li>
                <li>
                    <div className="dropdown-item" onClick={() => dispatch(updateStatus(user, "Inactive"))}>
                        <small>
                            Inactive
                        </small>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default StatusDropDown