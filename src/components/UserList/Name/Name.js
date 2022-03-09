import React from 'react'

function Name({ first_name, last_name }) {
    return (
        <small>
            <strong>
                {first_name + " " + last_name}
            </strong>
        </small>
    )
}

export default Name