import React from 'react';

const Navbar = () => {
    return (
        <div style={styles.nav}>
            <div style={styles.cartIconContainer}>
                <img style={styles.cartIcon} src="https://cdn-icons-png.flaticon.com/128/3144/3144456.png" alt="cart-icon" />
                <span style={styles.cartCount}>3</span>
            </div>
        </div>
    )
}

const styles = {
    cartIcon: {
        height: 32,
        marginRight: 20
    },
    nav: {
        height: 70,
        background: '#4389ef',
        display:  'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    cartCount: {
        background: 'yellow',
        padding: '4px 8px',
        borderRadius: '50%',
        position: 'absolute',
        top: -9,
        right: 0
    },
    cartIconContainer: {
        position: 'relative'
    }
}

export default Navbar;