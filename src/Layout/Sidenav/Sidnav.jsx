/* eslint-disable react/prop-types */
import { useState } from 'react';

import { Affix, Nav, Sidebar, Sidenav } from 'rsuite';

//! icons
import HomeIcon from '@rsuite/icons/legacy/Home';
import ChatIcon from '@rsuite/icons/legacy/Android';
import ImageIcon from '@rsuite/icons/legacy/Image';
import GroupIcon from '@rsuite/icons/legacy/Group';
import CarIcon from '@rsuite/icons/legacy/Car';
import BuildingIcon from '@rsuite/icons/legacy/Building';
import NewsIcon from '@rsuite/icons/legacy/NewspaperO';
import MonitorIcon from '@rsuite/icons/legacy/Male';
import FactureIcon from '@rsuite/icons/legacy/Ticket';
import CogIcon from '@rsuite/icons/legacy/Cog';

//! navToggle component
import SidebarToggle from './SidebarToggle';



const Sidenavbar = ({ active, onSelect, ...props }) => {
    const [expand, setExpand] = useState(false);


    window.addEventListener('resize', () => {
        let windowWidth = window.innerWidth;
        windowWidth < 700 ? setExpand(false) : setExpand(expand);
    });



    return (
        <div>
            <Sidebar 
            style={{ display: 'flex', flexDirection: 'column',  }}
            width={expand ? 200 : 56}
            collapsible 
            >
            <Sidenav expanded={expand} defaultOpenKeys={['3']} appearance="subtle">
                <Sidenav.Body>
                    <Nav {...props}  activeKey={active} onSelect={onSelect}>
                        <Nav.Item eventKey="Home" icon={<HomeIcon />}>Home</Nav.Item>
                        <Nav.Item eventKey="Chat Bot" icon={<ChatIcon />}>Chat Bot</Nav.Item>
                        <Nav.Item eventKey="Image Generator" icon={<ImageIcon />}>Image Generator</Nav.Item>
                        
                    </Nav>
                </Sidenav.Body>
            </Sidenav>
                <SidebarToggle expand={expand} onChange={() => setExpand(!expand)} />
            </Sidebar>
        </div>
    );
}

export default Sidenavbar;
