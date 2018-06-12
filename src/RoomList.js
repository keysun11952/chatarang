import React from 'react'

const RoomList = (props) => {
    return (
        <nav className="RoomList" style={styles.roomlist}>
            <h2 style={styles.h2}>Rooms</h2>
            <ul style={styles.ul}>
                <li style={styles.li}><a style={styles.a} href="#">general</a></li>
                <li style={styles.li}><a style={styles.a} href="#">random</a></li>
            </ul>
        </nav>
    )
}

const styles = {
    roomlist: {
        padding: '0 1rem',
    },
    h2: {
        fontSize: '1rem',
    },
    ul: {
        listStyle: 'none',
        marginLeft: 0,
        paddingLeft: 0,
    },
    li: {
        marginBottom: '0.5rem',
    },
    a: {
        display: 'block',
        color: 'whitesmoke',
        textDecoration: 'none',
    },
}

export default RoomList