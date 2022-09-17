import { BrowserRouter, Routes, Route } from 'react-router-dom';
import View from './components/view';
import Home from './pages/home/index';
import Services from './pages/services/index';
import Works from './pages/works/index';
import Api from './pages/apiUsage/index';
import Caderno from './pages/caderno/index'
import About from './pages/aboutMe/index';

const Index = _ => (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<View><Home /></View>} />
            <Route path='/services' element={<View><Services></Services></View>} />
            <Route path='/works' element={<View><Works></Works></View>} />
            <Route path='/api' element={<View><Api></Api></View>} />
            <Route path='/caderno' element={<View><Caderno></Caderno></View>} />
            <Route path='/aboutme' element={<View><About></About></View>} />
        </Routes>
    </BrowserRouter>
);

export default Index;