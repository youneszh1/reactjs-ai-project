import { useState } from 'react'
import { Button, CustomProvider, DatePicker } from 'rsuite'
import Layout from './Layout/Layout'
import { Route, Routes } from 'react-router-dom';
import NotFound from './NotFound';
import { MyContext } from './Layout/myContext.js';
import PollinationsChat from './Components/AiPollinations/PollinationsChat';
import PollinationsImageGenerator from './Components/AiPollinations/PollinationsImageGenerator';
import HomePage from './Components/Quizzes/HomePage.jsx';

function App() {
  // const [activeKey, setActiveKey] = useState('1');
  // const [openKeys, setOpenKeys] = useState(['3', '4']);
  // const [expanded, setExpand] = useState(true);
  
  //! Handling Dark Mode
  const [dark, setDark] = useState(false);
  const darkMode = () => {
    setDark(!dark);
  };
  
  return (
    <CustomProvider theme={dark ? 'dark' : 'light'}>
      <MyContext.Provider value={{dark, setDark, darkMode}} >
        <div className='p-2'>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/image-generator" element={<PollinationsImageGenerator />} />
              <Route path="/chat-bot" element={<PollinationsChat />} />
              
              {/* //! NOT FOUND 404 */}
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </div>
      </MyContext.Provider>
    </CustomProvider>
  )
}

export default App
