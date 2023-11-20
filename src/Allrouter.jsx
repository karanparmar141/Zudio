import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Zny from './pages/Zny'
import Zstories from './pages/Zstories'
import Zudio from './pages/Zudio'
import Zworld from './pages/Zworld'
const Allrouter = () => {
    return (
        <>
            <Routes>
                <Route index element={<Home />} />
                <Route path='/Zudio_near_you' element={<Zny/>} />
                <Route path='/Zstories' element={<Zstories />} />
                <Route path='/Zudio' element={<Zudio />} />
                <Route path='/Zworld' element={<Zworld />} />
            </Routes>
        </>
    )
}

export default Allrouter