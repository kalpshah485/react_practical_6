import React from 'react'

import RoleDropDown from './RoleDropDown'

function Role({ user }) {
  if (user.role === "Owner") {
    return (
      <small>
        <strong>
          {user.role}
        </strong>
      </small>
    );
  } else {
    return (<RoleDropDown user={user} />);
  }
}

export default Role