import React from 'react'

const UserInfo = (props) => {
    return (
        <div className="UserInfo" style={styles.userInfo}>
            <div className="Avatar" style={styles.avatar}></div>
            <div className="user" style={styles.user}>{props.user.username}</div>
            <a style={styles.a} href="#">
                <i className="fas fa-sign-out-alt"></i>
            </a>
        </div>
    )
}

const styles = {
    userInfo: {
        padding: '0 1rem',
        marginBottom: '1rem',
        display: 'flex',
        alignItems: 'center',
    },
    avatar: {
        marginRight: '0.5rem',
    },
    user: {
        flex: 1,
    },
    a: {
        border: 0,
        padding: 0,
        backgroundColor: 'transparent',
        color: 'rgba(255, 255, 255, 0.6)',
        fontSize: '1.2rem',
        transition: 'color 0.25s ease-out',
    },
}

export default UserInfo
