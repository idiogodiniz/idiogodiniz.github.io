import { BrowserRouter, Routes, Route } from 'react-router-dom';
import View from './components/view';
import Home from './pages/home';
import Api from './pages/api';
import Tools from './pages/tools';
import Finder from './pages/finder';
import Blog from './pages/blog';
import Notebook from './pages/notebook';

const Index = _ => (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<View><Home /></View>} />
            <Route path='/api' element={<View><Api /></View>} />
            <Route path='/tools' element={<View><Tools /></View>} />
            <Route path='/finder' element={<View><Finder /></View>} />
            <Route path='/blog' element={<View><Blog /></View>} />
            <Route path='/notebook' element={<View><Notebook /></View>} />
        </Routes>
    </BrowserRouter>
);

export default Index;