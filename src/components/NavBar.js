import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from "react-social-icons"


function NavBar() {
    return (
        <header className="bg-blue-900">
            <div className="container mx-auto flex justify-between">
                <nav className='flex'>
                    <NavLink 
                    to="/" 
                    exact 
                    activeClassName='text-white'
                    className="inflex-flex items-center py-8 px-3 mr-4 text-red-100 hover:text-red-800 text-4xl font-bold font-courier tracking-widest">
                        Austin
                    </NavLink >

                    <NavLink to="/post" 
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-red-500"
                    activeClassName="text-red-500 bg-red-700"
                    >
                        Blog Posts
                    </NavLink>

                    <NavLink to="/project" 
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-red-500"
                    activeClassName="text-red-100 bg-red-700"
                    >
                    
                        Projects
                    </NavLink>
                    <NavLink 
                    to="/about" 
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-red-500"
                    activeClassName="text-red-100 bg-red-700"
                    >
                        About Me
                    </NavLink>
                </nav>
                <div className='inline-flex py-3 px-3 my-6'>
                    <SocialIcon 
                    url="https://www.linkedin.com/in/austin-oie-4a176519/" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}}/>
                    <SocialIcon
                    url="https://github.com/HereComePretzel" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}} />
                    <SocialIcon 
                    url="https://www.youtube.com/channel/UC8bX4xf8hWyTI-iciMzyPog" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}}/>
                </div>
            </div>
        </header>
    )
}

export default NavBar