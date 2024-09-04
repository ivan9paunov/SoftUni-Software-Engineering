import { Routes, Route } from 'react-router-dom';

import { AuthContextProvider } from './contexts/AuthContext.jsx';

import Header from './components/header/Header.jsx';
import Home from './components/home/Home.jsx';
import Login from './components/login/Login.jsx';
import Register from './components/register/Register.jsx';
import Logout from './components/logout/Logout.jsx';
import GameList from './components/game-list/GameList.jsx';
import GameCreate from './components/game-create/GameCreate.jsx';
import GameDetails from './components/game-details/GameDetails.jsx';
import GameEdit from './components/game-edit/GameEdit.jsx';
import GuestGuard from './components/common/GuestGuard.jsx';
import UserGuard from './components/common/UserGuard.jsx';
import UnauthorizedGuard from './components/common/UnauthorizedGuard.jsx';

function App() {
    return (
        <AuthContextProvider>
            <div id="box">
                <Header />

                <main id="main-content">
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/games' element={<GameList />} />
                        <Route path='/games/:gameId/details' element={<GameDetails />} />
                        <Route element={<UnauthorizedGuard />}>
                            <Route path='/games/:gameId/edit' element={<GameEdit />} />
                        </Route>
                        <Route element={<GuestGuard />}>
                            <Route path='/games/create' element={<GameCreate />} />
                            <Route path='/logout' element={<Logout />} />
                        </Route>
                        <Route element={<UserGuard />}>
                            <Route path='/login' element={<Login />} />
                            <Route path='/register' element={<Register />} />
                        </Route>
                    </Routes>
                </main>
            </div>
        </AuthContextProvider>
    );
}

export default App;
