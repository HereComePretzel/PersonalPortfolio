import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from "react-social-icons"


function NavBar() {
    return (
        <header className="bg-blue-800">
            <div className="container mx-auto flex justify-between">
                <nav className='flex'>
                    <NavLink 
                    to="/" 
                    exact 
                    activeClassName='text-white'
                    className="inflex-flex items-center py-8 px-3 mr-4 text-white font-serif hover:text-red-800 text-3xl  tracking-widest">
                        Hey, I'm Austin!
                    </NavLink >

                    <NavLink to="/post" 
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-red-800"
                    activeClassName="text-white"
                    >
                        Blog Posts
                    </NavLink>

                    <NavLink to="/project" 
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-red-800"
                    activeClassName="text-white"
                    >
                    
                        Projects
                    </NavLink>
                    <NavLink 
                    to="/about" 
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-red-800"
                    activeClassName="text-white"
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
// added some text
//added some more text
export default NavBar