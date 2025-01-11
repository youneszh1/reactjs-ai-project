/* eslint-disable react/prop-types */
import { Navbar, Nav, Loader, Message } from 'rsuite';
import CogIcon from '@rsuite/icons/legacy/Cog';
import AngleLeftIcon from '@rsuite/icons/legacy/AngleLeft';
import AngleRightIcon from '@rsuite/icons/legacy/AngleRight';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SidebarToggle = ({ expand, onChange }) => {
    const navigate = useNavigate();

    

    return (
    <Navbar appearance="subtle" className="nav-toggle">
            <Nav>
                <Nav.Menu noCaret placement="topStart" trigger="click" title={<CogIcon spin style={{ width: 20, height: 20 }} size="sm" />}>
                    <Nav.Item  onClick={() => navigate('/help')}><i className="bi bi-patch-question-fill"> </i>Help</Nav.Item>
                    <Nav.Item onClick={() => {navigate('/profile-setting')}}><i className="bi bi-person-fill-gear"> </i>Profile Settings</Nav.Item>
                    <Nav.Item onClick={() => navigate('/parametres')}><i className="bi bi-gear-wide-connected"> </i>Parametres</Nav.Item>
                    <Nav.Item ><i className="bi bi-door-open-fill"> </i>Deconnecter</Nav.Item>
                </Nav.Menu>
                </Nav>

                <Nav pullRight>
                <Nav.Item onClick={onChange} style={{ width: 56, textAlign: 'center' }}>
                    {expand ? <AngleLeftIcon /> : <AngleRightIcon />}
                </Nav.Item>
            </Nav>
            
    </Navbar>
    );
};

export default SidebarToggle