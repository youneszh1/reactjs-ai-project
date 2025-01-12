import React, { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { Affix, CustomProvider, Header, Container, Panel } from 'rsuite';
import Sidenavbar from './Sidenav/Sidnav';
import CreativeNavbar from './Navbar';
import { useQuizContext } from './myContext.js';

const Layout = () => {
    const [active, setActive] = useState('home');
    const { dark } = useQuizContext();
    
    const navigate = useNavigate();

    function handleNavigation(eventKey){
        setActive(eventKey);
        switch (eventKey) {
            case 'Home' : navigate('/home'); break;
            case 'Chat Bot' : navigate('/chat-bot'); break;
            case 'Image Generator' : navigate('/image-generator'); break;
            // case 'categories-roles': navigate('/categories-roles'); break;
            default: break;
        }
    }
    return (
            <> 
                <div className="h-screen show-fake-browser sidebar-page hidePrint" >
                    <div className='h-screen my-1 mx-1 d-flex justify-content-between align-items-center'>
                        <Container className={` gap-1 border ${dark ? "border-gray-700" : "border-gray-200" } rounded shadow p-2 m-2 hidePrint `}>
                            <CustomProvider theme={'light'}>
                            <Sidenavbar active={active} onSelect={handleNavigation}/>
                            <Panel className='w-full rounded hidePrint' bordered>
                                <CreativeNavbar/>
                                <Panel className='w-full mt-2 rounded' bordered>
                                    <Outlet/>
                                </Panel>
                            </Panel>
                            </CustomProvider>
                        </Container>
                    </div>
                </div>
            </>
    );
};

export default Layout;
