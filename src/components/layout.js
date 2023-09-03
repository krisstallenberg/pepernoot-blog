import React from "react";
import { Link } from "gatsby";

const pageStyle = {
    margin: `0 auto`, 
    maxWidth: 650, 
    padding: `0 1rem`,
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
                <nav className="my-5">
                    <ul className="font-serif" style={navList}>
                        <li className="hover:bg-slate-200 px-3 py-1 rounded hover:cursor-pointer" style={navItem}>
                            <Link to="/">Home</Link>
                        </li>
                        <li className="hover:bg-slate-200 px-3 py-1 rounded hover:cursor-pointer" style={navItem}>
                            <Link to="/about">About</Link>
                        </li>
                        <li className="hover:bg-slate-200 px-3 py-1 rounded hover:cursor-pointer" style={navItem}>
                            <Link to="/notes">Notes</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            {children}
            <footer className="font-sans font-light">Kris © {new Date().getFullYear()}</footer>
        </main>
    )
}

export default Layout