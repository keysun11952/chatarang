import React from 'react'

const Sidebar = (props) => {
    return (
        <div className="Sidebar">
            {props.user.username}
        </div>
    )
}

export default Sidebar
