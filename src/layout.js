import { Routes, Route } from 'react-router-dom';
import User from './components/User/User';
import Admin from './components/Admin/Admin';
import HomePage from './components/Home/HomePage';
import ManageUser from './components/Admin/Content/ManageUser';
import Dashboard from './components/Admin/Content/DashBoard';
import Login from './components/Auth/Login';
import App from './App';
import { ToastContainer } from 'react-toastify';
import Register from './components/Auth/Register';

const Layout = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<App />}>
                    <Route index element={<HomePage />} />
                    <Route path='users' element={<User />} />
                </Route>
                <Route path='/admins' element={<Admin />}>
                    <Route index element={<Dashboard />} />
                    <Route path='manage-users' element={<ManageUser />} />
                </Route>
                <Route path='/login' element={<Login />}>
                </Route>
                <Route path='/register' element={<Register />}>
                </Route>
            </Routes>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    )
}

export default Layout;
