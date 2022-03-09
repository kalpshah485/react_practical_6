import React from 'react'
import { useDispatch } from 'react-redux'
import { updateRole } from '../../../../../redux/actions';

function RoleDropDown({ user }) {
  const dispatch = useDispatch();
  return (
    <div className="dropdown">
      <button className="btn btn-white dropdown-toggle" type="button" id="roleDropDown" data-bs-toggle="dropdown" aria-expanded="false">
        <small>
          {user.role}
        </small>
      </button>
      <ul className="dropdown-menu" aria-labelledby="roleDropDown">
        <li>
          <div className="dropdown-item" onClick={() => dispatch(updateRole(user, "Read"))}>
            <small>
              Read
            </small>
          </div>
        </li>
        <li>
          <div className="dropdown-item" onClick={() => dispatch(updateRole(user, "Manager"))}>
            <small>
              Manager
            </small>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default RoleDropDown