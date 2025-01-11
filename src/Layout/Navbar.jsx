import React, { useState, useContext, useEffect } from 'react';
import { Navbar, Nav, IconButton } from 'rsuite';
import HomeIcon from '@rsuite/icons/legacy/Home';
import UserIcon from '@rsuite/icons/legacy/User';
import FolderFillIcon from '@rsuite/icons/FolderFill';
import { FaSun, FaMoon } from 'react-icons/fa';



import { useQuizContext } from '../Context/Context';

function CreativeNavbar({}) {
    const { dark, darkMode } = useQuizContext();


    return (
    <>
        <Navbar className={`rounded-md border ${dark ? "border-gray-700" : "border-gray-200" }  `} appearance="default">
            {/* <Nav className="d-none d-md-flex">
                <Nav.Item icon={<HomeIcon />}>Home</Nav.Item>
                <Nav.Item icon={<FolderFillIcon />}>My Quizzes</Nav.Item>
            </Nav> */}
            <Nav appearance="default" pullRight className="d-none d-md-flex">
                <IconButton
                    className="my-2 mx-2"
                    title={dark ? 'LIGHT' : 'DARK'}
                    icon={dark ? <FaSun style={{ color: 'gold', fontSize: 20 }} /> : <FaMoon style={{ fontSize: 20 }} />}
                    onClick={darkMode}
                />
                <Nav.Item icon={<UserIcon color="red" />}>Login</Nav.Item>
            </Nav>
        </Navbar>
    </>
    );
}

export default CreativeNavbar;
