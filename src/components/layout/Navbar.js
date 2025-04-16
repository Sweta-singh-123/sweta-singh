import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [activeItem, setActiveItem] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    // Update the active item based on the current route
    useEffect(() => {
        // Handle the Home route separately since its path is "/"
        if (location.pathname === '/') {
            setActiveItem('Home');
        } else {
            setActiveItem(location.pathname.slice(1).charAt(0).toUpperCase() + location.pathname.slice(2));
        }
    }, [location]);

    const getItemStyle = (item) => {
        return {
            color: activeItem === item ? 'rgb(243, 235, 240)' : '',
        };
    };

    const handleToggleClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleNavItemClick = (item) => {
        setActiveItem(item);
        setIsMenuOpen(false);
    };

    return (
        <div className='container-fluid fixed-top'>
            <div className='row' style={{ opacity: isMenuOpen ? '1.0' : '0.9' }}>
            <nav className="navbar navbar-expand-lg custom-bg">
                <div className="container-fluid nav-font">
                    <Link className="navbar-brand custom-font px-lg-3">Sweta Singh</Link>
                    <button  className="navbar-toggler" type="button" onClick={handleToggleClick} data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded={isMenuOpen} aria-label="Toggle navigation">
                        <span >{isMenuOpen ? '✖' : <span className="navbar-toggler-icon" style={{fontWeight:'900'}}></span>}</span>
                    </button>
                    <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item" onClick={() => handleNavItemClick('Home')}>
                                <Link className="nav-link" style={getItemStyle('Home')} to={'/'}>Home</Link>
                            </li>
                            <li className="nav-item" onClick={() => handleNavItemClick('About')}>
                                <Link className="nav-link" style={getItemStyle('About')} to={'/about'}>About</Link>
                            </li>
                            <li className="nav-item" onClick={() => handleNavItemClick('Project')}>
                                <Link className="nav-link" style={getItemStyle('Project')} to={'/project'}>Project</Link>
                            </li>
                            <li className="nav-item" onClick={() => handleNavItemClick('Contact')}>
                                <Link className="nav-link" style={getItemStyle('Contact')} to={'/contact'}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        </div>
    );
};

export default Navbar;
