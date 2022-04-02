import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';
import SIFFLogo from '../images/SIFF-Name-Logo.jpg';
import menu from '../data/menuHeader.json';

const Navbar = () => {
	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!open);
	};

	const closeMenu = () => {
		setOpen(false);
	};

	const MenuItem = (props) => {
		const {data, closeMenu} = props;
		return data.MenuHeader.map((data) => {
			return (
				<li className="nav-item" key={data.id}>
					<Link to={data.Path} className="nav-link" onClick={closeMenu}>
						{data.Page}
					</Link>
				</li>)}
		);
	}

	return (
		<nav className="navbar">
			<Link to="/" className="nav-logo">
				<img src={SIFFLogo} alt="SIFF" className='logo'></img>
			</Link>
			<div onClick={handleClick} className="nav-icon">
				{open ? <FiX /> : <FiMenu />}
			</div>
			<ul className={open ? 'nav-links active' : 'nav-links'}>
				<MenuItem data={menu} closeMenu={closeMenu}/>
			</ul>
		</nav>
	);
};

export default Navbar;