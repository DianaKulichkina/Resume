import React from 'react';
import { Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Home from './components/Home/Home';
import Contact from './components/Contacts/Contact';
import AboutMe from './components/AboutMe/AboutMe';
import Languages from './components/Languages';
import Programming from './components/Programming';
import Libraries from './components/Libraries';
import Other from './components/Other';
import Experience from './components/Experience/Experience';
import GlobusBank from './components/Experience/GlobusBank';
import AlfaBank from './components/Experience/AlfaBank';
import ABank from './components/Experience/ABank';
import Education from './components/Education/Education';

import './App.css';


function App() {


  return (
    <Layout>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/aboutme" element={<AboutMe />} />
            <Route exact path="/contacts" element={<Contact />} />
            <Route exact path='/languages' element={<Languages/>}/>
            <Route exact path='/programming'  element={<Programming />}/>
            <Route exact path='/libraries' element={<Libraries/>}/>
            <Route exact path='/other' element={<Other/>}/>
            <Route exact path='/experience' element={<Experience/>} /> 
            <Route exact path='/globusBank' element={<GlobusBank/>}/>
            <Route exact path='/alfaBank' element={<AlfaBank/>}/>
            <Route exact path='/aBank' element={<ABank/>}/>
            <Route exact path='/education' element={<Education />}/>
        </Routes>
    </Layout>
  );
}

export default App;
