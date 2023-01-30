import React from "react";
import { Link } from "gatsby";

const pageStyle = {
    margin: `0 auto`, 
    maxWidth: 650, 
    padding: `0 1rem`,
    display: `grid`,
    gridTemplateRows: `1fr auto`,
    minHeight: `100vh`
}

const navList = {
    display: `flex`,
    listStyleType: `none`,
    paddingLeft: 0
}

const navItem = {
    marginRight: `1rem`
}

const Layout = ({ children }) => {
    return (
        <main style={pageStyle}>
            <header>
                <nav>
                    <ul style={navList}>
                        <li style={navItem}>
                            <Link to="/">Home</Link>
                        </li>
                        <li style={navItem}>
                            <Link to="/about">About</Link>
                        </li>
                        <li style={navItem}>
                            <Link to="/notes">Notes</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            {children}
            <footer>Kris © {new Date().getFullYear()}</footer>
        </main>
    )
}

export default Layout