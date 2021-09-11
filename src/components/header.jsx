import React from 'react';
import '../css/header.css';

function Header (props){
    return(
    <section className="headerContent">
        <h1>logo</h1>
        {/* logo com imagen */}
        <div className="navContent">
            <nav className="navImage"></nav>
            <nav className="navImage"></nav>
            <nav className="navImage"></nav>
        </div>
    </section>
    )
}

export default Header;