import { BrowserRouter, Routes, Route } from 'react-router';

import Inicio from './pages/Inicio.jsx';
import Multiplicar from './pages/Multiplicar.jsx';

export default function Navegacao() {
    return (
        <BrowserRouter>
            <Route path='/'  element={<Inicio/>}/>
            <Route path='/multiplicar'  element={<Multiplicar/>}/>
        </BrowserRouter>
    );
}