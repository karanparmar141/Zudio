import React from 'react'
import { Routes, Route } from 'react-router-dom'

const Allrouter = () => {
    return (
        <>
            <Routes>
                <Route index element={<Home />} />
                <Route path='/Men' element={<Men/>} />
                <Route path='/Kids' element={<Women />} />
                <Route path='/Women' element={<Kids />} />
            </Routes>
        </>
    )
}

export default Allrouter