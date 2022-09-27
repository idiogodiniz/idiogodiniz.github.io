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
            <Route exact path='/api' element={<View><Api /></View>} />
            <Route exact path='/tools' element={<View><Tools /></View>} />
            <Route exact path='/finder' element={<View><Finder /></View>} />
            <Route exact path='/blog' element={<View><Blog /></View>} />
            <Route exact path='/notebook' element={<View><Notebook /></View>} />
        </Routes>
    </BrowserRouter>
);

export default Index;