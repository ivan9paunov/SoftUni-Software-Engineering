import { Routes, Route } from 'react-router-dom';

import Header from './components/header/Header.jsx';
import Home from './components/home/Home.jsx';
import Login from './components/login/Login.jsx';
import Register from './components/register/Register.jsx';
import GameList from './components/game-list/GameList.jsx';
import GameCreate from './components/game-create/GameCreate.jsx';

function App() {
    return (
        <div id="box">
            <Header />

            <main id="main-content">
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/games' element={<GameList />} />
                    <Route path='/games/create' element={<GameCreate />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;