import React from 'react'

function Email({ email }) {
    return (
        <div className="text-muted">
            <small>
                {email}
            </small>
        </div>
    )
}

export default Email